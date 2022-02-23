"use strict";

require("dotenv").config();

let SECRET_KEY = process.env.SECRET_KEY || "natural-enough";

let PORT = + process.env.PORT;



let BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 13;

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR
}

