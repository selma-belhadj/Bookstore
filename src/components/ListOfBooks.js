import React from 'react';

const ListOfBooks = () => (
  <div>
    <ul className="Bookslist">
      <li>
        <span>Book 1 </span>
        <span>Author 1 </span>
        <span>66% </span>
        <button type="button">Remove</button>
      </li>
      <li>
        <span>Book 2 </span>
        <span>Author 2 </span>
        <span>96% </span>
        <button type="button">Remove</button>
      </li>
      <li>
        <span>Book 3 </span>
        <span>Author 3 </span>
        <span>56% </span>
        <button type="button">Remove</button>
      </li>
    </ul>
  </div>
);

export default ListOfBooks;
