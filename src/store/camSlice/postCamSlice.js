import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SWAGGER = process.env.REACT_APP_SWAGGER_URL;

const initialState = {
  tokenId: null,
  data: null,
  isLoading: false,
  isError: false
};

export const fetchPostCam = createAsyncThunk(
  'fetchPostCam',
  async(tokenId, payload) => {
    try {
      const responce = await fetch(`${SWAGGER}/cams`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': tokenId,
        },
        body: JSON.stringify(payload),
      });
      if(!responce.ok) throw new Error(`Ошибка сервера: ${responce.status}`);
      const res = await responce.json();
      console.log(res, 'fetchPostCam');
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const postCamSlice = createSlice({
  name: 'postCam',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchPostCam.pending, ( state ) => {
        state.isLoading = true;
      })
      .addCase(fetchPostCam.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostCam.rejected, ( state, action ) => {
        state.isLoading = false;
        state.isError = action.error.message || 'Произошла неизвестная ошибка';
      })
  }
});

export default postCamSlice.reducer;