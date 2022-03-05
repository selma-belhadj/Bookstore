/* eslint-disable camelcase */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/Books';

const BooksForm = () => {
  const dispatch = useDispatch();
  const [titleState, setTitle] = useState('');
  const [categoryState, setCategory] = useState('');
  const submitBookToStore = () => {
    const item_id = uuidv4();
    const title = titleState;
    const category = categoryState;
    const newBook = {
      item_id,
      title,
      category,
    };
    dispatch(postBook(newBook));
  };
  const submitCategorie = (e) => {
    setCategory(e);
  };

  return (
    <div className="form">
      <h3>ADD NEW BOOK</h3>
      <form action="submit" className="Booksform">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter book name" />
        <select onChange={(e) => submitCategorie(e.target.value)} type="text">
          <option value="" disabled>
            Category
          </option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="Detective & Mystery">Detective & Mystery</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
        </select>
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
