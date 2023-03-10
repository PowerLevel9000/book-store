import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../../redux/books/bookSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-wrapper">
      <h2 className="book-title">{title}</h2>
      <span className="book-author">{author}</span>
      <button
        onClick={() => {
          dispatch(deleteBook(id));
          dispatch(removeBook(id));
        }}
        className="button remove"
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
