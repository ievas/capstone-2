"use strict";

let app = require("./app");
let { PORT } = require("./config");

app.listen( PORT, function () {
    console.log(`Started on http://localhost:${PORT}`);
})