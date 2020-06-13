export default function isContainer(section) {
  try {
    return section.configuration.container
  } catch (e) {
    return true
  }
}