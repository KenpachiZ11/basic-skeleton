import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/context';

import { InputDropdown } from '../Input/InputDropdown';

import {
  wrapper,
  wrapper_list,
  wrapper_list__card,
  wrapper_no__data
} from './ListCam.module.scss';

const org = [
  'Test 1',
  'Test 2',
  'Test 3',
  'Test 4',
  'Test 5',
];

export const ListCam = () => {
  const { saveCamLocal } = useGlobalContext();
  const [ orgLen, setOrgLen ] = useState([]);
  const [ orgValue, setOgrValue ] = useState('');
  const [ filterCam, setFilterCam ] = useState([]);

  const choiceCam = (e) => {
    const { name, value } = e.target;
    setOgrValue(prev => ({
      ...prev,
      [ name ]: value
    }));
    // console.log(name, value);
  }

  const listCam = () => {
    const displayCam = filterCam?.length > 0 ? filterCam : saveCamLocal;

    if(!displayCam || displayCam?.length === 0) {
      return <div className={wrapper_no__data}>Нет данных по камерам</div>
    }

// const infoCamVal = {
//   structureOpo: 'Опасный объект',
//   name: 'Наименование камеры',
//   isPtz: 'Управление камерой',
//   camType: 'Тип камеры',
//   orgId: 'id организации',
// };

// const connectCamVal = {
//   login: 'Логин для подключения',
//   password: 'Пароль для подключения',
//   ipAddress: 'ip адресс',
//   statusPath: 'Статус пути',
//   port: 'Порт',
//   portType: 'Тип порта',
// };

// const contactCamVal = {
//   namePerson: 'ФИО сотрудника',
//   specialization: 'Должность',
//   phone: 'Контактный телефон',
//   email: 'Почта'
// };
    
    return <>
      {
        (displayCam && displayCam.length > 0) &&
        displayCam.map((el, i) => <div
          key={i}
          className={wrapper_list__card}
        >
          <div>
            <h6>Информация о камере</h6>
              <span>Опасный объект - {el.structureOpo}</span>
              <span>Наименование камеры - {el.name}</span>
              <span>Управление камерой - {el.isPtz}</span>
              <span>Тип камеры - {el.camType}</span>
              <span>id организации - {el.orgId}</span>
          </div>
          <div>
            <h6>Подключение к камере</h6>
              <span>ip адресс -{el.ipAddress}</span>
              <span>Порт - {el.port}</span>
              <span>Тип порта - {el.portType}</span>
          </div>
          <div>
            <h6>Контакты пользователя</h6>
              <span>ФИО сотрудника - {el.namePerson}</span>
              <span>Должность - {el.specialization}</span>
              <span>Контактный телефон - {el.phone}</span>
              <span>Почта - {el.email}</span>
          </div>
        </div>)
      }
    </>
  }
  
  useEffect(() => {
    if(saveCamLocal && saveCamLocal.length > 0) {
      const uniqueOrgs = [...new Set(saveCamLocal.map(el => el.structureOpo))];
      setOrgLen(uniqueOrgs);
    }
  }, [ saveCamLocal ]);

  useEffect(() => {
    if(saveCamLocal && saveCamLocal.length > 0) {
      if(orgValue) {
        const filteredCam = saveCamLocal.filter(cam => cam.structureOpo === orgValue.structureOpo);
        setFilterCam(filteredCam);
      }
    }
  }, [ orgValue, saveCamLocal ]);

  // console.log(orgLen, 'orgLen')

  return (
    <div className={wrapper}>
      <InputDropdown
        id={'structureOpo'}
        name={'structureOpo'}
        type='text'
        value={orgValue.structureOpo || ''}
        placeholder={'Выберите опасный объект'}
        dropdown={orgLen}
        requary={true}
        onChange={choiceCam}
        match={true}
      />

      <div className={wrapper_list}>{ listCam() }</div>
    </div>
  )
};