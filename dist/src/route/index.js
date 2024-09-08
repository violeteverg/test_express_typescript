"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expense_route_1 = require("./expense.route");
const routes = (0, express_1.Router)();
routes.use("/expense", expense_route_1.default);
exports.default = routes;
