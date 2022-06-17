import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      login: "Tamerlan",
      email: "tamerlan.musaev@mail.ru",
      avatar:
        "https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/009_avatar_beard_user_man_account_male_profile-512.png",
    },
    {
      login: "Tommy",
      email: "tommy.musaev@mail.ru",
      avatar:
        "https://cdn4.iconfinder.com/data/icons/scenarium-vol-7/128/037_man_scream_angry-512.png",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
});

export const { setLogin } = usersSlice.actions;

export default usersSlice.reducer;
