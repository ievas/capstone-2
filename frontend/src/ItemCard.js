import React, { useState } from "react";
import "./ItemCard.css";



/** Show limited information about an item.
 *
 * Is rendered by ItemCardList to show a "card" for each item.
 *
 * Receives apply func prop from parent, which is called on apply.
 *
 * ItemCardList -> ItemCard
 */

function ItemCard({ itemName, price, imageUrl, rating, itemDescription, storeId, itemsInStock, tags }) {
    //uzrakstīt addToCart funkciju, uztaisīt grozu


    let [itemsInCart, addToCart] = useState(0)

    async function updateCart(evt) {
        console.log("Item added to cart")
            addToCart(itemsInCart + 1);
        //preces info jāsūta uz grozu
        //grozā jāsaņem informācija un jāuzzīmē
      }

    //async?
    //pārvērst reitinga skaitli zvaigznēs


    return (
        <div className="ItemCard card"> 
          <div className="card-body">
            <h6 className="card-title">{itemName}</h6>
            <p>{storeId}</p>
            <div className="image-container">
                <img src={imageUrl} style= {{maxWidth: 200, maxHeight: 300}}/>
            </div>
            <div className="rating-container">
                {rating}
            </div>
            {price && <div><small>Price: {price}</small></div>}
            <div className="description-container">{itemDescription}</div>
            <button
                className="btn btn-success font-weight-bold text-uppercase float-right"
                onClick={updateCart}
            >Add to cart
            </button>
          </div>
        </div>
    );
  }

// }


export default ItemCard;