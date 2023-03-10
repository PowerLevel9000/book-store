import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, postBooks } from '../../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      await dispatch(postBooks({ title, author }));
      dispatch(addBook({ title, author }));
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error(error);
    }
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
