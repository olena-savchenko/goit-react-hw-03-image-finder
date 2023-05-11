import { StyledBtn } from './Button.styled';

export const LoadMoreBtn = ({ children, onClickLoadMore }) => {
  return (
    <StyledBtn type="button" onClick={onClickLoadMore}>
      {children}
    </StyledBtn>
  );
};
