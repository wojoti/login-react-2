/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  password: string;
  success: boolean;
  name: string;
  role: string;
}

const initialState: UserState = {
  email: "",
  password: "",
  success: false,
  name: "",
  role: "",
};

type UserCredentials = { email: string; password: string };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserCredentials>) => {
      if (
        action.payload.email === "test@test.pl" &&
        action.payload.password === "test"
      ) {
        state.success = true;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.name = "name";
        state.role = "role";
      } else {
        state.success = false;
        state.email = "";
        state.password = "";
        state.name = "";
        state.role = "";
      }
    },
    logOut: (state) => {
      state.success = false;
      state.email = "";
      state.password = "";
      state.name = "";
      state.role = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
