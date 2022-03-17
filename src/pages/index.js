import * as React from "react"
import HeroSection from '../components/HeroSection/HeroSection'
import AboutSection from '../components/AboutSection/AboutSection'
import Footer from '../components/Footer/Footer'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import useConfig from 'src/hooks/useConfig'
import { SnackbarProvider } from 'notistack';


const IndexPage = () => {

  const hrefsArray = useConfig("hrefs")
  const aboutSectionID = hrefsArray?.[0]?.name ?? 'about'
  const portfolioSectionID = hrefsArray?.[1]?.name ?? 'portfolio'
  const contactSectionID = hrefsArray?.[2]?.name ?? 'contact'
  
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Layout>
          <Seo title="Home" />
          <HeroSection />
          <AboutSection sectionID={aboutSectionID} />
          <PortfolioSection sectionID={portfolioSectionID} />
          <ContactSection sectionID={contactSectionID} />
          <Footer />
        </Layout>
    </SnackbarProvider>
  )
}

export default IndexPage
