import React from "react"

import Layout from "@positibelabs/gatsby-theme-positibe-api/src/components/Layout"

const NotFoundPage = () => (
    <Layout seo={{title: "404: Not found", description: "", keywords: ""}}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
)

export default NotFoundPage
