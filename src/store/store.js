import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const slice = createSlice({
  name: "counterFn",
  initialState,
  reducers: {
    increment: (state, action) => {
      return (state = action.payload);
    },

    decrement: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { increment, decrement } = slice.actions;
const store = configureStore(slice);

export default store;
