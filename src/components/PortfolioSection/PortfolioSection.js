import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { usePortfolioSectionStyles } from './PortfolioSection.styled'
import { useMediaQuery } from '@mui/material'

const PortfolioSection = ({ sectionID }) => {
  const breakPoint = 720
  const matches = useMediaQuery(`(max-width: ${breakPoint}px)`);

  const { datoCmsPortfolio } = useStaticQuery(graphql`
    query PortfolioImage {
      datoCmsPortfolio {
        portfolioImage1 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        portfolioImage1Heading
        portfolioImage1Subtitle
        
        portfolioImage2 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        portfolioImage2Heading
        portfolioImage2Subtitle
        
        portfolioImage3 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        portfolioImage3Heading
        portfolioImage3Subtitle
        
        portfolioImage4 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        portfolioImage4Heading
        portfolioImage4Subtitle
        
        portfolioImage5 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        portfolioImage5Heading
        portfolioImage5Subtitle
        
        portfolioImage6 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        portfolioImage6Heading
        portfolioImage6Subtitle
      }
    }`
  )
  const { 
    portfolioImage1Heading, portfolioImage1Subtitle,
    portfolioImage2Heading, portfolioImage2Subtitle,
    portfolioImage3Heading, portfolioImage3Subtitle,
    portfolioImage4Heading, portfolioImage4Subtitle,
    portfolioImage5Heading, portfolioImage5Subtitle,
    portfolioImage6Heading, portfolioImage6Subtitle,
  } = datoCmsPortfolio

  const portfolioImage1 = getImage(datoCmsPortfolio.portfolioImage1)
  const portfolioImage2 = getImage(datoCmsPortfolio.portfolioImage2)
  const portfolioImage3 = getImage(datoCmsPortfolio.portfolioImage3)
  const portfolioImage4 = getImage(datoCmsPortfolio.portfolioImage4)
  const portfolioImage5 = getImage(datoCmsPortfolio.portfolioImage5)
  const portfolioImage6 = getImage(datoCmsPortfolio.portfolioImage6)

  const { root } = usePortfolioSectionStyles()

  return(
    <div id={sectionID} style={{padding: '0 15px', backgroundColor: 'var(--darkenGrey)'}}>
      <ImageList className={root} style={{ transform: 'translateZ(0)', maxWidth: 1400, margin: 'auto !important' }} gap={15}>
        <ImageListItem cols={2} rows={matches? 1 : 4}>
          <GatsbyImage image={portfolioImage1} alt={ portfolioImage1Heading }  />
          <ImageListItemBar
            title={portfolioImage1Heading}
            subtitle={portfolioImage1Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 1 : 2}>
          <GatsbyImage image={portfolioImage2} alt={ portfolioImage2Heading }  />
          <ImageListItemBar
            title={portfolioImage2Heading}
            subtitle={portfolioImage2Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1}rows={matches? 1 : 2}>
          <GatsbyImage image={portfolioImage3} alt={ portfolioImage3Heading }  />
          <ImageListItemBar
            title={portfolioImage3Heading}
            subtitle={portfolioImage3Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={2} rows={matches? 1 : 4}>
          <GatsbyImage image={portfolioImage4} alt={ portfolioImage4Heading }  />
          <ImageListItemBar
            title={portfolioImage4Heading}
            subtitle={portfolioImage4Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 1 : 2}>
          <GatsbyImage image={portfolioImage5} alt={ portfolioImage5Heading }  />
          <ImageListItemBar
            title={portfolioImage5Heading}
            subtitle={portfolioImage5Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 1 : 2}>
          <GatsbyImage image={portfolioImage6} alt={ portfolioImage6Heading }  />
          <ImageListItemBar
            title={portfolioImage6Heading}
            subtitle={portfolioImage6Subtitle}
          />
        </ImageListItem>
      </ImageList>
    </div>
  )
}

export default PortfolioSection
