import React from 'react';

import {
  container,
  title,
  text,
  button
} from './AuthErrorPage.module.scss';

export const AuthErrorPage = () => {
  return (
    <div className={container}>
      <h2 className={title}>Ошибка авторизации</h2>
      <p className={text}>
        Уважаемый пользователь, обратитесь в службу поддержки,<br/>
        для предоставления доступа!
      </p>
      <button 
        className={button} 
        onClick={() => window.location.href='https://csc-idm.pro.lukoil.com/?env=argus'}
      >
        Повторить попытку
      </button>
    </div>
  );
};