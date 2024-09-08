import { Sequelize } from "sequelize";

const sequelize = new Sequelize("expense_nodejs", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default sequelize;
