import express from "express";
import { createBook, getBooks } from "../controllers/BookController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/books", getBooks);

export default router;
