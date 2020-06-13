import React from 'react'
import PropTypes from 'prop-types'
import SEO from "./SEO";

const Layout = ({children, seo}) => {
  return (
      <>
        <SEO title={seo.title} description={seo.description} keywords={seo.keywords}/>
        {children}
      </>
  )
}

Layout.propTypes = {
  seo: PropTypes.exact({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
  })
}

export default Layout
