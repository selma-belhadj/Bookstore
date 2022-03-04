import React from 'react';
import PropTypes from 'prop-types';

function BookCard(props) {
  const { title, category } = props;
  return (
    <div>
      <span>
        {title}
        {' '}
      </span>
      <span>
        {category}
        {' '}
      </span>
      <button type="button">Comments</button>
      <button type="button">Edit</button>
      <button type="button">Remove</button>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default BookCard;
