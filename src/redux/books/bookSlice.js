import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2qDaC6YvyF2tnB4OHcf8';

// create async thunk
export const postBooks = createAsyncThunk('book/postBooks', async (book) => {
  const response = await fetch(`${url}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: new Date(),
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  });
  const data = await response.json();
  return data;
});

const initialState = {
  bookStore: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
};

const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author, category } = action.payload;
      const newBook = {
        itemId: `item${state.bookStore.length + 1}`, title, author, category,
      };
      state.bookStore.push(newBook);
    },
    removeBook: (state, action) => ({
      ...state,
      bookStore: state.bookStore.filter((book) => book.itemId !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(postBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBooks.fulfilled, (state, action) => {
      state.bookStore.push(action.payload);
      return {
        ...state,
        isLoading: true,
      };
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
