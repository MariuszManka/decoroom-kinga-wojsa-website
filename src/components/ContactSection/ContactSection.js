import React from 'react';
import ContactForm from './ContactForm/ContactForm'
import './Contact.css' 

const ContactSection = ({ sectionID }) => {

return(
  <div id={sectionID} className='contact-section-wrapper'>
    <ContactForm />
  </div>
)}
export default ContactSection
