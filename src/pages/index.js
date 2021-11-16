import * as React from "react"
import HeroSection from '../components/HeroSection/HeroSection'
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
