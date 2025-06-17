import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

import { Provider } from 'react-redux';
import { store } from './store';
import { UseGlobalProvider } from './context/context';

import './style/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(root) {
  root.render(
    <Provider store={store}>
      {/* <UseGlobalProvider> */}
        <RouterProvider router={router}/>
      {/* </UseGlobalProvider> */}
    </Provider>
  );

} else {
  throw new Error('root элемент не найден по id#root');
}
