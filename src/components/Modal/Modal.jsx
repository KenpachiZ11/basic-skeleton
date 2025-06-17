import React from 'react';

import { Button } from '../Button/Button';
import { Icons } from '../../icons/Icons';

import {
  wrapper,
  wrapper_block,
  closed_button
} from './Modal.module.scss';

export const Modal = ({
  children,
  cb,
  width,
  height,
}) => {

  return (
    <div className={wrapper}>
      <Button
        type={'button'}
        cN={closed_button}
        icon={<Icons icon_name={'closed'} />}
        cb={cb}
      />
        <div
          className={wrapper_block}
          style={{
            width: `${width ? `${width}` : `auto`}`,
            height: `${height ? `${height}` : `auto`}`,
          }}
        >
          { children }
      </div>
    </div>
  )
}