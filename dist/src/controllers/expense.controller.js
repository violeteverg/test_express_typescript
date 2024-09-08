"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const expense_1 = require("../model/expense");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expense = yield expense_1.default.findAll();
        res.status(200).json({
            message: "success get data",
            data: expense,
        });
    }
    catch (error) {
        res.status(500).json({
            message: `Error fetching products: ${error.message}`,
        });
    }
});
const createData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, category, amount } = req.body;
        if (!title || !category || !amount) {
            return res
                .status(400)
                .json({ message: `must fill title,category and amount` });
        }
        const create = yield expense_1.default.create({ title, category, amount });
        res.status(200).json({
            message: "success create data",
            data: create,
        });
    }
    catch (error) {
        res.status(500).json({
            message: `error => ${error}`,
        });
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield expense_1.default.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!data) {
            return res.json({
                message: "data not found",
            });
        }
        res.status(200).json({
            message: " success get data",
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: `error => ${error}`,
        });
    }
});
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield expense_1.default.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: " already update",
        });
    }
    catch (error) {
        res.status(500).json({
            message: `error => ${error}`,
        });
    }
});
const deleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield expense_1.default.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "already delete",
        });
    }
    catch (error) {
        res.status(500).json({
            message: `error => ${error}`,
        });
    }
});
exports.default = { getAll, createData, getById, updateData, deleteData };
