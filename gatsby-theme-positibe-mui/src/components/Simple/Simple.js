import React from 'react'
import PropTypes from 'prop-types'
import useStyles from "./useStyles";
import RenderImage from "../Render/RenderImage";
import RenderHeading from "../Render/RenderHeading";
import RenderRawContent from "../Render/RenderRawContent";
import RenderChildren from "../Render/RenderChildren";

const Simple = ({component, headingVariant = 'h3'}) => {
  const classes = useStyles()
  return (
      <article className={classes.root + ' Simple'}>
        <RenderImage media={component.media} alt={component.heading}/>
        <RenderHeading title={component.heading} variant={headingVariant}/>
        <RenderRawContent content={component.content}/>
        <RenderChildren children={component.children}/>
      </article>
  )
}

Simple.propTypes = {
  component: PropTypes.object.isRequired,
  pageClasses: PropTypes.object
}

export default Simple