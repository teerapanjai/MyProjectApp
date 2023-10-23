import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const EditBook = () => {
  const [book] = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoirs",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectBookCategory, setSelectBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectBookCategory(event.target.value);
  };

  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const bookDescription = form.bookDescription.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookPDFURL = form.bookPDFURL.value;
    const bookPrice = form.bookPrice.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      bookDescription,
      imageURL,
      category,
      bookPDFURL,
      bookPrice,
    };

    console.log(updateBookObj);

    // Update book data
    fetch(`http://localhost:8000/book/${book.bookID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert(`Update Successfully`);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update book data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* Book Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title"></Label>
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              defaultValue={book.bookTitle}
            />
          </div>

          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name"></Label>
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              defaultValue={book.authorName}
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex gap-8">
          {/* Book Image URL*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL"></Label>
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book image URL"
              required
              type="text"
              defaultValue={book.imageURL}
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category"></Label>
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              defaultValue={book.category}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description"></Label>
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            className="w-full"
            rows={6}
            defaultValue={book.bookDescription}
          />
        </div>

        <div className="flex gap-8">
          {/* Book PDF Link */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF Link"></Label>
            </div>
            <TextInput
              id="bookPDFURL"
              name="bookPDFURL"
              placeholder="Book PDF URL"
              required
              type="text"
              defaultValue={book.bookPDFURL}
            />
          </div>
          {/* Book Price */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPrice" value="Book Price"></Label>
            </div>
            <TextInput
              id="bookPrice"
              name="bookPrice"
              placeholder="Book price"
              required
              type="text"
              defaultValue={book.bookPrice}
            />
          </div>
        </div>

        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
