import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Under Constructions';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => initialState,
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
