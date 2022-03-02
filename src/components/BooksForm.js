import React from 'react';

function BooksForm() {
  return (
    <div>
      <form action="submit" className="Booksform">
        <input type="text" placeholder="Enter book name" />
        <input type="text" placeholder="Enter author name" />
        <input type="text" placeholder="Enter book percentage" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default BooksForm;
