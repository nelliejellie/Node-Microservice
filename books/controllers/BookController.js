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
