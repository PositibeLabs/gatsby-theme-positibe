import React from 'react'
import PropTypes from 'prop-types'

const RenderComponent = ({component}) => {
  return (
      <article>
        {component.heading ? <h3>{component.heading}</h3> : null}
        {component.content ? <div dangerouslySetInnerHTML={{__html: component.content}}/> : null}
      </article>
  )
}

RenderComponent.propTypes = {
  component: PropTypes.object.isRequired,
  contentType: PropTypes.object
}
export default RenderComponent