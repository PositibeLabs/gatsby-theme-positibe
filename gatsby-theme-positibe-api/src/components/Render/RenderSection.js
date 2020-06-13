import React from 'react'
import PropTypes from 'prop-types'

const RenderSection = ({contentType, name, className, RenderComponent}) => {
  const section = getSectionByName(contentType, name)
  return (
      <section className={className + ' Section Section-' + section.name}>
        {section.components.edges.map(({node: component}) => (
            <RenderComponent key={component.id} component={component} contentType={contentType}/>
        ))}
      </section>
  )
}

function getSectionByName(contentType, name) {
  const {node: section} = contentType.sections.edges.find(({node: section}) => name === section.name)

  return section
}

RenderSection.propTypes = {
  contentType: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  RenderComponent: PropTypes.func.isRequired
}

export default RenderSection