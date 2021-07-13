import { graphql } from 'gatsby'
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import WaitingForPage from './WaitingForPage/WaitingForPage'

const IndexPage = ({ data }) => {
  const image = getImage(data.file)

  return (
    <Layout>
      <Seo title="Home" />
      <WaitingForPage />
    </Layout>
  )
}

export const imageQuery = graphql`
query imageQuery {
  file(name: {eq: "hero"}, childImageSharp: {fixed: {}}) {
    childImageSharp {
      	 gatsbyImageData(layout: FIXED)
    }
  }
}

`

export default IndexPage
