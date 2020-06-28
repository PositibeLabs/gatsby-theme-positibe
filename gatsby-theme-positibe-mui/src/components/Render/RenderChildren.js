import React from "react";
import RenderComponent from "./RenderComponent";

const RenderChildren = ({children, ...props}) => {
  if (!children || children.edges.length === 0) {
    return null;
  }
  return <div className="children">
    {children.edges.map(({node: component}) => (
        <RenderComponent key={component.id} component={component} {...props}/>
    ))}
  </div>

}

export default RenderChildren