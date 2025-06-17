import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SWAGGER = process.env.REACT_APP_SWAGGER_URL;

const initialState = {
  tokenId: null,
  data: null,
  isLoading: false,
  isError: false
  
};

export const fetchDf = createAsyncThunk(
  'fetchDf',
  async(tokenId, payload) => {
    try {
      const responce = await fetch(`${SWAGGER}/df`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': tokenId,
        },
        body: JSON.stringify(payload),
      });
      // console.log(payload, 'ppp')
      if(!responce.ok) throw new Error(`Ошибка сервера: ${responce.status}`);
      const res = await responce.json();
      console.log(res, 'fetchDf');
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const postDfSlice = createSlice({
  name: 'postDf',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchDf.pending, ( state ) => {
        state.isLoading = true;
      })
      .addCase(fetchDf.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDf.rejected, ( state, action ) => {
        state.isLoading = false;
        state.isError = action.error.message || 'Произошла неизвестная ошибка';
      })
  }
});

export default postDfSlice.reducer;