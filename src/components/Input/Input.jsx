import React, { useState } from 'react';

import { Icons } from '../../icons/Icons';

import {
  wrapper,
  wrapper_disable,
  wrapper_focus,
  wrapper_input,
  wrapper_input__text,
  wrapper_label,
  wrapper_label__requary,
  wrapper_label__focus
} from './Input.module.scss';

export const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  requary,
  disable
}) => {
  const [ focus, setFocus ] = useState(false);

  const clearChangeValueHandler = () => {
    if(value !== '') {
      onChange({ target: { value: '', name } });
    }
  };

  return <div
    className={`${wrapper} ${focus ? wrapper_focus : ''} ${disable ? wrapper_disable : ''}`}
  >
    <label
      htmlFor={id}
      className={`${wrapper_label} ${value || focus? wrapper_label__focus : ''}`}
    >
      { placeholder }
      { requary && <span className={wrapper_label__requary} />}
    </label>

    <div className={wrapper_input}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={wrapper_input__text}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {
        (value && value.length > 0)
        ? <Icons
            icon_name='remove_search'
            cb={() => clearChangeValueHandler()}
            style={{ cursor: 'pointer' }}
          />
        : <Icons 
            icon_name='search'
          />
      }
    </div>
  </div>
}