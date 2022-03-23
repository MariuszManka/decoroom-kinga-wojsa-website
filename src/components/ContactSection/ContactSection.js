import React from 'react';
import ContactForm from './ContactForm/ContactForm'
import './Contact.css' 
import ContactInfo from './ContactInfo/ContactInfo'

const ContactSection = ({ sectionID }) => {

return(
  <div id={sectionID} className='contact-section-wrapper'>
    <ContactInfo />
    <ContactForm />
  </div>
)}

export default ContactSection
