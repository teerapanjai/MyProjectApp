import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All book are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((books) => (
          <Card>
            <img src={books.imageURL} alt="" className="w-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{books.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>{books.bookDescription}</p>
            </p>
            <Link
              className="bg-blue-700 font-semibold text-white py-2 rounded text-center"
              to={`/book/${books.bookID}`}
            >
              <button>Buy Now</button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
