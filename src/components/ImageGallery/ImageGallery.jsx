/**
 * <ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul>
 */

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} item={image}></ImageGalleryItem>
      ))}
    </StyledImageGallery>
  );
};
