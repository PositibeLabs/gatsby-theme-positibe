import {createMuiTheme, responsiveFontSizes} from '@material-ui/core'

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorTop: {
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(71,60,53,0.7)'
      }
    },
    MuiCssBaseline: {
      '@global': {
        // '@font-face': [],
        'html': {
          'scrollBehavior': 'smooth'
        }
      },
    }
  }
})

export default responsiveFontSizes(theme)