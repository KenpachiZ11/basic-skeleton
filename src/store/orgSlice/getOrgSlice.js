import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SWAGGER = process.env.REACT_APP_SWAGGER_URL;

const initialState = {
  tokenId: null,
  data: null,
  isLoading: false,
  isError: false
};

export const fetchGetOrgs = createAsyncThunk(
  'fetchGetOrgs',
  async(tokenId) => {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    try {
      await delay(1000);
      const responce = await fetch(`${SWAGGER}/orgs`, {
        headers: {
          'Authorization': tokenId,
        }
      });

      if(!responce.ok) throw new Error(`Ошибка сервера: ${responce.status}`);
      const res = await responce.json();
      console.log(res, 'fetchGetOrgs');
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const getOrgsSlice = createSlice({
  name: 'getOrgs',
  initialState,
  reducers: {

  },
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchGetOrgs.pending, ( state ) => {
        state.isLoading = true;
      })
      .addCase(fetchGetOrgs.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGetOrgs.rejected, ( state, action ) => {
        state.isLoading = false;
        state.isError = action.error.message || 'Произошла неизвестная ошибка';
      })
  }
});

export default getOrgsSlice.reducer;