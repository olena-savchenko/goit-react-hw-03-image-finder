import { StyledOverlay } from './Modal.styled';
import { StyledModal } from './Modal.styled';
import { Component } from 'react';
// import { createPortal } from 'react-dom';
// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    // закриття модалки по Esc
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('Закриття модалки по ESC');
        this.props.onCloseModal();
      }
    });
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  render() {
    return (
      <StyledOverlay>
        <StyledModal>{this.props.children}</StyledModal>
      </StyledOverlay>
    );
  }
}
