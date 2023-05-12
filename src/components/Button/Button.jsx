import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

export const LoadMoreBtn = ({ children, onClickLoadMore }) => {
  return (
    <StyledBtn type="button" onClick={onClickLoadMore}>
      {children}
    </StyledBtn>
  );
};

LoadMoreBtn.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
