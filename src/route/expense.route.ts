import { Router } from "express";
import expenseController from "../controllers/expense.controller";

const expenseRouter = Router();

expenseRouter.get("/", expenseController.getAll);
expenseRouter.post("/", expenseController.createData);
expenseRouter.get("/:id", expenseController.getById);
expenseRouter.patch("/:id", expenseController.updateData);
expenseRouter.delete("/:id", expenseController.deleteData);

export default expenseRouter;
