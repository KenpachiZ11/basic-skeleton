import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostOrgs } from '../../../store/orgSlice/postOrgSlice';
import { closeModal } from '../../../store/modalSlice/modalSlice';

import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';

import {
  wrapper,
  wrapper_button,
  button
} from './Create.module.scss';

const initialStateOrg = {
  org_name: '',
};

export const CreateOrg = () => {
  const dispatch = useDispatch();
  const {
    data: postOrgData,
    isLoading: postOrgLoading,
    isError: postOrgError
  } = useSelector(state => state.postOrg);

  const [ formDataOrg, setFormDataOrg ] = useState(initialStateOrg);

  const TOKEN = 'admin';

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchPostOrgs({ token: TOKEN, orgName: formDataOrg.org_name }))
      .then(() => {
        setFormDataOrg(initialStateOrg);
        closedHandler();
      })
      .catch(err => {
        console.error("Ошибка при сохранении:", err);
        alert("Возникла ошибка при создании организации.");
      })

    console.log('Данные отправлены:', formDataOrg.org_name);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormDataOrg(prev => ({
      ...prev, 
      [ name ]: value,
    }));
  };

  const resetOrgData = () => setFormDataOrg(initialStateOrg);

  const closedHandler = () => {
    setTimeout(() => {
      dispatch(closeModal('addOrg'));
    }, 500);
  };

  return (
    <div className={wrapper}>
      <form onSubmit={submitHandler}>

        <Input
          id={'org_name'}
          name={'org_name'}
          type={'text'}
          value={formDataOrg.org_name}
          onChange={changeHandler}
          placeholder={'Наименование организации'}
          requary={true}
        />

        <div className={wrapper_button}>
          <Button
            type={'submit'}
            text={'Сохранить'}
            cN={button}
          />
          <Button
            type={'reset'}
            cb={() => resetOrgData()}
            text={'Очистить'}
            cN={button}
          />
        </div>
      </form>
    </div>
  )
};