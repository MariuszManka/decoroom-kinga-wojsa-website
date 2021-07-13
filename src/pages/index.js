import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import WaitingForPage from '../components/WaitingForPage/WaitingForPage'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <WaitingForPage />
    </Layout>
  )
}


export default IndexPage
