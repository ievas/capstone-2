"use strict";

//Routes for authentication

let jsonschema = require("jsonschema");

let User = require("../models/user");

let express = require("express");

let router = new express.Router();

let { createToken } = require("../helpers/tokens");

let { BadRequestError } = require("../expressError");

router.post("/token", async function (req, res, next) {
    try {
        let validator = jsonschema.validate(req.body, userAuthSchema);
        if (!validator.valid) {
            let error = validator.errors.map(e => e.stack);
            throw new BadRequestError(error);
        }

        let { username, password } = req.body;
        let user = await User.authenticate(username, password);
        let token = createToken(user);
        return res.json({ token });
    } catch (err){
        return next(err);
    }
});


router.post("/register", async function (req, res, next){
    try {
        let validator = jsonschema.validate(req.body);
        if (!validator.valid) {
            let error = validator.errors.map(e=> e.stack);
            throw new BadRequestError(error);
        }

        let newUser = await User.register({ ...req.body, isAdmin: false });
        let token = createToken(newUser);
        return res.status(201).json( { token });
    } catch (err) {
        return next(err);
    }
})

module.exports = router;

