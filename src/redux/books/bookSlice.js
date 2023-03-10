import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
      category: book.category,
    }),
  });
  const data = await response.json();
  return data;
});

const initialState = {
  bookStore: [],
  isLoading: false,
  booksLoading: false,
};

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  const response = await fetch(`${url}/books`);
  const data = await response.json();
  return data;
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  const response = await fetch(`${url}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

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

    builder.addCase(postBooks.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));

    builder.addCase(postBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));

    builder.addCase(getBooks.fulfilled, (state, action) => {
      const newBook = Object.entries(action.payload).map(
        (book) => ({
          itemId: book[0],
          ...book[1][0],
        }),
      );
      return {
        ...state,
        bookStore: newBook,
        booksLoading: false,
      };
    });

    builder.addCase(getBooks.pending, (state) => ({
      ...state,
      booksLoading: true,
    }));

    builder.addCase(getBooks.rejected, (state) => ({
      ...state,
      booksLoading: false,
    }));

    builder.addCase(deleteBook.pending, (state) => ({
      ...state,
    }));

    builder.addCase(deleteBook.fulfilled, (state) => ({
      ...state,
    }));

    builder.addCase(deleteBook.rejected, (state) => ({
      ...state,
    }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
