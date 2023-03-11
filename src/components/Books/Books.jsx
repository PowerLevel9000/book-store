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
  console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
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
        <BallTriangle />
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
`;

export default Books;
