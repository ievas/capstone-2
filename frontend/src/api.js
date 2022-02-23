import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

 //:)

 class LsohApi {

    // the token for interactive (?) with the API will be stored here.
  static token;


  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${LsohApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
    //   console.error("API Error:", err.response);
    //   let message = err.response.data.error.message;
    //   throw Array.isArray(message) ? message : [message];
        console.log("error", err);
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    console.log(res)
    return res.user;
  }


   /** Get token for login from username, password. */

   static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }


  /** Get list of products (filtered by search parameter if not undefined) */
  //kā strādā meklēšana pēc keyword?

  static async getItems(keyword) {
    let res = await this.request("items", { keyword });
    //are thomas wolfe and nero wolfe related?
    return res.items;
  }

 }



 export default LsohApi;