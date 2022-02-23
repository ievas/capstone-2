import React, { useContext, useState, useEffect} from "react";
import "./Room.css";
import SearchForm from "./SearchForm";
import LsohApi from "./api";
import ItemCardList from "./ItemCardList";
import LoadingSpinner from "./LoadingSpinner";
//kā parādīt produktus pēc kritērija? rakstot pieprasījumu uz api
//vai pieprasījums uz api prasa visus reizē vai pa vienam? vai jāraksta funkcija, lai dabūtu, visus, kas atbilst parametram?
//datus iesūtīs istabā, un istaba pārsūtīs produktam?
//kur datus dabūs pirmo reizi - vai api.js vai arī šeit?
//kas ir istaba - istaba ir lapa, kurā redzami dažādi produkti vienā kategorijā/tēmā
//kas ir veikals - veikalā redzami visi veikala tirgotie produkti

function Room(){

    const [items, setItems] = useState(null);

    useEffect(function getAllItemsOnMount() {
        search();
    }, []);

    /** Triggered by search form submit; reloads items. */
  async function search(keyword) {
    let items = await LsohApi.getItems(keyword);
    setItems(items);
  }



  if (!items) return <LoadingSpinner />;

  return (
      <div className="ItemList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {items.length
            ? <ItemCardList items={items} />
            : <p className="lead">Sorry, no results were found!</p>
        }
      </div>
  );

}

export default Room;