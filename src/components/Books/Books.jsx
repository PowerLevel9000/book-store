import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../../redux/books/bookSlice';

const Books = () => {
  const { bookstore: { bookStore: books } } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const BookComponent = books.map(
    (book) => (
      <Book
        key={book.itemId}
        id={book.itemId}
        title={book.title}
        author={book.author}
      />
    ),
  );
  return (
    <section className="book-shelf">
      {BookComponent}
      <Form />
    </section>
  );
};

export default Books;
