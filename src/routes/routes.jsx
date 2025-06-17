import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "../pages/MainPage/MainPage";
import { Auth } from "../components/Auth/Auth";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { PrombezPage } from "../pages/PrombezPage/PrombezPage";
import { DispatcherPage } from "../pages/DispatcherPage/DispatcherPage";
import { OwnerDispatcherPage } from "../pages/OwnerDispatcherPage/OwnerDispatcherPage";
import { TestMap } from "../components/TestMap/TestMap";
import { MapPage } from "../pages/MapPage/MapPage";

const routers = [
  { path: '/', element: <MainPage /> },
  { path: '/dispatcher', element: <MapPage /> },
  // { path: '/profile', element: <ProfilePage /> },
  // { path: '/admin', element: <AdminPage /> },
  // { path: '/prombez', element: <PrombezPage /> },
  // { path: '/dispatcher', element: <DispatcherPage /> },
  // { path: '/owner', element: <OwnerDispatcherPage /> },
  // { path: '/map', element: <MapPage /> },
  { path: '', element: '' },
];

export const router = createBrowserRouter([
{
  path: '/',
  element: <Auth />,
  children: routers,
} 
]);