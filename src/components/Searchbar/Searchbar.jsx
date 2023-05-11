import { Component } from 'react';
import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchBtn,
  StyledSearchInput,
  StyledSearchIcon,
} from './Searchbar.styled';
import toast, { Toaster } from 'react-hot-toast';

// import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
// import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  // контрольований інпут
  handleInputChange = e => {
    // this.setState({ searchQuery: e.currentTarget.value });
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    //заборона вводу порожнього рядка
    if (this.state.searchQuery.trim() === '') {
      toast('Enter a search name!');
      // this.setState({
      //   error: 'Enter a search name!',
      // });
    }

    this.props.handleSearch(this.state.searchQuery.trim());
    this.reset();
  };

  render() {
    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <StyledSearchbar>
          <StyledSearchForm onSubmit={this.handleFormSubmit}>
            <StyledSearchInput
              type="text"
              autoComplete="off"
              name="searchQuery"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchQuery}
              onChange={this.handleInputChange}
            />
            <StyledSearchBtn type="submit">
              <StyledSearchIcon />
            </StyledSearchBtn>
          </StyledSearchForm>
        </StyledSearchbar>
      </>
    );
  }
}
