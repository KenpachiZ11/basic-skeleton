import React from 'react';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import LockPersonIcon from '@mui/icons-material/LockPerson';

export const path = [
  {
    name: 'Реестр ОПО',
    path: '/',
    icon: <HomeIcon />
  },
  {
    name: 'Диспетчер',
    path: '/dispatcher',
    icon: <LinkedCameraIcon />
  },
  // {
  //   name: 'ПромБез',
  //   path: '/prombez',
  //   icon: <CameraIndoorIcon />
  // },
  // {
  //   name: 'ДПБЭиНТР',
  //   path: '/owner',
  //   icon: <LockPersonIcon />
  // },
  // {
  //   name: 'Админ',
  //   path: '/admin',
  //   icon: <AdminPanelSettingsIcon />
  // },
];