import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms'
import { useAboutSectionStyles } from './AboutSection.style'
import ResponsiveTimeline from './Timeline/Timeline'
import './AboutSection.css'


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

  return (
    <div className="container" id={sectionID}>
      <div className="profile-photo">
        <GatsbyImage image={profileImage} alt={datoCmsAboutSection.aboutProfileImage.alt} className={aboutSectionImage} />
      </div>
      <div className="description">
        <Typography align="center" noWrap variant="h4" className={aboutSectionHeading} style={{color: 'var(--main)'}}>
          {datoCmsAboutSection.aboutHeading}
        </Typography>
        <StructuredText data={datoCmsAboutSection.aboutTextContent}/>
      </div>
      <div className="photo-1">
        <GatsbyImage image={aboutPhoto1} alt={datoCmsAboutSection.aboutPhoto1.alt} className={aboutSectionImage} />
      </div>
      <div className="photo-2">
        <GatsbyImage image={aboutPhoto2} alt={datoCmsAboutSection.aboutPhoto2.alt} className={aboutSectionImage} />
      </div>
      <div className="photo-3">
        <GatsbyImage image={aboutPhoto3} alt={datoCmsAboutSection.aboutPhoto3.alt} className={aboutSectionImage} />
      </div>
      <div className="partnership">
        <h2>Jak wygląda współpraca?</h2>
        <div className='content-wrapper'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam minus nulla beatae asperiores ratione hic, doloremque exercitationem ad odit quo aliquid nihil? Eius expedita laborum possimus magnam corporis quibusdam.
            Natus asperiores, quia beatae est explicabo repellendus totam quisquam aliquam cumque, exercitationem cum, dolorem neque magnam nam id fuga perferendis. Maiores vitae cumque quis corrupti id incidunt consectetur possimus! Hic!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam minus nulla beatae asperiores ratione hic, doloremque exercitationem ad odit quo aliquid nihil? Eius expedita laborum possimus magnam corporis quibusdam.
            Natus asperiores, quia beatae est explicabo repellendus totam quisquam aliquam cumque, exercitationem cum, dolorem neque magnam nam id fuga perferendis. Maiores vitae cumque quis corrupti id incidunt consectetur possimus! Hic!
          </p>
        </div>
      </div>
      <div className="timeline">
        <ResponsiveTimeline className="Timeline" />
      </div>
    </div>
  )
}
export default AboutSection
