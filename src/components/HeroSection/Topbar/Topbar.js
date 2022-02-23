import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import useConfig from 'src/hooks/useConfig'
import { isEmpty } from 'lodash'
import { useTopBarStyles } from './Topbar.styles'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TabContent = ({ hrefsArray }) => {

   const { topBarLink } = useTopBarStyles()

   if(isEmpty(hrefsArray))
      return null
   
    return (
      hrefsArray.map((hrefObject, index) => {
         
         if(!hrefObject.href || !hrefObject.label)
            return null
            
         return (
            <Link to={hrefObject.href} key={index} className={topBarLink} >
               <Tab label={hrefObject.label} value={hrefObject.name}  style={{ whiteSpace: 'nowrap' }}/>
            </Link>
         )
      })
    )       
}

const Topbar = () => {
   const hrefsArray = useConfig("hrefs")
   const { topBarWrapper, topBarTabsFlexContainer, topBarLogo } = useTopBarStyles()

   const { datoCmsHeroSection } = useStaticQuery(graphql`
      query Logo {
         datoCmsHeroSection {
           logo {
               gatsbyImageData(layout: FIXED, placeholder: BLURRED, height: 40)
               alt
           }
         }
      }
    `
   )
      
   const logo = getImage(datoCmsHeroSection.logo)


   return (
     <div className={topBarWrapper}>
       <GatsbyImage image={logo} alt={datoCmsHeroSection.logo.alt} className={topBarLogo} />
       <Tabs variant="fullWidth" value={false} classes={{ flexContainer: topBarTabsFlexContainer }}>
         <TabContent hrefsArray={hrefsArray} />
       </Tabs>
     </div>
   )
}
export default Topbar
