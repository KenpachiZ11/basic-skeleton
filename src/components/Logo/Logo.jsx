import React from 'react';
import { Link } from "react-router-dom";

import LogoLukoil from '../../assets/logo.svg';

import {
  logo
} from './Logo.module.scss';

export const Logo = ({ style }) => {
  return  <div
    className={logo}
    style={style}
  >
    <Link to={'/'}>
      <img src={LogoLukoil} alt='Lukoil'/>
    </Link>
  </div>
}