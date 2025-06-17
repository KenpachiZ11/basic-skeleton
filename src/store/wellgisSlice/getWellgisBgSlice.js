import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SWAGGER = process.env.REACT_APP_SWAGGER_URL;

const initialState = {
  // tokenId: null,
  data: null,
  isLoading: false,
  isError: false
};

export const fetchGetWellgisBg = createAsyncThunk(
  'fetchGetWellgisBg',
  async({ token, arg }) => {
    // const delay = (ms) => new Promise(res => setTimeout(res, ms));
    try {
      // await delay(1000);
      const responce = await fetch(`${SWAGGER}/api/wellgis/maps/bg${arg}`, {
        headers: {
          'Authorization': token,
        }
      });

      if(!responce.ok) throw new Error(`Ошибка сервера: ${responce.status}`);
      const res = await responce.json();
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const getWellgisBg = createSlice({
  name: 'getWellgisBg',
  initialState,
  reducers: {

  },
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchGetWellgisBg.pending, ( state ) => {
        state.isLoading = true;
      })
      .addCase(fetchGetWellgisBg.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGetWellgisBg.rejected, ( state, action ) => {
        state.isLoading = false;
        state.isError = action.error.message || 'Произошла неизвестная ошибка';
      })
  }
});

export default getWellgisBg.reducer;