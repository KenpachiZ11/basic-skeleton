import React from 'react';

import {
  wrapper,
  wrapper_block,
  name,
  territorial_body,
  tag
} from './Main.module.scss';

export const Main = ({ mergeObj }) => {
  // mergeObj?.length > 0 && mergeObj.map(el => console.log(el, 'el'))

  return (
    <div className={wrapper}>
      {
        (mergeObj && mergeObj.length > 0) && 
        mergeObj.map(el => <div 
          key={el.uid}
          className={wrapper_block}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)'
          }}
        >
          <div className={name}>{el.name}</div> {/*Организация*/}
          <div className={territorial_body}>{el.territorial_body}</div> {/*Структурное подразделение*/}
          <div className={tag}>{el.tag}</div> {/*Наименование ОПО*/}
          <div>{el.uid}</div> {/*Рег номер*/}
          <div></div> {/*Категория ОПО*/}
          <div>{el.risk_category}</div> {/*Класс опасности*/}
          <div>{el.observation_required === false ? 'false' : 'true'}</div> {/*Осуществление надзора*/}
        </div>)
      }
    </div>
  )
}