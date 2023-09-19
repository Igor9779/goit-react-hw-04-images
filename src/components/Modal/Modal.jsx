import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalImg, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  backDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.backDropClick}>
        <ModalImg>
          <img src={this.props.largeImageURL} alt="" />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}
