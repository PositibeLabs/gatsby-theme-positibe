import React from 'react'
import PropTypes from 'prop-types'
import Simple from "../Simple/Simple";
import Video from "../Video/Video";
import Image from "../Image/Image";
import Document from "../Document/Document";

const RenderComponent = ({component, ...props}) => {
  switch (component.type) {
    case 'Document': {
      return <Document href={`/media/` + component.media.publicUrlSharp.base} label={component.content} {...component.attributes}/>
    }
    case 'Video': {
      return <Video src={`/media/` + component.media.publicUrlSharp.base} {...props}/>
    }
    case 'Image': {
      return <Image fluid={component.media.publicUrlSharp.childImageSharp.fluid} {...props}/>
    }
    default:
      return <Simple component={component} {...component.attributes} {...props}/>
  }
}

RenderComponent.propTypes = {
  component: PropTypes.object.isRequired,
  contentType: PropTypes.object
}
export default RenderComponent