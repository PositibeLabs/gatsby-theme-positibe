export function applyFilter(props) {
  let filter = ''
  if (props.brightness) {
    filter += ` brightness(${props.brightness}%)`
  }

  return filter.length === 0 ? 'none' : filter
}