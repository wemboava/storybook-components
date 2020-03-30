import React from 'react';
import PropTypes from 'prop-types';
import CloudinaryImage from '../cloudinary-image';
import Ratings from '../ratings';
import { FeaturedStyled, Card } from './styles';

const Featured = ({
  label,
  subLabel,
  publicId,
  image,
  rate,
}) => {
  const imageComponent = () => {
    if (publicId) {
      return (
        <CloudinaryImage
          publicId={publicId}
          crop="fill"
          width={400}
          height={600}
          className="container_img__image"
        />
      );
    }

    return <img alt={label} className="container_img__image" src={image} />;
  };
  return (
    <Card>
        <a href="/">
          <FeaturedStyled>
            <div className="container_img">{
              imageComponent()
            }</div>
            <div className="info">
              <h4 className="info__label">
                {label}
              </h4>
              <div className="info__sublabel_container">
                <h5 className="sublabel">
                  {subLabel}
                </h5>
                <Ratings onlyReading starColor="#d9ae5f" rate={rate} starSize="15px" />
              </div>
            </div>
          </FeaturedStyled>
        </a>
    </Card>
  );
};

Featured.propTypes = {
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.string.isRequired,
  publicId: PropTypes.string,
  image: PropTypes.string,
  rate: PropTypes.number,
};

export default Featured;
