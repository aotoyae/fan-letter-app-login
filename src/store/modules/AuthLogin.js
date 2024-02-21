import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
};

const authSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    login: (state, action) => {
      const accessToken = action.payload;
      localStorage.setItem("accessToken", accessToken);
      state.isLogin = true;
    },
    logout: (state, action) => {
      localStorage.clear();
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
