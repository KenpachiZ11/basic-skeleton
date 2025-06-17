import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalContext } from '../../../context/context';

import { fetchGetOrgs } from '../../../store/orgSlice/getOrgSlice';
import { fetchPostCam } from '../../../store/camSlice/postCamSlice';
import { closeModal } from '../../../store/modalSlice/modalSlice';

import { Input } from '../../Input/Input';
import { InputDropdown } from '../../Input/InputDropdown';
import { Button } from '../../Button/Button';

import {
  wrapper,
  wrapper_form__items,
  wrapper_form__items_block,
  wrapper_form__buttons,
  button
} from './AddCam.module.scss';

const initialStateObject = {
  name: null,
  coordinates: null || {},
  is_ptz: null,
  contacts: null || initialStateObjectContacts,
  cam_type: null, // ['осн', 'не осн'...]
  connection: initialStateObjectConnection,
  df_serial: null,
  org_id: null,
};

const initialStateObjectContacts = {
  name: null,
  specialization: null,
  phone: null,
  email: null
};

const initialStateObjectConnection = {
  connection_type: null, // ['ip', 'trassir']
  ipConn: {
    login: null,
    password: null,
    ip_address: null,
    status_path: null,
    main_port: {
      port: null,
      port_type: null // ['осн', 'не осн'...]
    }
  },
  trassirConn: {
    login: null,
    password: null,
    channel_name: null,
    url: null
  },
};

export const AddCam = () => {
  const TOKEN = 'admin';
  const { data, isLoading, isError } = useSelector(state => state.getOrgs);
  const dispatch = useDispatch();
  const { setSaveCamLocal } = useGlobalContext();
  const [ formData, setFormData ] = useState({ ...initialStateObject });

  useEffect(() => {
    if(dispatch) {
      dispatch(fetchGetOrgs(TOKEN));
      // console.log(dispatch(fetchGetOrgs(TOKEN)));
    }
  }, [dispatch]);

  const formSubmit = (e) => {
    e.preventDefault();
    closedHandler();
    // console.log('Отправка данных:', formData);
  };

  const formCam = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [ name ]: value
    }));
  };

  const saveFormCamHandler = () => {
    dispatch(fetchPostCam(TOKEN, formData));
    // setSaveCamLocal(prev => [...prev, formData]);
    // console.log('Камера сохранена', formData);
  };

  const resetFormHandler = () => setFormData({ ...initialStateObject });

  const closedHandler = () => {
    setTimeout(() => {
      dispatch(closeModal('addCam'));
    }, 500);
  };

  // console.log(formData, 'formData');

  return (
    <div className={wrapper}>
      <form
        onSubmit={formSubmit}
        className={wrapper_form__items}
      >
        <div className={wrapper_form__items_block}>
          <h4>Общая информация о камере</h4>
            <Input
              id={'name'}
              name={'name'}
              type={'text'}
              value={formData.name !== null ? formData.name : ''}
              onChange={formCam}
              placeholder={'Наименование камеры'}
              requary={true}
            />
            <Input
              id={'df_serial'}
              name={'df_serial'}
              type={'text'}
              value={formData.df_serial !== null ? formData.df_serial : ''}
              onChange={formCam}
              placeholder={'Регистрационный номер'}
              requary={true}
            />
            <Input
              id={'org_id'}
              name={'org_id'}
              type={'text'}
              value={formData.org_id !== null ? formData.org_id : ''}
              onChange={formCam}
              placeholder={'id организации'}
              requary={true}
              disable={true}
            />
        </div>
        {/* <div className={wrapper_form__items_block}>
          <h4>Общая информация о камере</h4>
          <Input
            id={'orgId'}
            name={'orgId'}
            type={'text'}
            value={`${formData.orgId}` || ''}
            onChange={formCam}
            placeholder={infoCamVal.orgId}
            requary={true}
          />
          <Input
            id={'structureOpo'}
            name={'structureOpo'}
            type={'text'}
            value={formData.structureOpo || ''}
            onChange={formCam}
            placeholder={infoCamVal.structureOpo}
            requary={true}
          />
          <Input
            id={'name'}
            name={'name'}
            type={'text'}
            value={formData.name || ''}
            onChange={formCam}
            placeholder={infoCamVal.name}
            requary={true}
          />
          <InputDropdown
            id={'isPtz'}
            name={'isPtz'}
            type='text'
            value={formData.isPtz || ''}
            placeholder={infoCamVal.isPtz}
            dropdown={['Отсутствует', 'Присутствует']}
            requary={true}
            onChange={formCam}
            match={false}
          />
          <InputDropdown
            id={'camType'}
            name={'camType'}
            type='text'
            value={formData.camType || ''}
            placeholder={infoCamVal.camType}
            dropdown={['МВК', 'Обзорная', 'Стационарная']}
            requary={true}
            onChange={formCam}
            match={false}
          />
        </div>
        <div className={wrapper_form__items_block}>
          <h4>Информация о подключении</h4>
          <Input
            id={'login'}
            name={'login'}
            type={'text'}
            value={formData.login || ''}
            onChange={formCam}
            placeholder={connectCamVal.login}
            requary={true}
          />
          <Input
            id={'password'}
            name={'password'}
            type={'text'}
            value={formData.password || ''}
            onChange={formCam}
            placeholder={connectCamVal.password}
            requary={true}
          />
          <Input
            id={'ipAddress'}
            name={'ipAddress'}
            type={'text'}
            value={formData.ipAddress || ''}
            onChange={formCam}
            placeholder={connectCamVal.ipAddress}
            requary={true}
          />
          <Input
            id={'port'}
            name={'port'}
            type={'text'}
            value={formData.port || ''}
            onChange={formCam}
            placeholder={connectCamVal.port}
            requary={true}
          />
          <InputDropdown
            id={'portType'}
            name={'portType'}
            type='text'
            value={formData.portType || ''}
            placeholder={connectCamVal.portType}
            dropdown={['Не определен', 'Основной', 'Единственная камера', 'Несколько камер']}
            requary={true}
            onChange={formCam}
            match={false}
          />
        </div>
        <div className={wrapper_form__items_block}>
          <h4>Информация о пользователе</h4>
          <Input
            id={'namePerson'}
            name={'namePerson'}
            type={'text'}
            value={formData.namePerson || ''}
            onChange={formCam}
            placeholder={contactCamVal.namePerson }
            requary={true}
          />
          <Input
            id={'specialization'}
            name={'specialization'}
            type={'text'}
            value={formData.specialization || ''}
            onChange={formCam}
            placeholder={contactCamVal.specialization}
            requary={true}
          />
          <Input
            id={'phone'}
            name={'phone'}
            type={'text'}
            value={formData.phone || ''}
            onChange={formCam}
            placeholder={contactCamVal.phone}
            requary={true}
          />
          <Input
            id={'email'}
            name={'email'}
            type={'text'}
            value={formData.email || ''}
            onChange={formCam}
            placeholder={contactCamVal.email}
            requary={true}
          />
        </div> */}
        <div className={wrapper_form__buttons}>
          <Button
            type={'submit'}
            cb={() => saveFormCamHandler()}
            text={'Сохранить'}
            cN={button}
          />
          <Button
            type={'reset'}
            cb={() => resetFormHandler()}
            text={'Очистить'}
            cN={button}
          />
        </div>
      </form>
    </div>
  )
};