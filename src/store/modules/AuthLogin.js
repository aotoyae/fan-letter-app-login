import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi, jsonApi } from "api/apiIndex";
import { toast } from "react-toastify";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
  isLoading: false,
  isError: false,
  error: null,
};

export const __editProfile = createAsyncThunk(
  "editProfile",
  async (formData, thunkAPI) => {
    try {
      const { data } = await authApi.patch("/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const editingObj = {};
      const { nickname, avatar } = data;

      if (nickname) editingObj.nickname = nickname;
      if (avatar) editingObj.avatar = avatar;

      const userId = localStorage.getItem("userId");
      const { data: myLetters } = await jsonApi.get(
        `/letters?userId=${userId}`
      );
      for (const myLetter of myLetters) {
        await jsonApi.patch(`/letters/${myLetter.id}`, editingObj);
      }
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __login = createAsyncThunk(
  "login",
  async ({ id, password }, thunkAPI) => {
    try {
      const { data } = await authApi.post(
        `/login`,
        // ?expiresIn=10m
        {
          id,
          password,
        }
      );
      const { accessToken, avatar, nickname, userId } = data;
      if (data.success) {
        toast.success(`${id}님 반갑습니다.`);
        return thunkAPI.fulfillWithValue({
          accessToken,
          avatar,
          nickname,
          userId,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, avatar, nickname, userId } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);
      state.isLogin = true;
      state.avatar = avatar;
      state.nickname = nickname;
      state.userId = userId;
    },
    logout: (state, action) => {
      localStorage.clear();
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__login.fulfilled, (state, action) => {
      const { accessToken, avatar, nickname, userId } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);
      state.isLogin = true;
      state.avatar = avatar;
      state.nickname = nickname;
      state.userId = userId;
      state.isLoading = false;
    });
    builder.addCase(__login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__editProfile.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__editProfile.fulfilled, (state, action) => {
      const { avatar, nickname } = action.payload;
      if (avatar) {
        localStorage.setItem("avatar", avatar);
        state.avatar = avatar;
      }
      if (nickname) {
        localStorage.setItem("nickname", nickname);
        state.nickname = nickname;
      }
      state.isLoading = false;
      toast.success("프로필 변경이 완료되었습니다.");
    });
    builder.addCase(__editProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
