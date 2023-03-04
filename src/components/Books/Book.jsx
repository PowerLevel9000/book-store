import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book-wrapper">
    <h2 className="book-title">{title}</h2>
    <span className="book-author">{author}</span>
    <button className="button remove" type="button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
