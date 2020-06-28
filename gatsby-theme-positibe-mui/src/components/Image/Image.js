import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImage from "gatsby-image";
import useStyles from "./useStyles";

const Image = ({fluid, alt, styleProps, className}) => {
  const classes = useStyles(styleProps)
  return <GatsbyImage fluid={fluid} alt={alt} className={classes.root + ' ' + className + ' Image'}/>
}

Image.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image