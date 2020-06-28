import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import {MuiThemeProvider} from '@material-ui/core/styles'
import theme from '../theme/theme'
import Footer from "./Footer";

const Layout = ({children, className}) => {
  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <main className={className}>{children}</main>
        <Footer/>
      </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
