import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

import {
  wrapper
} from './TestOwner.module.scss';

export const TestOwner = () => {
  return (
    <div className={wrapper}>
      { [...Array(1)].map((_, i) => Array(<Link
        key={i}
        to={'/map'}
      >
        <span>ПАО Лукойл - Карта (Подразделение Москва)</span>
      </Link>)) }
    </div>
  )
};