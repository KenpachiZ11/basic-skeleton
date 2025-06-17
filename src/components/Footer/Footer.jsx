import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>Все права защены группой компании Лукойл {year}</>
  )
}