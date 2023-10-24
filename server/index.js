const express = require("express");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require("uuid");

// Middleware
app.use(cors());
app.use(express.json());

// mySQL Connection
const mysql = require("mysql2");

// Get Database
const connection = new mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "project-app",
});

// To Connect to Database use this command (ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';) on your mySQLWorkbench

// Check Database connected
connection.connect((err) => {
  if (err) {
    console.err(`Error connecting to ` + err.stack);
    return;
  }
  console.log(`Connected to the database`);
});

// Create Database of Books in Server
app.post("/upload-books", async (req, res) => {
  const bookID = uuidv4();

  connection.execute(
    "INSERT INTO books (bookID, bookTitle, authorName, bookDescription, imageURL, category, bookPDFURL, bookPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      bookID,
      req.body.bookTitle,
      req.body.authorName,
      req.body.bookDescription,
      req.body.imageURL,
      req.body.category,
      req.body.bookPDFURL,
      req.body.bookPrice,
    ],
    (err, result, fields) => {
      if (err) {
        console.log(`Error while inserting into the database`, err);
        return res.status(400).send();
      }
      return res.status(201).json({ message: `Insert successfully` });
    }
  );
});

// Update Database of Books in Server
app.put("/book/:bookID", async (req, res) => {
  connection.query(
    "UPDATE books SET bookTitle = ?, authorName = ?, bookDescription = ?, imageURL =?, category = ?, bookPDFURL = ?, bookPrice = ? WHERE bookID = ?",
    [
      req.body.bookTitle,
      req.body.authorName,
      req.body.bookDescription,
      req.body.imageURL,
      req.body.category,
      req.body.bookPDFURL,
      req.body.bookPrice,
      req.params.bookID,
    ],
    (err, result, fields) => {
      if (err) {
        console.log(`Error while updating the database`, err);
        return res.status(400).send();
      }
      return res.status(200).json({ message: `Update succesfully` });
    }
  );
});

// Delete Database of Books in Server
app.delete("/book/:bookID", async (req, res) => {
  connection.execute(
    "DELETE FROM books WHERE bookID = ?",
    [req.params.bookID],
    (err, result, feilds) => {
      if (err) {
        console.log(`Error while deleting the database`, err);
        return res.status(400).send();
      }
      return res.status(200).json({ message: `Delete succesfully` });
    }
  );
});

// Show all books in the database
app.get("/all-books", (req, res) => {
  const category = req.query.category;
  let sql = "SELECT * FROM books";

  if (category) {
    sql += " WHERE `category` = ?";
  }

  connection.query(sql, [category], (err, result, fields) => {
    if (err) {
      console.log(`Error to show the database`, err);
      res.status(400).send();
    }
    console.log(`Show books successfully`);
    res.status(200).send(result);
  });
});

// Random Images from the database
app.get("/book/images", async (req, res) => {
  connection.query(
    "SELECT * FROM books ORDER BY RAND() LIMIT 5",
    (err, result, fields) => {
      if (err) {
        console.log(`Error to fetch images`, err);
        res.status(400).send();
      }
      console.log(`Fetch images successfully`);
      res.status(200).send(result);
    }
  );
});

// Random Examples books from the database
app.get("/book/example", async (req, res) => {
  connection.query(
    "SELECT * FROM books ORDER BY RAND() LIMIT 10",
    (err, result, fields) => {
      if (err) {
        console.log(`Error to fetch examples`, err);
        res.status(400).send();
      }
      console.log(`Fetch examples successfully`);
      res.status(200).send(result);
    }
  );
});

// Show single books
app.get("/book/:bookID", async (req, res) => {
  connection.query(
    "SELECT * FROM books WHERE bookID = ?",
    [req.params.bookID],
    (err, result, fields) => {
      if (err) {
        console.log.error(`Error to show book`, err);
        res.status(500).send();
      }
      console.log(`Show books with id successfully`);
      res.status(200).send(result);
    }
  );
});

// PORT of Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
});
