import React from 'react';

import {
  wrapper,
  wrapper_span
} from './Button.module.scss';

export const Button = ({
  type,
  cb,
  text,
  cN,
  icon
}) => {
  return <button
    className={`${wrapper} ${cN}`}
    type={type ? type : 'button'}
    onClick={cb}
  >
    { (text && text.length > 0) &&
      <span className={wrapper_span}>
        { text }
      </span>
    }

    { icon }
  </button>
}
