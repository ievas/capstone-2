"use strict";

let db = require("../db");
let bcrypt = require("bcrypt");

let { UnauthorizedError, NotFoundError, BadRequestError } = require("../expressError");

let { BCRYPT_WORK_FACTOR } = require("../config.js");

class User {
    
    
    static async authenticate(username, password) {
        let result = await db.query(
            `SELECT username,
                    password,
                    first_name AS "firstName",
                    last_name AS "lastName",
                    email,
                    street_address AS streetAddress,
                    city,
                    zip,
                    state,
                    is_store_holder AS "isStoreHolder
            FROM users
            WHERE username = $1`,
            [username], 
        );

        let user = result.rows[0];

        if (user) {
            let isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
                delete user.password;
                return user;
            }
        }

        throw new UnauthorizedError("Invalid username/password");
    }


    static async register({ username, password, firstName, lastName, email, streetAddress, city, zip, state, isStoreHolder }) {
        let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        let result = await db.query(
            `INSERT INTO users
                (username, password, first_name, last_name, email, street_address, city, zip, state, is_store_holder)
            VALUES ($1, $2,$3,$4, $5, $6, $7, $8, $9, $10)
            RETURNING username, first_name AS "firstName", last_name AS "lastName", email, street_address AS "streetAddress", city, zip, state, is_store_holder AS "isStoreHolder"`,
            [username, password, firstName, lastName, email, streetAddress, city, zip, state, isStoreHolder]
        );
        let user = result.rows[0];

        return user;
    }

    static async getUserInfo(username) {
        let userRes = await db.query(
            `SELECT username,
            first_name AS "firstName", last_name AS "lastName", email, 
            street_address AS "streetAddress", city, zip, 
            state, is_store_holder AS "isStoreHolder"
            FROM users
            WHERE username = $1`, [username]
        );

        let user = userRes.rows[0];

        if (!user) throw new NotFoundError(`No user: ${username}`);

        return user;
    }
}

module.exports = User;