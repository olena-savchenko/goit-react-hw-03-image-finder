import { StyledImage, StyledImageGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  return (
    <StyledImageGalleryItem>
      <div>
        <StyledImage src={item.webformatURL} alt={item.tags} />
      </div>
    </StyledImageGalleryItem>
  );
};
