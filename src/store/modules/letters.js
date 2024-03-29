import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jsonApi } from "api/apiIndex";

const initialState = {
  letters: [],
  isLoading: true,
  isError: false,
  error: null,
};

const getLettersFromDB = async () => {
  const { data } = await jsonApi.get(
    `/letters`
    // `letters?_sort=createdAt&_order=desc`
    // 내림차순 해결 필요
  );
  return data;
};

export const __getLetters = createAsyncThunk(
  "getLetters",
  async (payload, thunkAPI) => {
    try {
      const letters = await getLettersFromDB();
      return thunkAPI.fulfillWithValue(letters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addLetter = createAsyncThunk(
  "addLetter",
  async (newLetter, thunkAPI) => {
    try {
      await jsonApi.post(`/letters`, newLetter);
      const letters = await getLettersFromDB();
      return thunkAPI.fulfillWithValue(letters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteLetter = createAsyncThunk(
  "deleteLetter",
  async (id, thunkAPI) => {
    try {
      await jsonApi.delete(`/letters/${id}`);
      const letters = await getLettersFromDB();
      return thunkAPI.fulfillWithValue(letters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editLetter = createAsyncThunk(
  "editLetter",
  async ({ id, editingText }, thunkAPI) => {
    try {
      await jsonApi.patch(`/letters/${id}`, { content: editingText });
      const letters = await getLettersFromDB();
      return thunkAPI.fulfillWithValue(letters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const letterSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getLetters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__getLetters.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__addLetter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__addLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__addLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__deleteLetter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__deleteLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__deleteLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__editLetter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__editLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__editLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default letterSlice.reducer;
