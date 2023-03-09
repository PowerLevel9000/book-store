import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };
  return (
    <form className="Add-Form" onSubmit={handleAdd}>
      <h2>ADD NEW BOOK</h2>
      <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Add Book Title" required />
      <input value={author} type="text" onChange={(event) => setAuthor(event.target.value)} placeholder="Add Book Author" required />
      <button type="submit" className="button add">Add Book</button>
    </form>
  );
};

export default Form;
