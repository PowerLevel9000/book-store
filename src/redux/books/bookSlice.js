import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookStore: [],
};
const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookStore.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookStore.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
