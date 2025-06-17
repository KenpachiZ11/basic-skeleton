import React from 'react';

import {
  wrapper,

} from './Error.module.scss';

export const Error = () => {
  return (
    <div
      className={wrapper}
    >
      <div>2 из 8 не опубликовано</div>
      <div>Для публикации заполните ключевой параметр, одно отклонение, пояснение.</div>
    </div>
  )
}
