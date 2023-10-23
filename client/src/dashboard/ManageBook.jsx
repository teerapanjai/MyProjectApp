import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  // Delete a Books
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/book/${id}`,
    {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is deleted")
      // setAllBooks(data);
    })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* Table for Books */}
      <Table hoverable className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {allBooks.map((books, index) => (
          <Table.Body className="divide-y" key={books.bookID}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {books.bookTitle}
              </Table.Cell>
              <Table.Cell>{books.authorName}</Table.Cell>
              <Table.Cell>{books.category}</Table.Cell>
              <Table.Cell>{books.bookPrice}</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                  to={`/admin/dashboard/edit-books/${books.bookID}`}
                >
                  Edit
                </Link>
                <button onClick={() => handleDelete(books.bookID)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageBook;
