import Book from "../models/Book.js";

export const createBook = async (req, res) => {
  const { title, author, publishedDate, numberOfPages } = req.body;

  try {
    const book = await Book.create({
      title,
      author,
      publishedDate,
      numberOfPages,
    });
    res.status(201).json(book);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Failed to create book" });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, publishedDate, numberOfPages } = req.body;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    book.title = title;
    book.author = author;
    book.publishedDate = publishedDate;
    book.numberOfPages = numberOfPages;

    await book.save();
    res.status(200).json(book);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Failed to update book" });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    await book.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Failed to delete book" });
  }
};
