import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/Books';

const BooksForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const submitBookToStore = () => {
    const id = uuidv4();
    const newBook = {
      id,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <form action="submit" className="Booksform">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter book name" />
        <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Enter author name" />
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
