import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ButtonWrap from './ButtonWrap';
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
    <FormWraper className="Add-Form" onSubmit={handleAdd}>
      {error && <p>{error}</p>}
      <div className="wrap">
        <h2>ADD NEW BOOK</h2>
        <div className="input">
          <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Add Book Title" required />
          <input value={author} type="text" onChange={(event) => setAuthor(event.target.value)} placeholder="Add Book Author" required />
          <input value={category} type="text" onChange={(event) => setCatagory(event.target.value)} placeholder="Add Book catagory" required />
        </div>
      </div>
      <div className="button-wrap">
        {loading ? (
          <ButtonWrap type="submit" className="button add" disabled>Adding ....</ButtonWrap>
        ) : (
          <ButtonWrap type="submit" className="button add">Add Book</ButtonWrap>
        )}
      </div>
    </FormWraper>
  );
};

const FormWraper = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
margin: 1rem 0 3rem 0;
  .wrap {
    width:70%;
  }  
  
  .button-wrap {
    width: 20%;
    height: 100%
  }
  
  button {
    display: grid;
    place-item: center;
    width: 100%;
    padding: 1rem;
    margin-top: 4rem;
    border-radius: 0.8rem;
  }

  p {
    text-align: center;
    color: red;
  }

  h2 {
    font-family: Montserrat;
    font-size: 1.25rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.18px;
    color: #888;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  input {
    padding: .5rem;
    outline: none;
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    border: .5px solid #c4c4c4;
    border-radius: 5px;
  }

  input [type="placeholder"] {
    color: #c4c4c4
  }
`;

export default Form;
