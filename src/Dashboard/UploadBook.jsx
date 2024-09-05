

import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value; // New field for price

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      price, // Include price in the book object
    };

    console.log("Submitting book data:", bookObj);

    fetch("https://book-server-chi.vercel.app/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => {
        console.log("Server response:", res);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Server data:", data);
        alert("Book uploaded successfully!");
        form.reset();
        setErrorMessage(null);
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
        setErrorMessage(`Failed to upload book: ${error.message}`);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book!</h2>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>

        {/* first row */}
        <div className='flex gap-8'>

          {/* book name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              name='bookTitle'
              className='w-full'
            />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name='authorName'
              className='w-full'
            />
          </div>

        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* book url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name='imageURL'
              className='w-full'
            />
          </div>

          {/* book category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>

        </div>

        {/* 3rd Row */}
        <div className='flex gap-8'>
          {/* full width div for book description */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              id="bookDescription"
              placeholder="Book Description"
              required
              type="text"
              name='bookDescription'
              className='w-full'
              rows={4}
            />
          </div>

          {/* book pdf url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF Link" />
            </div>
            <TextInput
              id="bookPDFURL"
              placeholder="Paste Book PDF URL here"
              required
              type="text"
              name='bookPDFURL'
              className='w-full'
            />
          </div>
        </div>

        {/* 4th Row */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Book Price" />
          </div>
          <TextInput
            id="price"
            placeholder="Book Price (e.g., 19.99)"
            required
            type="number"
            step="0.01"
            name='price'
            className='w-full'
          />
        </div>

        {/* Submit btn */}
        <Button type="submit" className='mt-5'>
          Upload book
        </Button>

      </form>
    </div>
  )
}

export default UploadBook;
