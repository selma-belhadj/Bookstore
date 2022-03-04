import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { fetchBooks, deleteBook } from '../redux/books/Books';

const ListOfBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBooks()), []);
  const books = useSelector((state) => state.books);
  const percentage = Math.floor(Math.random() * 90);
  const BooksSet = books.book.map((book) => (
    <React.Fragment key={book.item_id}>
      <div className="card">
        <div className="details">
          <ul>
            <li>
              <span className="title">
                {book.title}
                {' '}
              </span>
              <span className="category">
                {book.category}
                {' '}
              </span>
              <div className="actions">
                <button type="button" className="book-btn">Comments</button>
                <div className="vertical-separator" />
                <button type="button" className="book-btn">Edit</button>
                <div className="vertical-separator" />
                <button type="button" onClick={() => dispatch(deleteBook(book.item_id))} className="book-btn">Remove</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="progress">
          <div className="circular-progress-bar">
            <CircularProgressbar value={percentage} />
          </div>
          <div className="count">
            <p>{`${percentage}%`}</p>
            <span>Completed</span>
          </div>
        </div>
        <div className="chapter">
          <span>CURRENT CHAPTER</span>
          <p>
            Chapter 7
          </p>
          <button type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </React.Fragment>
  ));
  return (
    <div className="book-container">
      { BooksSet }
    </div>
  );
};

export default ListOfBooks;
