"use strict";

let jsonschema = require("jsonschema");

let cors = require('cors');
let express = require("express");
// let cors = require("cors");

let { NotFoundError } = require("./expressError");

let { authenticateJWT } = require("./middleware/auth");

let authRoutes = require("./routes/auth");

let usersRoutes = require("./routes/users");

let app = express();

let Item = require("./models/item");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(authenticateJWT);

app.use("/users", usersRoutes);

///first page routes

app.get('/items', async function (req, res, next) {

    console.log(req.query)

    let keyword = req.query.keyword;

    console.log(keyword);
    
    try {
        let items = await Item.getAllItems(keyword);
        return res.json({ items });

    } catch (err) {
        return next(err);
    }
})



//Error handling

app.use(function (req, res, next) {
    return next(new NotFoundError());
})


app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;
