import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'service/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { StyledApp } from './App.styled';
import { Modal } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    showModal: false,
  };

  // передаємо значення пошукового запиту при сабміті форму з класу Searchbar в state App
  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  // міняє значення showModal в state на протилежне
  toggleModal = (largeImageURL, alt) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL,
      alt,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const images = await getImages(this.state.searchQuery);
      this.setState({ images });
    }
  }

  render() {
    const { showModal, images, largeImageURL, alt } = this.state;

    return (
      <StyledApp>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery
          images={images}
          // передача як props посилання на функцію відкриття/закриття модалки
          toggleModal={this.toggleModal}
        />
        <LoadMoreBtn>load more</LoadMoreBtn>
        {/* рендер модалки по умові */}
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            {<img src={largeImageURL} alt={alt} />}
          </Modal>
        )}
      </StyledApp>
    );
  }
}
