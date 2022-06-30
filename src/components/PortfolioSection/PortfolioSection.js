import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { usePortfolioSectionStyles } from './PortfolioSection.styled'
import { useMediaQuery } from '@mui/material'
import ImageGallery from 'react-image-gallery';
import { isArray, isEmpty } from 'lodash'
import './PortfolioSection.css'

const PortfolioSection = ({ sectionID }) => {
  const breakPoint = 740
  const matches = useMediaQuery(`(max-width: ${breakPoint}px)`);

  const { datoCmsPortfolioNew } = useStaticQuery(graphql`
  query PortfolioImage {
    datoCmsPortfolioNew {
      portfolioImagesGallery1 {
        url(imgixParams: {fit: "fill"})
      }
      portfolioImagesGallery2 {
        url(imgixParams: {fit: "fill"})
      }
      portfolioImagesGallery3 {
        url(imgixParams: {fit: "fill"})
      }
      portfolioImagesGallery4 {
        url(imgixParams: {fit: "fill"})
      }
      portfolioImagesGallery5 {
        url(imgixParams: {fit: "fill"})
      }
      portfolioImagesGallery6 {
        url(imgixParams: {fit: "fill"})
      }
      portfolioImagesGalleryDescription1
      portfolioImagesGalleryDescription2
      portfolioImagesGalleryDescription3
      portfolioImagesGalleryDescription4
      portfolioImagesGalleryDescription5
      portfolioImagesGalleryDescription6
      portfolioImagesGalleryTitle1
      portfolioImagesGalleryTitle2
      portfolioImagesGalleryTitle3
      portfolioImagesGalleryTitle6
      portfolioImagesGalleryTitle5
      portfolioImagesGalleryTitle4
    }
  }`
  )
  const { 
    portfolioImagesGallery1, portfolioImagesGalleryTitle1, portfolioImagesGalleryDescription1,
    portfolioImagesGallery2, portfolioImagesGalleryTitle2, portfolioImagesGalleryDescription2,
    portfolioImagesGallery3, portfolioImagesGalleryTitle3, portfolioImagesGalleryDescription3,
    portfolioImagesGallery4, portfolioImagesGalleryTitle4, portfolioImagesGalleryDescription4,
    portfolioImagesGallery5, portfolioImagesGalleryTitle5, portfolioImagesGalleryDescription5,
    portfolioImagesGallery6, portfolioImagesGalleryTitle6, portfolioImagesGalleryDescription6,
  } = datoCmsPortfolioNew

  const mapDatoModelToImageGalleryModel = (datoGalleryArray, imagesTitle, imagesDescription) => {
    const imageGalleryModel = []
    if(!isArray(datoGalleryArray) || isEmpty(datoGalleryArray)){
      console.error("Nie udało się pobrać danych do galerii");
      return []
    }
    for (const item of datoGalleryArray) {
      if(item && item.url){
        imageGalleryModel.push({
          original: item.url,
        })
      }
    }
    return imageGalleryModel
  }

  const { root, imageItem } = usePortfolioSectionStyles()

  return(
    <div id={sectionID} style={{padding: '0 15px', backgroundColor: 'var(--darkenGrey)'}}>
      <ImageList className={root} style={{ transform: 'translateZ(0)', maxWidth: 1400,  }} gap={25}>
        <ImageListItem cols={2} rows={matches? 2 : 5} classes={{root: imageItem}} >
          <ImageGallery items={mapDatoModelToImageGalleryModel(portfolioImagesGallery1)} showPlayButton={false} thumbnailLabel ={portfolioImagesGalleryTitle1} />
          <ImageListItemBar
            title={portfolioImagesGalleryTitle1}
            subtitle={portfolioImagesGalleryDescription1}
            position={'top'}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 2 : 3} classes={{root: imageItem}} >
          <ImageGallery items={mapDatoModelToImageGalleryModel(portfolioImagesGallery2)} showThumbnails={false} showPlayButton={false}/>
          <ImageListItemBar
            title={portfolioImagesGalleryTitle2}
            subtitle={portfolioImagesGalleryDescription2}
            position={'top'}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 2 : 3} classes={{root: imageItem}}>
          <ImageGallery items={mapDatoModelToImageGalleryModel(portfolioImagesGallery3)} showThumbnails={false} showPlayButton={false}/>
          <ImageListItemBar
            title={portfolioImagesGalleryTitle3}
            subtitle={portfolioImagesGalleryDescription3}
            position={'top'}
          />
        </ImageListItem>
        <ImageListItem cols={2} rows={matches? 2 : 5} classes={{root: imageItem}}>
          <ImageGallery items={mapDatoModelToImageGalleryModel(portfolioImagesGallery4)} showThumbnails={false} showPlayButton={false}/>
          <ImageListItemBar
            title={portfolioImagesGalleryTitle4}
            subtitle={portfolioImagesGalleryDescription4}
            position={'top'}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 2 : 3} classes={{root: imageItem}}>
          <ImageGallery items={mapDatoModelToImageGalleryModel(portfolioImagesGallery5)} showThumbnails={false} showPlayButton={false}/>
          <ImageListItemBar
            title={portfolioImagesGalleryTitle5}
            subtitle={portfolioImagesGalleryDescription5}
            position={'top'}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 2 : 3} classes={{root: imageItem}}>
          <ImageGallery items={mapDatoModelToImageGalleryModel(portfolioImagesGallery6)} showThumbnails={false} showPlayButton={false}/>
          <ImageListItemBar
            title={portfolioImagesGalleryTitle6}
            subtitle={portfolioImagesGalleryDescription6}
            position={'top'}
          />
        </ImageListItem>
      </ImageList>
    </div>
  )
}

export default PortfolioSection

/**
 * return(
    <div id={sectionID} style={{padding: '0 15px', backgroundColor: 'var(--darkenGrey)'}}>
      <ImageList className={root} style={{ transform: 'translateZ(0)', maxWidth: 1400, margin: 'auto !important' }} gap={15}>
        <ImageListItem cols={2} rows={matches? 1 : 4}>
          <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>;
          <ImageListItemBar
            title={portfolioImage1Heading}
            subtitle={portfolioImage1Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 1 : 2}>
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>;
          <ImageListItemBar
            title={portfolioImage2Heading}
            subtitle={portfolioImage2Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1}rows={matches? 1 : 2}>
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>;
          <ImageListItemBar
            title={portfolioImage3Heading}
            subtitle={portfolioImage3Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={2} rows={matches? 1 : 4}>
          <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>;
          <ImageListItemBar
            title={portfolioImage4Heading}
            subtitle={portfolioImage4Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 1 : 2}>
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>;
          <ImageListItemBar
            title={portfolioImage5Heading}
            subtitle={portfolioImage5Subtitle}
          />
        </ImageListItem>
        <ImageListItem cols={matches? 2 : 1} rows={matches? 1 : 2}>
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>;
          <ImageListItemBar
            title={portfolioImage6Heading}
            subtitle={portfolioImage6Subtitle}
          />
        </ImageListItem>
      </ImageList>
    </div>
  )
 */