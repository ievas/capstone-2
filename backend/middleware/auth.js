"use strict";

let jwt = require("jsonwebtoken");
let { SECRET_KEY } = require("../config");
let { UnauthorizedError } = require("../expressError");

//User authentication
function authenticateJWT(req, res, next) {
    try {
        let authHeader = req.headers && req.headers.authorization;
        if(authHeader) {
            let token = authHeader.replace(/^[Bb]earer /, "").trim();
            res.locals.user = jwt.verify(token, SECRET_KEY);
        }
        return next();
    } catch (err) {
        return next();
    }
}

//Check if the user is logged in

function ensureLoggedIn(req, res, next) {
    try {
        if (!res.locals.user) throw new UnauthorizedError();
        return next();
    } catch (err) {
        return next(err);
    }
}

//Check if authorized; Check if store holder

module.exports = {
    authenticateJWT,
    ensureLoggedIn
}