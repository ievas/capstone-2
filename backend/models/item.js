"use strict";

let db = require("../db");

let { NotFoundError, BadRequestError } = require("../expressError");

class Item {
    
    
//get all items
    static async getAllItems(keyword) {


        let params = [];
        let where_clause = '';

        if (keyword) {
            where_clause = `WHERE item_name LIKE $1`;
            params = [keyword];
        }
console.log({where_clause})
        let result = await db.query(
            `SELECT item_name AS "itemName", 
                    price, 
                    image_url AS "imageUrl", 
                    rating, 
                    item_description AS "itemDescription", 
                    store_id AS "storeId", 
                    items_in_stock AS "itemsInStock", 
                    tags
            FROM items
            ${where_clause}
            ORDER BY item_name`, params
        );
        return result.rows;
    }
}


module.exports = Item;