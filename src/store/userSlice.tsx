/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export type UserState = {
  success: boolean;
  name: string;
  role: string;
  status: string;
};

export type UserCredentials = {
  username: string;
  password: string;
};

export const initialState: UserState = {
  success: false,
  name: "",
  role: "",
  status: "",
};

export const fetchUserData = createAsyncThunk<UserState, UserCredentials>(
  "user/fetchUserData",
  async ({ username, password }) => {
    const response = await axios
      .get("http://localhost:3010", {
        auth: {
          username,
          password,
        },
      })
      .then((res) => res)
      .catch((err) => err.response);
    return response.data;
  }
);

// type RequestState = "pending" | "fulfilled" | "rejected";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState() {
      // ✅ CORRECT: returns a new value to replace the old one
      return initialState;
    },
    // increment: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    // When our request is pending:
    // - store the 'pending' state as the status for the corresponding pokemon name
    builder.addCase(fetchUserData.pending, (state) => {
      state.status = "pending";
    });
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding pokemon name
    // - and store the received payload as the data for the corresponding pokemon name
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.success = action.payload.success;
    });
    // When our request is rejected:
    // - store the 'rejected' state as the status for the corresponding pokemon name
    builder.addCase(fetchUserData.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const selectStatus = (state: RootState) => state.user.status;
export const selectData = (state: RootState) => state.user;

export const { resetState } = userSlice.actions;
export default userSlice.reducer;
