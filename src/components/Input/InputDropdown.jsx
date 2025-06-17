import React, { useEffect, useState } from 'react';
import { Icons } from '../../icons/Icons';

import {
  wrapper,
  wrapper_label,
  wrapper_label__focus,
  wrapper_label__requary,
  wrapper_input,
  wrapper_input__focus,
  wrapper_input__icon,
  wrapper_input__dropdown,
  wrapper_dropdown,
  wrapper_dropdown__icon,
  wrapper_dropdown__text,
  wrapper_dropdown__open
} from './InputDropdown.module.scss';

export const InputDropdown = ({
  id,
  name,
  placeholder,
  type,
  value,
  dropdown,
  requary,
  onChange,
  match
}) => {
  const [ focus, setFocus ] = useState(false);
  const [ openDropdown, setOpenDropdown ] = useState(false);

  const dropdownSelectItem = (item) => {
    setOpenDropdown(prev => !prev);
    onChange({ target: { value: item, name } });
  };

  const dropdownFunc = () => {
    if((dropdown && dropdown.length > 0) && Array.isArray(dropdown)) {
      return dropdown.map((el, i) => {
        if(match === true) {
          const isMatch = el?.toLowerCase().match(value?.toLowerCase());
          if(!isMatch) return false;
        }

          return <div
            key={i}
            className={wrapper_dropdown}
          >
            <div
              className={wrapper_dropdown__text}
              onClick={() => dropdownSelectItem(el)}
            >
              { el }
            </div>
          </div>
      })
    }
  };

  const removeItem = () => {
    onChange({ target: { value: '', name } });
  };

  return <div
      className={wrapper}
    >
      <label
        htmlFor={id}
        className={`${wrapper_label} ${(value && value.length > 0) ? wrapper_label__focus : ''}`}
      >
        { placeholder }
        { requary && <span className={wrapper_label__requary} />}
      </label>

      <div
        className={`
          ${wrapper_input}
          ${focus ? wrapper_input__focus : ''}
        `}
      >
        <input
          id={id}
          name={name}
          type={type}
          // readOnly
          onClick={() => setOpenDropdown(prev => !prev)}
          value={value}
          onChange={onChange}
          className={wrapper_input__dropdown}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />

        <div className={wrapper_input__icon}>
          { (value && value.length > 0) &&
            <Icons
              icon_name='remove_search'
              cb={removeItem}
              style={{ cursor: 'pointer' }}
            />
          }
        </div>

        <div className={wrapper_dropdown__icon}>
          { openDropdown
            ? <Icons
                icon_name='arrow_up'
                cb={() => setOpenDropdown(prev => !prev)}
                style={{ cursor: 'pointer' }}
              />
            : <Icons
                icon_name='arrow_down'
                cb={() => setOpenDropdown(prev => !prev)}
                style={{ cursor: 'pointer' }}
              />
          }
        </div>
      </div>

      { openDropdown
        &&  <div className={wrapper_dropdown__open}>
          { dropdownFunc() }
        </div>
      }
    </div>
}
