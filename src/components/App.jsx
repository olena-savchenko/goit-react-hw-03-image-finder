import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'api/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { StyledApp } from './App.styled';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
  };

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  async componentDidUpdate(prevProps, prevState) {
    // getImages(this.state.searchQuery).then(response => {
    //   return this.setState(prevState => {images: [...prevState.images, ...response.data})
    // });
    if (prevState.searchQuery !== this.state.searchQuery) {
      // getImages(this.state.searchQuery).then(response =>
      //   console.log(response.data.hits)
      const images = await getImages(this.state.searchQuery);
      console.log('Images from axios: ', images);

      this.setState({ images });
      // this.setState(prevState => {images}); // console.log('Images в APP: ', images);
    }
  }

  // componentDidUpdate(prevProps, prevState) {

  // }

  render() {
    return (
      <StyledApp>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} />
      </StyledApp>
    );
  }
}
