export const ImageGalleryItem = ({ item }) => {
  return (
    <li>
      <img src={item.webformatURL} alt={item.tags} />
    </li>
  );
};
