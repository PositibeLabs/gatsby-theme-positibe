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