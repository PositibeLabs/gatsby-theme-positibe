import React from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography"
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'gatsby'

const useStyles = makeStyles(theme => ({
  // root: theme.components.Heading.root,
  // text: theme.components.Heading.text,
  // link: theme.components.Heading.link
}))

// Text heading component show the text in heading
const HeadingText = ({title, variant = 'h1'}) => {
  const classes = useStyles()
  return <Typography component={variant} variant={variant} className={classes.text}>{title}</Typography>
}

// Link heanding component wrap the text if the heading is a link
const HeadingLink = ({link, alt = null, children}) => {
  const classes = useStyles()
  return <Link to={link} alt={alt} className={classes.link}>{children}</Link>
}

// Main component, show text heading component or wrap it into a link component if a link is provided
const Heading = ({title, variant = 'h1', link = null}) => {
  const textComponent = <HeadingText title={title} variant={variant}/>
  return link ? <HeadingLink link={link} alt={title}>{textComponent}</HeadingLink> : textComponent
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  link: PropTypes.string,
  textClasses: PropTypes.string,
  linkClasses: PropTypes.string
}

export default Heading