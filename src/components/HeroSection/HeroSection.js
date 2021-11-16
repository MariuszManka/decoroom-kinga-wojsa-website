import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container,  Typography } from '@material-ui/core'
import { useHeroSectionStyles } from './HeroSection.styled';

const HeroSection = () => {

   const data = useStaticQuery(graphql`
      query HeroImage {
         datoCmsHeroSection {
            headingText
            heroImage {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
               alt
            }
         }
      }`
   )

   const {heroSectionWrapper, heroSectionImage, heroSectionHeadingWrapper, heroSectionHeadingText } = useHeroSectionStyles()
   const heroImage = getImage(data.datoCmsHeroSection.heroImage)

   return(
     <div className={heroSectionWrapper}>
       <GatsbyImage image={heroImage} alt={data.datoCmsHeroSection.heroImage.alt} className={heroSectionImage} />
       <Container classes={{ root: heroSectionHeadingWrapper }} maxWidth='md'>
         <Typography classes={{ root: heroSectionHeadingText }} component='h1' variant='h2'>{data.datoCmsHeroSection.headingText}</Typography>
       </Container>
     </div>
   )
}

export default HeroSection
