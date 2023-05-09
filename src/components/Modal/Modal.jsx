import { StyledOverlay } from './Modal.styled';
import { StyledModal } from './Modal.styled';
import { Component } from 'react';
// import { createPortal } from 'react-dom';
// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    // console.log('componentDidMount');
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === `Escape`) {
      // console.log('Натискання ESC');
      this.props.onCloseModal();
    }
  };

  onClickOverlay = e => {
    if (e.currentTarget === e.target) {
      // console.log('Клік по оверлей');
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <StyledOverlay onClick={this.onClickOverlay}>
        <StyledModal>{this.props.children}</StyledModal>
      </StyledOverlay>
    );
  }
}
