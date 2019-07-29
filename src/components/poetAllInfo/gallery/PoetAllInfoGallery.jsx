import React from 'react';
import ImageGallery from 'react-image-gallery';

const galleryStyles = {
  width: '30vw'
};

const PoetAllInfoGallery = props => {
  const { images } = props;

  const imagesWraps = images.map(image => ({
    original: image,
    thumbnail: image
  }));
  return (
    <div style={galleryStyles}>
      <ImageGallery items={imagesWraps} />
    </div>
  );
};

export default PoetAllInfoGallery;
