import React from "react";
import ItemCard from "./ItemCard";

/** Show list of item cards.
 *
 * Used by both Room and ShopInfo to list items. Receives an apply
 * func prop which will be called by ItemCard on apply.
 *
 * ItemList -> ItemCardList -> ItemCard
 * ShopInfo -> ItemCardList -> ItemCard
 *
 */

 ///sarakstu ar items atsūtīja room

function ItemCardList({ items }) {

    console.log("HEEEEEEEEEIIIIIIIII")

    console.log(items[0].imageUrl)

  return (
      <div className="ItemCardList">
        {items.map(item => (
            <ItemCard
                key={item.id}
                id={item.id}
                itemName={item.itemName}
                price={item.price}
                imageUrl={item.imageUrl}
                rating={item.rating}
                itemDescription ={item.itemDescription}
                storeId = {item.storeId}//all i need is a store name
                itemsInStock ={item.itemsInStock}
                tags = {item.tags}
            />
        ))}
      </div>
  );
}

export default ItemCardList;