import { Button } from '@mui/material'
import React from 'react'
import { useContactFormStyles } from './ContactForm.styled'
import emailjs from '@emailjs/browser'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack';

import './ContactForm.css'
import { ContactInput } from './ContactInput'

const validationSchema = yup.object({
      from_name: yup
         .string('Podaj imię i nazwisko')
         .min('3', 'Imię i nazwisko musi mieć przynajmniej 3 znaki')
         .required('To pole jest wymagane'),
      from_email: yup
         .string('Podaj swój adres e-mail')
         .email('Podaj poprawny adres email')
         .required('To pole jest wymagane'),
      from_topic: yup
         .string('Podaj temat wiadomości')
         .required('To pole jest wymagane'),
      message: yup
         .string('Podaj treść wiadomości')
         .min(5, 'Treść wiadomości musi mieć przynajmniej 10 znaków')
         .required('To pole jest wymagane'),
 });
 

const ContactForm = () => {
   const { enqueueSnackbar } = useSnackbar();
   const { button, formWrapper } = useContactFormStyles()
   const SERVICE_ID = process.env.GATSBY_EMAILJS_SERVICE_ID
   const TEMPLATE_ID = process.env.GATSBY_EMAILJS_TEMPLATE_ID
   const USER_ID = process.env.GATSBY_EMAILJS_USER_ID

   const sendEmail = (values) => {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
      .then(() => {
         enqueueSnackbar('Wiadomość została wysłana pomyślnie', { variant: 'success' })
      }, () => {
         enqueueSnackbar('Wystąpił błąd podczas wysyłania wiadomości, spróbuj jeszcze raz', { variant: 'error' } )
      });
   }

   const formik = useFormik({
      initialValues: {
         from_name: '',
         from_email: '',
         from_topic: '',
         message: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
         sendEmail(values)
         actions.resetForm()
      },
    })

   return(
     <section className='contact-form-wrapper'>
         <h1 className='contact-form-heading'>
             Pozostańmy w kontakcie!
         </h1>
         <form className={formWrapper} onSubmit={formik.handleSubmit}>
            <ContactInput
               name='from_name'
               label='Imię i nazwisko'
               placeholder='Imię i nazwisko'
               value={formik.values.from_name}
               onChange={formik.handleChange}
               error={formik.touched.from_name && Boolean(formik.errors.from_name)}
               helperText={formik.touched.from_name && formik.errors.from_name}
            />
            <ContactInput
               name='from_email'
               label='E-mail'
               placeholder='E-mail'
               value={formik.values.from_email}
               onChange={formik.handleChange}
               error={formik.touched.from_email && Boolean(formik.errors.from_email)}
               helperText={formik.touched.from_email && formik.errors.from_email}
            />
            <ContactInput
               name='from_topic'
               label='Temat'
               placeholder='Temat'
               value={formik.values.from_topic}
               onChange={formik.handleChange}
               error={formik.touched.from_topic && Boolean(formik.errors.from_topic)}
               helperText={formik.touched.from_topic && formik.errors.from_topic}
            />
             <ContactInput
               name='message'
               label='Treść'
               placeholder='Treść wiadomości'
               multiline
               rows={5}
               value={formik.values.message}
               onChange={formik.handleChange}
               error={formik.touched.message && Boolean(formik.errors.message)}
               helperText={formik.touched.message && formik.errors.message}
            />
            <Button variant='outlined' className={button} type='submit' >
               Wyślij
            </Button>
         </form>
     </section>
   )
}

export default ContactForm
