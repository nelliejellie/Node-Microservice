// models/AuditLog.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    numberOfPages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "books",
    timestamps: false,
  }
);

export default Book;
