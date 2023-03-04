import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Viking Raiders',
      author: 'Jhon Snow',
    },
    {
      id: 2,
      title: 'Viking Raiders',
      author: 'Jhon Snow',
    },
  ];
  const BookComponent = books.map(
    (book) => (
      <Book
        key={book.id}
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
