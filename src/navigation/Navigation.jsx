import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

import { path } from './utils.js';

import {
  wrapper,
  wrapper_a,
  wrapper_a_active_link
} from './Navigation.module.scss';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={wrapper}>
      {
        (path && path.length > 0) &&
        path.map(el => <Link
          key={el.path}
          to={el.path}  
          className={`${wrapper_a} ${location.pathname === el.path ? wrapper_a_active_link : ''}`}
        >
          { el.icon }
          <span>{ el.name }</span>
        </Link>)
      }
    </nav>
  )
}