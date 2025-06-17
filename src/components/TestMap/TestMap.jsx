import React from 'react';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

import { openModal } from '../../store/modalSlice/modalSlice';

import { OwnerSceletron } from '../OwnerSceletron/OwnerSceletron';
import { InputDropdown } from '../Input/InputDropdown';
import { Error } from '../InformEvents/Error/Error';
import { Map } from './Map';
import { ModalVariant } from '../Modal/ModalVariant';
import { AddCam } from '../Form/AddCam/AddCam';
import { Button } from '../Button/Button';
import { Icons } from '../../icons/Icons';

import map_preview from '../../assets/msc.webp';

import {
  wrapper,
  wrapper_info,
  wrapper_map,
  buttonSet
} from './TestMap.module.scss';

export const TestMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buttonSettings = [
    { type: 'button', text: 'Назад', cb: () => navigate(-1), icon: <Icons icon_name={'arrow_left'} /> },
    { type: 'button', text: 'Фильтры', cb: () => console.log('click'), icon: <Icons icon_name={'filter'} /> },
    { type: 'button', text: 'События', cb: () => console.log('click'), icon: <Icons icon_name={'events'} /> },
    { type: 'button', text: 'Добавить', cb: () => dispatch(openModal('addCam')), icon: <Icons icon_name={'add'} /> },
  ];

  // const options = [
  //   { value: 'Настройка 1', label: 'Настройка 1' },
  //   { value: 'Настройка 2', label: 'Настройка 2' },
  //   { value: 'Настройка 3', label: 'Настройка 3' },
  //   { value: 'Настройка 4', label: 'Настройка 4' },
  // ];
  return (
    <div className={wrapper}>
      <div className={wrapper_info}>
        { (buttonSettings && buttonSettings.length > 0) &&
          buttonSettings.map((el, i) => <Button
            key={i}
            type={el.type}
            text={el.text}
            cb={el.cb}
            icon={el.icon}
            cN={buttonSet}
          />)
        }
      </div>
      <div className={wrapper_map}><img src={map_preview} alt="map" /></div>
      <ModalVariant
        modalId={'addCam'}
        children={<AddCam />}
      />
    </div>
  )
};