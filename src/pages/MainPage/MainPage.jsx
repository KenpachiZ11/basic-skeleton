import React, { useState, useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainTable } from '../../components/MainTable/MainTable';
import { InputDropdown } from '../../components/Input/InputDropdown';

import { CreateOrg } from '../../components/Form/CreateOrg/CreateOrg';
import { openModal } from '../../store/modalSlice/modalSlice';
import { fetchGetOrgs } from '../../store/orgSlice/getOrgSlice';
import { Button } from '../../components/Button/Button';
import { ModalVariant } from '../../components/Modal/ModalVariant';
import { Icons } from '../../icons/Icons';

import {
  wrapper_main,
  wrapper_main__search,
  wrapper_main__table,
  buttonSet
} from './MainPage.module.scss';

export const MainPage = () => {
  const {
    data: getOrgsData,
    isLoading: getOrgsLoading,
    isError: getOrgsError
  } = useSelector(state => state.getOrgs);

  const dispatch = useDispatch();

  const TOKEN = 'admin';

  useEffect(() => {
    if(dispatch) {
      dispatch(fetchGetOrgs(TOKEN));
    }
  }, [dispatch]);

  const options = [
    { value: 'Настройка 1', label: 'Настройка 1' },
    { value: 'Настройка 2', label: 'Настройка 2' },
    { value: 'Настройка 3', label: 'Настройка 3' },
    { value: 'Настройка 4', label: 'Настройка 4' },
  ];

  return (
    <div className={wrapper_main}>
      <div className={wrapper_main__search}>
        {
          TOKEN === 'admin' && <Button
            type={'button'}
            cb={() => dispatch(openModal('addOrg'))}
            text={'Добавить'}
            cN={buttonSet}
            icon={<Icons icon_name={'add'} />}
          />
        }
      </div>
      <div className={wrapper_main__table}>
        { getOrgsLoading && <div>Загрузка данных</div> }
        { getOrgsError && <div>Нет данных</div> }
        { (getOrgsData && getOrgsData.length > 0) &&
          getOrgsData.map(el => console.log(el))
        }
      </div>

      <ModalVariant
        modalId={'addOrg'}
        children={<CreateOrg />}
      />
    </div>
  )
};