import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

export interface expense {
  id: number;
  title: string;
  category: string;
  amount: number;
}

class Expense extends Model<expense> implements expense {
  id!: number;
  title!: string;
  category!: string;
  amount!: number;
}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { sequelize, tableName: "expense" }
);

export default Expense;
