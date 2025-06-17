import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modalSlice/modalSlice';

import { Modal } from './Modal';

export const ModalVariant = ({
  modalId,
  children,
  width,
  height
}) => {
  const { modals } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const isOpen = modals[modalId] || false;

  if(!isOpen) return null;

  return <Modal
    modalId={modalId}
    children={children}
    cb={() => dispatch(closeModal(modalId))}
    width={width}
    height={height}
  />
};