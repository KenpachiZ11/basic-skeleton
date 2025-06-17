import React, { useState } from 'react';

import { Error } from '../../components/InformEvents/Error/Error';
import { InputDropdown } from '../../components/Input/InputDropdown';

import {
  wrapper,
  wrapper_block,
  wrapper_info,
  wrapper_info__setting,
  wrapper_info__events,
  // wrapper_info__events_block
} from './OwnerSceletron.module.scss';

export const OwnerSceletron = ({
  owner,
  settings,
  events,
  titleSettings,
  titleEvents,
}) => {

  return (
    <div
      className={wrapper}
    >
      <div
        className={wrapper_block}
      >
        { owner }
      </div>

      <div
        className={wrapper_info}
      >
        <div
          className={wrapper_info__setting}
        >
          { titleSettings }
          { settings }
        </div>
        <div
          className={wrapper_info__events}
        >
          { titleEvents }
          { events }
        </div>
      </div>
    </div>
  )
};