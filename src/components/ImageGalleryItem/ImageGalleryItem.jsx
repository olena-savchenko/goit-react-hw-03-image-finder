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

/**
 * 
export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
  onSelectImage,
}) => {
  const handleImageClick = () => {
    onClick();
    onSelectImage(largeImageURL);
  };

  return (
    <GalleryItem className="gallery-item">
      <GalleryImage src={webformatURL} alt={tags} onClick={handleImageClick} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

 */
