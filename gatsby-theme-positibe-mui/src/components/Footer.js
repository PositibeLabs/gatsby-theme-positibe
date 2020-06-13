import React from "react";
import {makeStyles} from '@material-ui/core/styles'
// import Container from "@positibelabs/gatsby-theme-positibe-api/src/components/Container/Container";

const Copyright = ({className}) => {
  return <div style={{textAlign: 'center'}} className={className}>
    {/*<Container maxWidth="md">*/}
      Marca registrada © {new Date().getFullYear()}. Todos los derechos reservados
    {/*</Container>*/}
  </div>
}

const Footer = () => {
  const classes = useStyles()
  return (
      <footer className={classes.footerRoot}>
        <div id="contact">
          {/*<Container maxWidth="md">*/}
            Footer
          {/*</Container>*/}
        </div>
        <Copyright className={classes.copyrightRoot}/>
      </footer>)
}

export default Footer

const useStyles = makeStyles(theme => ({
  footerRoot: {
    '& a, &': {
      color: theme.palette.grey[400],
      textDecoration: 'none',
      fontStyle: 'normal'
    },
    [theme.breakpoints.up("md")]: {
      textAlign: 'left'
    }
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up("md")]: {
      justifyContent: 'flex-end'
    }
  }
}))
