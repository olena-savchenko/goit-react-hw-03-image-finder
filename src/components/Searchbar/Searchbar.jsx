import { Component } from 'react';
import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchBtn,
  StyledSearchInput,
  StyledSearchIcon,
} from './Searchbar.styled';

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

    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  render() {
    return (
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
    );
  }
}
