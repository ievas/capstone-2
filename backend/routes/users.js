"use strict";

// routes for users

let jsonschema = require("jsonschema");

let express = require("express");

let { UnauthorizedError, NotFoundError, BadRequestError } = require("../expressError");

let User = require("../models/user");

let { createToken } = require("../helpers/tokens");

let router = express.Router();

//add a new user
router.post("/", async function (req, res, next) {
    try {
        let validator = jsonschema.validate(req.body);
        if (!validator.valid) {
            let err = validator.errors.map(e => e.stack);
            throw new BadRequestError(err);
        }

        let user = await User.register(req.body);
        let token = createToken(user);
        return res.status(201).json({user, token});
    } catch (err) {
        return next(err);
    }
});

//get user info
router.get("/:username", async function (req, res, next) {
    try {
        let user = await User.getUserInfo(req.params.username);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;





