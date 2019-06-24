import React, { useRef } from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {
  /* Initialize state of imageRef to null - when the component renders
    it assignes imageRef to our constant, then we can use imageRef.current
    to get to our image attributes */
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageTogglerOnMouseOver;
