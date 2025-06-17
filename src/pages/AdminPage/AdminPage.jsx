import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store/modalSlice/modalSlice';

import { Prombez } from './Prombez/Prombez';
import { Map } from './Map/Map';
import { Registry } from './Registry/Registry';
import { Analytics } from './Analytics/Analytics';

import { InputDropdown } from '../../components/Input/InputDropdown';
import { Button } from '../../components/Button/Button';

import {
  wrapper,
  wrapper_info,
  wrapper_buttons,
  add_button
} from './AdminPage.module.scss';

export const AdminPage = () => {
  const dispatch = useDispatch();
  const [ selectedComponent, setSelectedComponent ] = useState('');

  const options = [
    { value: 'registry', label: 'Реестр ОПО' },
    { value: 'prombez', label: 'ПромБез' },
    { value: 'map', label: 'Карта' },
    { value: 'analytics', label: 'Аналитика' },
  ];

  const formChange = (e) => {
    const { name, value } = e.target;
    setSelectedComponent(value);
  };

  const renderComponents = () => {
    switch (selectedComponent) {
      case 'registry':
        return <Registry
          formVariant={'opo'}
        />;
      case 'prombez':
        return <Prombez />;
      case 'map':
        return <Map />;
      case 'analytics':
        return <Analytics />;
    
      default:
        return null;
    }
  }

  return (
    <div className={wrapper}>
      <h3>Административная панель</h3>
        <div className={wrapper_info}>
          <InputDropdown
            id={'category'}
            name={'category'}
            type='text'
            placeholder={'Выберите категорию'}
            dropdown={options}
            value={options
              .filter(el => el.value === selectedComponent)
              .map(el => el.label)
            }
            onChange={formChange}
          />

          <div className={wrapper_buttons}>
            { selectedComponent === 'registry' && <Button
                type={'button'}
                text={'Добавить'}
                cb={() => dispatch(openModal('opo'))}
                cN={add_button}
              />
            }
          </div>
        </div>

        <div> {renderComponents()} </div>
    </div>
  )
}