import React, { useEffect, useState } from 'react';

import { Title } from '../Panel/Title/Title';
import { Main } from '../Panel/Main/Main';
import { dfs } from '../../utils/dfs';
import { org } from '../../utils/org';

import {
  wrapper
} from './MainTable.module.scss';

const mainTitle = [
  'Организация',
  'Структурное подразделение',
  'Наименование ОПО',
  'Регистрационный номер',
  'Категория ОПО',
  'Класс опасности',
  'Осуществление надзора',
];

export const MainTable = () => {
  const [mergeObj, setMergeObj] = useState({});
  
  useEffect(() => {
    if((org && org.length > 0) && (dfs && dfs.length > 0)) {
      const merge = org.map(o => {
        const detail = dfs.find(d => o.uid === d.uid);
        return { ...o, ...detail };
      });

      setMergeObj(merge);
    }
  }, [org, dfs]);

  return(
    <>
      <div className={wrapper}>
        {
          (org && org.length > 0) &&
          (dfs && dfs.length > 0)
          ?
            (mainTitle && mainTitle.length > 0) && <>
              <Title 
                title={mainTitle}
                style={{
                  gridTemplateColumns: `repeat(${(mainTitle && mainTitle.length > 0) && mainTitle.length}, 1fr)`
                }}
              />

              <Main mergeObj={mergeObj} />  
            </>
          :
          <div>Данных нет</div>
        }
      </div>
    </>
  )
}