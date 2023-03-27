import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../../redux/books/bookSlice';

const Books = () => {
  const {
    bookstore: { bookStore: books, booksLoading: loading },
  } = useSelector((store) => store);
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
        category={book.category}
      />
    ),
  );
  return (
    <BooksWrapper>
      {loading ? (
        <div className="loader">
          <BallTriangle />
        </div>
      ) : (
        BookComponent
      )}
      <hr />
      <Form />
    </BooksWrapper>
  );
};

const BooksWrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;

  .loader {
    display: grid;
    place-items: center;
  }
`;

export default Books;
