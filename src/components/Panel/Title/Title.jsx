import React from 'react';

import {
  wrapper,
  wrapper_title
} from './Title.module.scss';

export const Title = ({ title, style }) => {
  return (
    <div 
      className={wrapper}
      style={style}
    >
      {
        (title && title.length > 0) &&
        title.map((t, i) => <div
          key={i}
          className={wrapper_title}
          >{t}
        </div>)
      }
    </div>
  )
}