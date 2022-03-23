
import React from 'react'
import { TextField } from '@mui/material'
import { useContactFormStyles } from './ContactForm.styled'



export const ContactInput = ({ name, label, placeholder, value, onChange, error, helperText, ...other }) => {
   const { cssLabel, cssOutlinedInput, cssFocused, notchedOutline } = useContactFormStyles()

   return (
     <TextField
        fullWidth
        variant='outlined'
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        InputProps={{
           classes: {
             root: cssOutlinedInput,
             focused: cssFocused,
             notchedOutline: notchedOutline,
           },
         }}
         InputLabelProps={{
           classes: {
             root: cssLabel,
             focused: cssFocused,
           },
           shrink: true,
         }}
         {...other}
     />
   )
}