"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const route_1 = require("./src/route");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.use("/api", route_1.default);
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
