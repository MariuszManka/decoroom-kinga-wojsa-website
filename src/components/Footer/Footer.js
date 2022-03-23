import { FacebookOutlined, GitHub, LinkedIn } from '@mui/icons-material'
import { Typography, Link  } from '@mui/material'
import React from 'react';
import './Footer.css'

const Footer = ({ sectionID }) => {

  const facebookLink = 'https://www.facebook.com/profile.php?id=100066733230651'
  const myFacebook = 'https://www.facebook.com/profile.php?id=100008225013845'
  const linkedinLink = 'https://www.linkedin.com/in/mariusz-ma%C5%84ka-b38009143/'
  const githubLink = 'https://github.com/MariuszManka'

  return (
      <footer id={sectionID} className='footer'>
        <Typography variant='body2'>
         Stronę wykonał oraz administruje: 
         <Link className='author' href={myFacebook} target='_blank'> Mariusz Mańka. </Link> 
         Copyright © 2022. All rights reserved.
        </Typography>
        <Link href={facebookLink} target='_blank'>
          <FacebookOutlined className='footer-icons'/>
        </Link>
        <Link href={githubLink} target='_blank'>
          <GitHub className='footer-icons'/>
        </Link>
        <Link href={linkedinLink} target='_blank'>
          <LinkedIn className='footer-icons'/>
        </Link>
      </footer>
  )
}
export default Footer
