import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const PortfolioSection = ({ sectionID }) => {

  
  const { datoCmsAboutSection, datoCmsHeroSection } = useStaticQuery(graphql`
    query PortfolioImage {
      datoCmsAboutSection {
        aboutProfileImage {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          alt
        }
      }
      datoCmsHeroSection {
        headingText
        heroImage {
           gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
           alt
        }
     }
    }`
  )

  const placeholder = getImage(datoCmsAboutSection.aboutProfileImage)
  const heroImage = getImage(datoCmsHeroSection.heroImage)

  return(
    <div id={sectionID}>
      <ImageList sx={{ transform: 'translateZ(0)' }} gap={4}>
        <ImageListItem cols={2} rows={3}>
          <GatsbyImage image={heroImage} alt={datoCmsHeroSection.heroImage.alt}  />
          <ImageListItemBar
            title={"Opis 1"}
            subtitle={"Subtitle 1"}
          />
        </ImageListItem>
        <ImageListItem cols={1} rows={2}>
          <GatsbyImage image={placeholder}  alt={datoCmsAboutSection.aboutProfileImage.alt} />
          <ImageListItemBar
            title={"Opis 2"}
            subtitle={"Subtitle 2"}
          />
        </ImageListItem>
        <ImageListItem cols={1} rows={2}>
          <GatsbyImage image={placeholder} alt={datoCmsAboutSection.aboutProfileImage.alt}  />
          <ImageListItemBar
            title={"Opis 3"}
            subtitle={"Subtitle 3"}
          />
        </ImageListItem>
        <ImageListItem cols={2} rows={3}>
          <GatsbyImage image={heroImage} alt={datoCmsHeroSection.heroImage.alt}  />
          <ImageListItemBar
            title={"Opis 4"}
            subtitle={"Subtitle 4"}
          />
        </ImageListItem>
      </ImageList>
    </div>
  )
}

export default PortfolioSection
