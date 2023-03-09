import { createSlice } from '@reduxjs/toolkit';

//  initial sate

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
    })
    ,
  },
});
// eslint-disable-next-line
// console.log(bookSlice);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
