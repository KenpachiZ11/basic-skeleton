import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const URL = process.env.OWNER_URL;

const initialState = {
  accessToken: null,
  isAuth: true,
  isLoading: false,
  data: null,
  isError: false
}

export const fetchRefreshToken = createAsyncThunk(
  'refreshToken',
  async() => {
    const response = await fetch(URL); // сюда надо вставить урл на рефреш
    console.log(response);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, action ) => {
      state.accessToken = action.payload.AccessId;
      state.isAuth = true;
    },
    logout: ( state, action ) => {
      state.accessToken = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRefreshToken.pending, ( state ) => {
        state.isLoading = true;
      })
      .addCase(fetchRefreshToken.fulfilled, ( state, action ) => {
        state.isLoading = false;
        // state.data = action.payload.RefreshId;
      })
      .addCase(fetchRefreshToken.rejected, ( state, action ) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;