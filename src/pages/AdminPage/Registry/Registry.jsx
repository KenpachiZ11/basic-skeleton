import React, { useState } from 'react';
import { useGlobalContext } from '../../../context/context';

import { ModalVariant } from '../../../components/Modal/ModalVariant';

import { Title } from '../../../components/Panel/Title/Title';
import { Main } from '../../../components/Panel/Main/Main';
import { Modal } from '../../../components/Modal/Modal';
import { FormOPO } from '../../../components/Form/FormOPO/FormOPO';

import {
  wrapper,
  wrapper_header,
  wrapper_main
} from './Registry.module.scss';

const registryTitle = [
  'Регистрационный номер',
  'Наименование ОПО',
  'Тер. орг. Ростехнадзор',
  'Осуществляется ли гос. надзор',
  'Структурное подразделение',
  'Класс опасности',
  'Настройки'
];

export const Registry = ({
  formVariant
}) => {
  const { registryOpo } = useGlobalContext();

  return (
    <div className={wrapper}>
      <div className={wrapper_header}>
        <Title
          style={{
            gridTemplateColumns: `repeat(${(registryTitle && registryTitle.length > 0) && registryTitle.length}, 1fr)`,
          }}
          title={registryTitle}
        />
      </div>

      { (registryOpo && registryOpo.length > 0)
        ? registryOpo.map((r, i) => <div
          key={i}
          className={wrapper_main}
          style={{
            gridTemplateColumns: `repeat(${(registryTitle && registryTitle.length > 0) && registryTitle.length}, 1fr)`,
          }}
        >
            <div>{r.serial}</div>
            <div>{r.name}</div>
            <div>{r.territorial_body}</div>
            <div>{r.state_supervision}</div>
            <div>{r.structural_unit_id}</div>
            <div>{r.risk_category}</div>

            <div>Настройки: Изменить/Удалить</div>
          </div>)
        : <div>Нет данных</div>
      }

      <ModalVariant
        modalId={formVariant}
        children={<FormOPO />}
      />
    </div>
  )
};