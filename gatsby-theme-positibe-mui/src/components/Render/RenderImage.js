import Image from "../Image/Image";
import React from "react";

const RenderImage = ({media, alt, styleProps}) => {
  if (!media) {
    return null;
  }
  return <Image fluid={media.publicUrlSharp.childImageSharp.fluid} alt={alt} styleProps={styleProps}/>
}

export default RenderImage