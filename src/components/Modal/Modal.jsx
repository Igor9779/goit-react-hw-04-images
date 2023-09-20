import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalImg, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose]);

  const backdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={backdropClick}>
      <ModalImg>
        <img src={largeImageURL} alt="" />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
};
