"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("expense_nodejs", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false,
    },
});
exports.default = sequelize;
