import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { openModal } from '../../store/modalSlice/modalSlice';

import { ModalVariant } from '../Modal/ModalVariant';
import { Information } from '../Infrmation/Information';

import { Button } from '../Button/Button';
import { Icons } from '../../icons/Icons';

import {
  title,
  setting,
  information
} from './Header.module.scss';

export const Header = ({
  style
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={title}
        style={style}
      >
        Реестр и учет видеосистем на опасных объектах
      </div>
      <div className={setting}>
        <Button 
          type='button'
          cb={() => dispatch(openModal('info'))}
          cN={information}
          icon={<Icons
            icon_name={'help_info'}
          />}
        />
        {/* <Link to={'/profile'}>
          <Icons
            icon_name={'account'}
          />
        </Link> */}
      </div>

      <ModalVariant 
        modalId={'info'}
        width={'100vw'}
        children={<Information />}
      />
    </>
  )
};