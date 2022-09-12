import React, { FC, useState, useEffect } from 'react';
import './ProgressiveImage.scss';

interface ProgressiveImageProps {
  placeholderSrc: string,
  src: string
}

const ProgressiveImage: FC<ProgressiveImageProps> = ({ placeholderSrc, src }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  const customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  return (
    <img
      {...{ src: imgSrc, onLoad: () => setImgSrc(src) }}
      className={`ProgressiveImage ${customClass}`}
      loading="lazy"
    />
  );
}

export default ProgressiveImage;
