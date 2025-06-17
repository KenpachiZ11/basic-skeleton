import React from 'react';

import map from '../../assets/msc.webp';

import {
  wrapper
} from './TestMap.module.scss';

export const Map = () => {
  return (
    <div className={wrapper}>
      <img src={map} alt='map' />
    </div>
  )
}
