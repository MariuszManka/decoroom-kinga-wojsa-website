import {  Grid, Link, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react';
import heroIcon from '../../images/hero_icon.svg'
import { StyledHeader } from './WaitingForPage.styled'
import { Facebook, Mail, Phone } from '@material-ui/icons'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WaitingForPage = () => {
   const FACEBOOK_LINK = 'https://www.facebook.com/profile.php?id=100066733230651'
   const EMAIL =  'decoroom.aranzacjewnetrz@op.pl'
   const PHONE_NUMBER =  '883 702 238'
     
   const data = useStaticQuery(graphql`
      query WaitingForPageQuery {
      file(name: {eq: "logo"}, childImageSharp: {fixed: {}}) {
         childImageSharp {
            gatsbyImageData(layout: FIXED width:140)
      }
      }
      datoCmsWaitingPage {
        heading
        paragraph
      }
    }
   `)

   const logo = getImage(data.file)

   return (
      <Grid item container xs={12} style={{height: '100vh', overflow:'hidden'}}>
         <Grid item lg={3} style={{margin: 10}}>
            <GatsbyImage image={logo} />
         </Grid>
         <Grid item lg={9}></Grid>
         <StyledHeader item lg={5}>
            <Typography 
               variant="h3"
               style={{fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'uppercase', margin: '30px 0', }}
            >
               {data.datoCmsWaitingPage.heading}
            </Typography>
            <Typography 
               variant="h5"
               style={{fontFamily: 'Montserrat', fontWeight: 400,}}
            >
               {data.datoCmsWaitingPage.paragraph}
            </Typography>
            <Grid
               item
               container
               direction="row"
               justifyContent="space-between"
               alignItems="center"
               style={{marginTop: '45px'}}
            >
               <Link href={FACEBOOK_LINK} target="_blank">
                  <Facebook fontSize="large"/>
               </Link>
               <Link href={`mailto:${EMAIL}`}>
                  <Mail fontSize="large"/>
               </Link>
               <div style={{display: 'flex', alignItems:'center', color: '#DEBA56'}}>
                  <Phone fontSize="large" />
                  <Typography style={{marginLeft: 8}}>
                        {PHONE_NUMBER}
                  </Typography>
               </div>
            </Grid>
         </StyledHeader>
         <Grid item lg={7}>
            <img src={heroIcon} alt="Hero Icon"/>
         </Grid>
      </Grid>
   )
}

export default WaitingForPage