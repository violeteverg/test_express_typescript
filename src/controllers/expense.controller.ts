import { Router, Request, Response } from "express";
import Expense from "../model/expense";

const getAll = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findAll();
    res.status(200).json({
      message: "success get data",
      data: expense,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error fetching products: ${(error as Error).message}`,
    });
  }
};

const createData = async (req: Request, res: Response) => {
  try {
    const { title, category, amount } = req.body;

    if (!title || !category || !amount) {
      return res
        .status(400)
        .json({ message: `must fill title,category and amount` });
    }

    const create = await Expense.create({ title, category, amount });
    res.status(200).json({
      message: "success create data",
      data: create,
    });
  } catch (error) {
    res.status(500).json({
      message: `error => ${error}`,
    });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const data = await Expense.findOne({
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
  } catch (error) {
    res.status(500).json({
      message: `error => ${error}`,
    });
  }
};

const updateData = async (req: Request, res: Response) => {
  try {
    await Expense.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: " already update",
    });
  } catch (error) {
    res.status(500).json({
      message: `error => ${error}`,
    });
  }
};

const deleteData = async (req: Request, res: Response) => {
  try {
    await Expense.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: "already delete",
    });
  } catch (error) {
    res.status(500).json({
      message: `error => ${error}`,
    });
  }
};

export default { getAll, createData, getById, updateData, deleteData };
