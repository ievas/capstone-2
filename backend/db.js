"use strict";

//Database setup

let { Client } = require("pg");

function getDatabaseUri() {

    return (process.env.NODE_ENV === "test") ? "lsoh_test" : process.env.DATABASE_URL || "lsoh"

}
console.log('db', getDatabaseUri())
let db = new Client({
    
    connectionString: getDatabaseUri(),
    
    
    // ssl: {
    //     rejectUnauthorised: false
    // }
});

db.connect();

module.exports = db;


