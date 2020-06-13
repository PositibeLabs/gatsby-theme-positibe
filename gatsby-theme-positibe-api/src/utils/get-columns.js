export default function getColumns(section) {
  try {
    const column = section.configuration.column || null

    if (column === 2) {
      return {xs: 12, md: 6}
    }
    if (column === 3) {
      return {xs: 12, md: 4, sm: 6}
    }
  } catch (e) {
  }

  return null
}