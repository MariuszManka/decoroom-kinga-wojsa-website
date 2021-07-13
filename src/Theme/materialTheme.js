import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let materialTheme = createTheme({
	typography: {
		fontSize: 14,
		fontFamily: [
			'Roboto',
			'Montserrat',
			'sans-serif',
		].join(','),
	},
	palette: {
	  primary: {
		 main: '#f2c01b',
		 overlay: 'rgba(0,0,0,0.65)'
	  },
	},
 });

 materialTheme = responsiveFontSizes(materialTheme)

 export { materialTheme }