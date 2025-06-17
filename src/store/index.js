import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice/authSlice';
import modalReducer from './modalSlice/modalSlice';

import postCamReducer from './camSlice/postCamSlice';
import postDfReducer from './dfSlice/postDfSlice';
import postOrgReducer from './orgSlice/postOrgSlice';

import getOrgsReducer from './orgSlice/getOrgSlice';
import getWellgisBgReducer from './wellgisSlice/getWellgisBgSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,

    postCam: postCamReducer,
    postDf: postDfReducer,
    postOrg: postOrgReducer,

    getOrgs: getOrgsReducer,
    getWellgisBg: getWellgisBgReducer
  }
});