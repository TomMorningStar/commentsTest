import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setItems(state, action) {
      console.log(action.payload);
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setItems } = commentsSlice.actions;

export default commentsSlice.reducer;
