import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const authSlice = createSlice({
  name: "logAuth",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      return action.payload;
    },
  },
});

export const { authLogin } = authSlice.actions;
export default authSlice.reducer;