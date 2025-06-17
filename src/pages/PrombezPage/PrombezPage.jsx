import React, { useState } from 'react';

import { Error } from '../../components/InformEvents/Error/Error';
import { InputDropdown } from '../../components/Input/InputDropdown';
import { OwnerSceletron } from '../../components/OwnerSceletron/OwnerSceletron';
import { TestIp } from '../../components/TestIp/TestIp';

// import {
//   wrapper,
//   wrapper_block,
//   wrapper_info,
//   wrapper_info__setting,
//   wrapper_info__events,
//   // wrapper_info__events_block
// } from './PrombezPage.module.scss';

export const PrombezPage = () => {

  const options = [
    { value: 'Настройка 1', label: 'Настройка 1' },
    { value: 'Настройка 2', label: 'Настройка 2' },
    { value: 'Настройка 3', label: 'Настройка 3' },
    { value: 'Настройка 4', label: 'Настройка 4' },
  ];

  return (
    <OwnerSceletron
      owner={<TestIp />}
      settings={[...Array(6)].map((_, i) => Array(<InputDropdown
            key={i}
            id={'category'}
            name={'category'}
            type='text'
            placeholder={'Выберите категорию'}
            dropdown={options}
            onChange={() => console.log('click')}
          />))}
      events={[...Array(10)].map((_, i) => Array(<Error key={i}/>))}
      titleSettings={<h6>Фильтры</h6>}
      titleEvents={<h6>События</h6>}
    />
  )
};