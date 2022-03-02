import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const ListOfBooks = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const deleteBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <ul className="Bookslist">
        {books.map(({ id, title, author }) => (
          <li key={id}>
            <span>
              {title}
              {' '}
            </span>
            <span>
              {author}
              {' '}
            </span>
            <button type="button" onClick={() => deleteBookFromStore(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfBooks;
