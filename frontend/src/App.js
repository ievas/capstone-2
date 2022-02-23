import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navigation from "./Navigation";
import Routes from "./Routes";
import jwt from "jsonwebtoken";
import './App.css';
import LsohApi from "./api";


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

export const TOKEN_STORAGE_ID = "lsoh-token";

function App() {


  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  


  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          LsohApi.token = token;
          let currentUser = await LsohApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);


    /** Handles site-wide logout. */
    function logout() {
      setCurrentUser(null);
      setToken(null);
    }
  
    /** Handles site-wide signup.
     *
     * Automatically logs them in (set token) upon signup.
     *
     * Make sure you await this function and check its return value!
     */
    async function signup(signupData) {
      try {
        let token = await LsohApi.signup(signupData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("signup failed", errors);
        return { success: false, errors };
      }
    }
  
    /** Handles site-wide login.
     *
     * Make sure you await this function and check its return value!
     */
    async function login(loginData) {
      try {
        let token = await LsohApi.login(loginData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("login failed", errors);
        return { success: false, errors };
      }
    }

    ///kur/kā taisīt meklēšanu pēc atslēgas vārda?


  
      return (
      <BrowserRouter>
        
          <div className="App">
            <Navigation logout={logout}/>
            <Routes login={login} signup={signup}/>
          </div>
        
      </BrowserRouter>
  );
}

export default App;
