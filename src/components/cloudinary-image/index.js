import React from 'react';
import { Image } from 'cloudinary-react';

export default props => {
  const { publicId, width, height, crop } = props;
  return (
    <Image
      cloudName="wemboava"
      publicId={publicId}
      width={width}
      height={height}
      crop={crop}
      fetchFormat="auto"
      quality="auto:eco"
      secure
    >
      {props.children}
    </Image>
  );
};
