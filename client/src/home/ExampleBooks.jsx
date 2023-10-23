import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const ExampleBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/book/example`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <BookCards book={books} headline="Example Books" />
    </div>
  );
};

export default ExampleBooks;
