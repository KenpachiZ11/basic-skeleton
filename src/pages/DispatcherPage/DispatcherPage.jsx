import React from 'react';

import { OwnerSceletron } from '../../components/OwnerSceletron/OwnerSceletron';
import { InputDropdown } from '../../components/Input/InputDropdown';
import { Error } from '../../components/InformEvents/Error/Error';
import { TestOwner } from '../../components/TestOwner/TestOwner';

export const DispatcherPage = () => {
  const options = [
    { value: 'Настройка 1', label: 'Настройка 1' },
    { value: 'Настройка 2', label: 'Настройка 2' },
    { value: 'Настройка 3', label: 'Настройка 3' },
    { value: 'Настройка 4', label: 'Настройка 4' },
  ];

  return (
    <OwnerSceletron
      owner={<TestOwner />}
      settings={[...Array(3)].map((_, i) => Array(<InputDropdown
            key={i}
            id={'category'}
            name={'category'}
            type='text'
            placeholder={'Выберите категорию'}
            dropdown={options}
            onChange={() => console.log('click')}
          />))}
      events={[...Array(10)].map((_, i) => Array(<Error key={i} />))}
      titleSettings={<h6>Фильтры</h6>}
      titleEvents={<h6>События</h6>}
    />
  )
};