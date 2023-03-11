import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressProvider from '../../redux/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import ButtonWrap from './ButtonWrap';
import { deleteBook, removeBook } from '../../redux/books/bookSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const [valueEnd] = useState(Math.floor(Math.random() * 81) + 20);
  const percentage = ((valueEnd * 40) / 100).toFixed();
  return (
    <BookCard>
      <div className="fames">
        <div className="book-frame">
          <span className="catagories">{category}</span>
          <h2 className="book-title">{title}</h2>
          <span className="book-author">{author}</span>
        </div>
        <div className="button-frame">
          <button className="book-author" type="button">comments</button>
          <div className="line" />
          <button
            className="book-author button remove"
            onClick={() => {
              dispatch(deleteBook(id));
              dispatch(removeBook(id));
            }}
            type="button"
          >
            Remove
          </button>
          <div className="line" />
          <button className="book-author" type="button">comments</button>
        </div>
      </div>

      <div className="update">
        <div className="stats">
          <ProgressProvider valueStart={10} valueEnd={valueEnd}>
            {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
          </ProgressProvider>
          <div>
            <h5>
              {valueEnd}
              %
            </h5>
            <span>completed</span>
          </div>
        </div>
        <div className="line" />
        <div className="info">
          <div>
            <span>
              CURRENT CHAPTER
            </span>
            <h5>
              Chapter
              {` ${percentage}`}
            </h5>
          </div>
          <ButtonWrap type="button" className="progress">UPDATE PROGRESS</ButtonWrap>
        </div>
      </div>
    </BookCard>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

const BookCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  height: 10.6rem;
  background: #fff;

  .book-frame {
    height: 10vh;
    h2 {
      margin: 0;
    }
  }
  .fames {
    width: 30%;
    max-width: 250px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    .line {
      width: 2px;
      height: 1rem;
      background-color: #e8e8e8;
      transform: rotate(0deg);
    }

    .catagories {
      text-transform: capitalize;
      color: #121212;
      opacity: 0.5;
      font-family: Montserrat;
      font-size: 0.875rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }

    .book-title {
      text-transform: capitalize;
      font-family: RobotoSlab;
      font-size: 1.375rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: #121212;
    }
  }

  .button-frame {
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
      background-color: transparent;
      border: none;
      margin: 0;
      padding: 0;
    }
  }
  .update {
    display: flex;
    height: 4.25rem;
    padding: 1rem;
    gap: 2rem;

    .line {
      width: 2px;
      height: 100%;
      background-color: #e8e8e8;
      transform: rotate(0deg);
    }
  }

  .stats {
    display: flex;
    flex-dirction: column;
    gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h5 {
        height: fit-content;
        font-family: Montserrat;
        font-size: 2rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #121212;
        margin: 0;
      }

      span {
        font-family: Montserrat;
        font-size: 0.875rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: rgba(0, 0, 0, 0.5)
      }
    }
  }

  .book-author {
    text-transform: capitalize;
    color: #4386bf;
    font-family: RobotoSlab;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h5 {
      margin: 0;
      font-size: 1rem;
    }

    span {
      color: #121212;
      opacity: 0.5;
      font-family: RobotoSlab;
      font-size: 0.813rem;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  }
`;

export default Book;
