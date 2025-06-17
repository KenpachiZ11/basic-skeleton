import React from 'react';

import {
  wrapper,
  wrapper_ip
} from './TestIp.module.scss';

export const TestIp = () => {
  return (
    <div className={wrapper}>
      {
        [...Array(25)].map((_, i) => Array(<div
          key={i}
          className={wrapper_ip}
        >
          ip: 127:0:0:1
        </div>))
      }
    </div>
  )
}
