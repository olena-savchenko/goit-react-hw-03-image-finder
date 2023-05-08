/**
 * <ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul>
 */

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <ImageGalleryItem key={image.id} item={image}></ImageGalleryItem>
      ))}
    </ul>
  );
};
