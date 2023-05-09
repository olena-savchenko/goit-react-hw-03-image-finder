import { StyledImage, StyledImageGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, toggleModal }) => {
  const { webformatURL, largeImageURL, tags } = image;

  return (
    <StyledImageGalleryItem>
      <StyledImage
        src={webformatURL}
        alt={tags}
        onClick={() => toggleModal(largeImageURL, tags)}
      />
    </StyledImageGalleryItem>
  );
};
