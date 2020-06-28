import React from "react";

const RenderRawContent = ({content}) => {
  if (!content) {
    return null;
  }
  return <div className="RawContent"
              dangerouslySetInnerHTML={{__html: content}}
  />
}
export default RenderRawContent