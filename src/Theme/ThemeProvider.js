import React from 'react';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import { materialTheme } from './materialTheme'

const ThemeProvider = ({children}) => (
   <MaterialThemeProvider theme={materialTheme}>
      {children}
   </MaterialThemeProvider>
) 

export default ThemeProvider