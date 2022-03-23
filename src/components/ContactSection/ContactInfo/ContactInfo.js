import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AccountBalance, AlternateEmail, Business, PinDrop, CommentIcon, ContentCopy } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import './ContactInfo.css'
import {  } from 'gatsby-theme-material-ui'

const ContactInfoListItem = ({ primaryText, secondaryText, icon }) => {

   return (
      <ListItem >
         <ListItemIcon>
            {icon}
         </ListItemIcon>
         <ListItemText
            classes={{ 
               secondary: 'contact-info-text-secondary', 
               primary: 'contact-info-text-primary',
               root: 'contact-info-text-root ',
            }} 
            primary={primaryText}
            secondary={secondaryText}
         />
      </ListItem>
   )
}

const ContactInfo = () => {

   const { datoCmsContact } = useStaticQuery(graphql`
       query ContactInfo {
         datoCmsContact {
            address
            bankAccount
            eMail
            nip
          }
       }`
   )

   return(
     <List>
         <ContactInfoListItem 
            primaryText={'E-mail: '}
            secondaryText={datoCmsContact.eMail} 
            icon={<AlternateEmail className='contact-info-icon-styles' />}
         />
         <ContactInfoListItem 
            primaryText={'Adres: '}
            secondaryText={datoCmsContact.address} 
            icon={<PinDrop className='contact-info-icon-styles' />}
         />
         <ContactInfoListItem 
            primaryText={'NIP: '}
            secondaryText={datoCmsContact.nip} 
            icon={<Business className='contact-info-icon-styles' />}
         />
         <ContactInfoListItem 
            primaryText={'Numer konta bankowego: '}
            secondaryText={datoCmsContact.bankAccount}
            icon={<AccountBalance className='contact-info-icon-styles' />}
         />
     </List>
   )
}

export default ContactInfo
