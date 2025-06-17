import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from '../../components/Button/Button';

import {
  wrapper,
  wrapper_block,
  cn,
  mail,
  department,
  address,
  ld,
  ldm
} from './ProfilePage.module.scss';

const mocArray = [{
  cn: 'Петров Петр Петрович',
  mail: 'petrov.petr@lukoil.com',
  department: 'гл. специалист',
  address: {
    streetAddress: 'Russia',
    title: 'г. Москва'
  },
  ldapGroups: [
    {
      'cn': 'Admin'
    },
    {
      'cn': 'Manager'
    },
    {
      'cn': 'User'
    }
  ],
}];

const mocArrayLdlen = mocArray.map(el => el.ldapGroups.length);

export const ProfilePage = () => {
  const navigate = useNavigate();

  const backPage = () => navigate(-1);

  return (
    <div className={wrapper}>
      <Button cb={backPage} />
      {
        mocArray.map((el, i) => <div 
          key={i} 
          className={wrapper_block}
        >
          <div className={cn}>{el.cn}</div>
          <div className={mail}><span>Почта:</span>{el.mail}</div>
          <div className={address}><span>Адрес:</span>{el.address.streetAddress}, {el.address.title}</div>
          <div className={department}><span>Должность:</span>{el.department}</div>
          <div className={ld}>
            { mocArrayLdlen > 1 ? <span>Роли:</span> : <span>Роль:</span> }
            <div className={ldm}>{ el.ldapGroups.map((el, i) => <div key={i}>{el.cn}</div>) }</div>
          </div>
        </div>)
      }
    </div>
  )
};