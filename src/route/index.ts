import { Router } from "express";
import expenseRouter from "./expense.route";

const routes = Router();

routes.use("/expense", expenseRouter);

export default routes;
