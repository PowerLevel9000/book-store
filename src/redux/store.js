import { configureStore } from '@reduxjs/toolkit';
import bookStoreReducer from './books/bookSlice';
import categoriesSliceReducer from './categories/catagoriesSlice';

const store = configureStore({
  reducer: {
    bookstore: bookStoreReducer,
    category: categoriesSliceReducer,
  },
});

export default store;
