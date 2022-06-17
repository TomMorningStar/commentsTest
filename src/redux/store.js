import { configureStore } from "@reduxjs/toolkit";
import comments from "./slices/comments.Slice";
import users from "./slices/users.Slice";

export const store = configureStore({
  reducer: {
    comments,
    users,
  },
});
