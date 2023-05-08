import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'api/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { StyledApp } from './App.styled';
import { Modal } from './Modal/Modal';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    showModal: false,
    // largeImageURL: '',
  };

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const images = await getImages(this.state.searchQuery);
      this.setState({ images });
    }
  }

  render() {
    const { showModal } = this.state;
    return (
      <StyledApp>
        <button type="button" onClick={this.toggleModal}>
          Открыть
        </button>
        {showModal && <Modal onCloseModal={this.toggleModal}>{}</Modal>}
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} />
      </StyledApp>
    );
  }
}
