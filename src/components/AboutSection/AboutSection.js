import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms'
import { useAboutSectionStyles } from './AboutSection.style'


const AboutSection = ({ sectionID }) => {

  const { datoCmsAboutSection } = useStaticQuery(graphql`
    query AboutSection {
      datoCmsAboutSection {
        aboutTextContent {
          value
        }
        aboutHeading
        aboutProfileImage {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          alt
        }
        aboutPhoto1 {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          alt
        }
        aboutPhoto2 {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          alt
        }
        aboutPhoto3 {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          alt
        }
        aboutPartnershipPhoto {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          alt
        }
      }
    }`
  )
  const { aboutSectionHeading, aboutSectionDescriptionWrapper, aboutSectionImage } = useAboutSectionStyles()
  const profileImage = getImage(datoCmsAboutSection.aboutProfileImage)
  const aboutPhoto1 = getImage(datoCmsAboutSection.aboutPhoto1)
  const aboutPhoto2 = getImage(datoCmsAboutSection.aboutPhoto2)
  const aboutPhoto3 = getImage(datoCmsAboutSection.aboutPhoto3)
  const aboutPartnershipPhoto = getImage(datoCmsAboutSection.aboutPartnershipPhoto)

  return(
    <Grid 
      id={sectionID} 
      container 
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      style={{ gridArea: 'about' }}
      >
      <Grid container xs >
        <Grid item xs={2}>
          <GatsbyImage image={profileImage} alt={datoCmsAboutSection.aboutProfileImage.alt} className={aboutSectionImage} />
        </Grid>
        <Grid item xs={4} className={aboutSectionDescriptionWrapper}>
          <Typography align="center" noWrap variant="h4" className={aboutSectionHeading} >
            {datoCmsAboutSection.aboutHeading}
          </Typography>
          <StructuredText 
            data={datoCmsAboutSection.aboutTextContent}
          />
        </Grid>
        <Grid item xs={2}>
            <GatsbyImage image={aboutPhoto1} alt={datoCmsAboutSection.aboutPhoto1.alt} className={aboutSectionImage} />
        </Grid>
        <Grid item xs={2}>
            <GatsbyImage image={aboutPhoto2} alt={datoCmsAboutSection.aboutPhoto2.alt} className={aboutSectionImage} />
        </Grid>
        <Grid item xs={2}>
            <GatsbyImage image={aboutPhoto3} alt={datoCmsAboutSection.aboutPhoto3.alt} className={aboutSectionImage} />
        </Grid>
      </Grid>
      <Grid container xs > {/* TODO Dodać sekcję "Jak wygląda współpraca"*/}
        Jak wygląda współpraca
      </Grid>
      <Grid container xs >
        <GatsbyImage image={aboutPartnershipPhoto} alt={datoCmsAboutSection.aboutPartnershipPhoto.alt} className={aboutSectionImage} />
      </Grid>
    </Grid>
  )
}
export default AboutSection
