import React from 'react';

import {
  wrapper,
  wrapper_block
} from './Information.module.scss';

export const Information = () => {
  return (
    <div className={wrapper}>
      <div className={wrapper_block}>
        <h3>Argus</h3>
        <p>Уважаемые коллеги!</p>
        <p>Обращаем ваше внимание, что портал Argus работает в тестовом режиме.</p>
        <p>В связи с этим, с 18:00 до 10:00 по МСК могут наблюдаться технические неполадки.</p>
        <p>С уважением, Команда ИТ</p>
      </div>
    </div>
  )
}