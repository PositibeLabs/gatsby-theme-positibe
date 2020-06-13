export default function extractSEO(contentType) {
  return {
    title: contentType.title,
    description: contentType.excerpt || contentType.description.substr(0, 158),
    keywords: contentType.keywords
  }
}