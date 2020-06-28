import Heading from "../Heading/Heading";
import React from "react";

const RenderHeading = ({title, variant}) => {
  if (!title) {
    return null;
  }
  return <Heading title={title} variant={variant}/>
}

export default RenderHeading