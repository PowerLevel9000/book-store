import { useSelector } from 'react-redux';
import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const { bookstore: { bookStore: books } } = useSelector((store) => store);
  console.log(books);
  const BookComponent = books.map(
    (book) => (
      <Book
        key={book.id}
        id={book.id}
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
