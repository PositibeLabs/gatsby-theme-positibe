import React from 'react'
import PropTypes from 'prop-types'
import RenderSection from "../Render/RenderSection";
import RenderComponent from "../Render/RenderComponent";

const Page = ({page}) => {
  return page.sections.edges.map(({node: section}) => (
      <RenderSection key={section.id} contentType={page} name={section.name} RenderComponent={RenderComponent}/>
  ))
}

Page.propTypes = {
  page: PropTypes.object.isRequired
}

export default Page