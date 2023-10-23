import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const [book] = useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24">
      <img src={book.imageURL} alt="" className="h-96" />
      <h2>{book.bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
