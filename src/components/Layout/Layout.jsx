import React from 'react';
import { Outlet } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { Header } from '../Header/Header';
import { Navigation } from '../../navigation/Navigation';
import { Footer } from '../Footer/Footer';

import {
  wrapper
} from './Layout.module.scss';

export const Layout = () => {
  return (
    <div
      className={wrapper}
    >
      <header>
        <Logo/>
        <Header/>
      </header>
      <main>
        <Navigation />
        <Outlet />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}