import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeComment(state, action) {
      state.items = state.items.filter((obj) => obj.time !== action.payload);
    },
  },
});

export const { setItems, removeComment } = commentsSlice.actions;

export default commentsSlice.reducer;
