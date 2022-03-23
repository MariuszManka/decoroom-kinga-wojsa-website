import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container,  Typography } from '@material-ui/core'
import { useHeroSectionStyles } from './HeroSection.styled'
import Topbar from './Topbar/Topbar'

const HeroSection = () => {

   const { datoCmsHeroSection } = useStaticQuery(graphql`
      query HeroImage {
         datoCmsHeroSection {
            headingText
            heroImage {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
               alt
            }
            logo {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
               alt
           }
         }
      }`
   )

   const { heroSectionWrapper, heroSectionImage, heroSectionHeadingWrapper, heroSectionHeadingText, heroSectionLogo, heroSectionLogoWrapper } = useHeroSectionStyles()
   const heroImage = getImage(datoCmsHeroSection.heroImage)
   const logo = getImage(datoCmsHeroSection.logo)

   return(
     <div className={heroSectionWrapper}>
       <Topbar /> 
       <GatsbyImage image={heroImage} alt={datoCmsHeroSection.heroImage.alt} className={heroSectionImage} />
       <div className={heroSectionLogoWrapper} >
            <GatsbyImage image={logo} alt={datoCmsHeroSection.logo.alt}  className={heroSectionLogo}/>
            <div className={heroSectionHeadingWrapper} >
              <Typography classes={{ root: heroSectionHeadingText }} component='h1' variant='h2'>{datoCmsHeroSection.headingText}</Typography>
            </div>
       </div>
     </div>
   )
}

export default HeroSection
