import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, fetchRefreshToken } from '../../store/authSlice/authSlice';
import { App } from '../../App';
import { AuthErrorPage } from '../../pages/AuthErrorPage/AuthErrorPage';

export const Auth = () => {
  const dispatch = useDispatch();
  const { isAuth, accessToken } = useSelector(state => state.auth);

  console.log(isAuth, accessToken, 'auth');

  const params = new URLSearchParams(location.search);
  const base64Param = params.get("ldapData");

  useEffect(() => {
    dispatch(fetchRefreshToken());
  }, [dispatch]);

  if(isAuth && accessToken) {
    <App />
  }

  if(!isAuth && !accessToken) {
    <AuthErrorPage />
  }

  if(base64Param) {
    const jsonStr = fromBase64(base64Param);
    const data = JSON.parse(jsonStr);

    dispatch(login(true, data.AccessId));
  }

  return isAuth === true ? <App /> : <AuthErrorPage />
}