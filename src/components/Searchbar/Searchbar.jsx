import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchBtn,
  StyledSearchInput,
  StyledSearchIcon,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <StyledSearchbar>
      <StyledSearchForm>
        <StyledSearchInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <StyledSearchBtn type="submit">
          <StyledSearchIcon />
        </StyledSearchBtn>
      </StyledSearchForm>
    </StyledSearchbar>
  );
};
