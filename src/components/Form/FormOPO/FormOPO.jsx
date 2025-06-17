import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalContext } from '../../../context/context';

import { closeModal } from '../../../store/modalSlice/modalSlice';

import { Input } from '../../Input/Input';
import { InputDropdown } from '../../Input/InputDropdown';
import { Button } from '../../Button/Button';

import {
  wrapper,
  wrapper_form,
  wrapper_form__block,
  wrapper_form__items,
  wrapper_form__buttons,
  button
} from './FormOPO.module.scss';

const objOPOKey = {
  // "user_token": null,
  "serial": null,
  "name": null,
  "territorial_body": null,
  "state_supervision": null,
  "structural_unit_id": null,
  "risk_category": null
};

const objOPOValue = {
  // "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "serial": "Регистрационный номер",
  "name": "Наименование ОПО",
  "territorial_body": "Территориальный орган Ростехнадзор",
  "state_supervision": "Осуществляется ли гос. надзор",
  "structural_unit_id": "Структурное подразделение",
  "risk_category": "Класс опасности", // 1 - 4
};

export const FormOPO = () => {
  const dispatch = useDispatch();
  const { setRegistryOpo } = useGlobalContext();
  const [ formData, setFormData ] = useState(objOPOKey);
  
  const addRegistryOpoHandler = () => {
    const savedForm = {
      id: new Date(),
      formData
    };
    setRegistryOpo(prev => [...prev, savedForm.formData]);
  };

  const resetRegistryOpoHandler = () => {
    setFormData({ ...objOPOKey });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    closedHandler();
    console.log('Отправка данных:', formData);
  };

  const formChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [ name ]: value
    }));
  };

  const closedHandler = () => {
    setTimeout(() => {
      dispatch(closeModal('opo'));
    }, 500);
  };

  return (
    <div className={wrapper}>
      <div className={wrapper_form}>
        <form
          onSubmit={formSubmit}
          className={wrapper_form__block}
        >
          <div className={wrapper_form__items}>
            <Input
              id={'serial'}
              name={'serial'}
              type='text'
              value={formData.serial || ''}
              onChange={formChange}
              placeholder={objOPOValue.serial}
              requary={true}
            />
            <Input
              id={'name'}
              name={'name'}
              type='text'
              value={formData.name || ''}
              onChange={formChange}
              placeholder={objOPOValue.name}
              requary={true}
            />
            <Input
              id={'territorial_body'}
              name={'territorial_body'}
              type='text'
              value={formData.territorial_body || ''}
              onChange={formChange}
              placeholder={objOPOValue.territorial_body}
              requary={true}
            />
            <Input
              id={'structural_unit_id'}
              name={'structural_unit_id'}
              type='text'
              value={formData.structural_unit_id || ''}
              onChange={formChange}
              placeholder={objOPOValue.structural_unit_id}
              requary={true}
            />

            <InputDropdown 
              id={'state_supervision'}
              name={'state_supervision'}
              type='text'
              value={formData.state_supervision || ''}
              placeholder={objOPOValue.state_supervision}
              dropdown={['Нужно', 'Не нужно']}
              requary={true}
              onChange={formChange}
            />
            <InputDropdown 
              id={'risk_category'}
              name={'risk_category'}
              type='text'
              value={formData.risk_category || ''}
              placeholder={objOPOValue.risk_category}
              dropdown={['1', '2', '3', '4']}
              requary={true}
              onChange={formChange}
            />
          </div>
          <div className={wrapper_form__buttons}>
            <Button
              type='submit'
              cb={() => addRegistryOpoHandler()}
              text='Сохранить'
              cN={button}
            />
            <Button
              type='button'
              cb={() => resetRegistryOpoHandler()}
              text='Очистить'
              cN={button}
            />
          </div>
        </form>
      </div>
    </div>
  )
}