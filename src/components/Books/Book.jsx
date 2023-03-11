import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressProvider from '../../redux/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';

import { deleteBook, removeBook } from '../../redux/books/bookSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const [valueEnd] = React.useState(66);
  return (
    <BookCard>
      <div className="fames">
        <div className="book-frame">
          <span className="catagories">{category}</span>
          <h2 className="book-title">{title}</h2>
          <span className="book-author">{author}</span>
        </div>
        <div className="button-frame">
          <button type="button">comments</button>
          <div className="line" />
          <button
            onClick={() => {
              dispatch(deleteBook(id));
              dispatch(removeBook(id));
            }}
            className="button remove"
            type="button"
          >
            Remove
          </button>
          <div className="line" />
          <button type="button">comments</button>
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
          <span>CURRENT CHAPTER</span>
          <h5>Chapter random</h5>
          <button type="button" className="progress">UPDATE PROGRESS</button>
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
  border: 1px solid black;

  .fames {
    padding: 1rem;
  }

  .button-frame {
    display: flex;

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
`;

export default Book;
