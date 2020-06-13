import {createMuiTheme, responsiveFontSizes} from '@material-ui/core'

// colors
const primary = 'black'
const secondary = 'white'
const black = '#343a40'
const darkBlack = 'rgb(36, 40, 44)'

//font
// const ralewayBlack = {
//   fontFamily: 'Relaway',
//   fontWeight: 900,
//   fontStyle: 'normal',
//   src: `url(${RalewayBlack})`,
// };

export function applyHeight(props) {
  if (props.height === 'fullscreen') {
    return '100vh'
  } else if (props.height === '3/4') {
    return '75vh'
  } else if (props.height === 'half_screen') {
    return '50vh'
  }

  return 'inherit'
}

export function applyFilter(props) {
  let filter = ''
  if (props.brightness) {
    filter += ` brightness(${props.brightness}%)`
  }

  return filter.length === 0 ? 'none' : filter
}

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