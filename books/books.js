import express from "express";
import BookRouter from "./Routes/BookRoute.js";
import sequelize from "./config/db.js"; // Adjust the path as necessary

const app = express();
app.use(express.json());

// connect to mysql db
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Automatically creates tables if they don't exist
    console.log("Database connected and models synced");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

//books
app.use("/api", BookRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
