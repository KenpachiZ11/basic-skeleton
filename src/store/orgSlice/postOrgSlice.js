import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SWAGGER = process.env.REACT_APP_SWAGGER_URL;

const initialState = {};

export const fetchPostOrgs = createAsyncThunk(
  'fetchPostOrgs',
  async({ token, orgName }) => {
    try {
      const responce = await fetch(`${SWAGGER}/org?org_name=${encodeURIComponent(orgName)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify({ name: orgName }),
      });
      if(!responce.ok) throw new Error(`Ошибка сервера: ${responce.status}`);
      const res = await responce.json();
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const postOrgSlice = createSlice({
  name: 'postOrg',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchPostOrgs.pending, ( state ) => {
        state.isLoading = true;
      })
      .addCase(fetchPostOrgs.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostOrgs.rejected, ( state, action ) => {
        state.isLoading = false;
        state.isError = action.error.message || 'Произошла неизвестная ошибка';
      })
  }
});

export default postOrgSlice.reducer;