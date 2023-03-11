import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, postBooks } from '../../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCatagory] = useState('');
  const { bookstore: { isLoading: loading } } = useSelector((store) => store);
  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      await dispatch(postBooks({ title, author, category }));
      dispatch(addBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCatagory('');
    } catch (error) {
      setError('An error occurred while adding the book. Please try again later.');
    }
  };
  return (
    <form className="Add-Form" onSubmit={handleAdd}>
      {error && <p>{error}</p>}
      <h2>ADD NEW BOOK</h2>
      <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Add Book Title" required />
      <input value={author} type="text" onChange={(event) => setAuthor(event.target.value)} placeholder="Add Book Author" required />
      <input value={category} type="text" onChange={(event) => setCatagory(event.target.value)} placeholder="Add Book catagory" required />
      {loading ? (
        <button type="submit" className="button add" disabled>Adding ....</button>
      ) : (
        <button type="submit" className="button add">Add Book</button>
      )}
    </form>
  );
};

export default Form;
