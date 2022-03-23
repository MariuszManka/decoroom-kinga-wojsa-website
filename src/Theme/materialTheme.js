import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let materialTheme = createTheme({
	palette: {
	  primary: {
		 main: '#EEC845 ',
		 white: '#ededed',
		 lightenGrey: '#1B1B1B',
		 darkenGrey: '#0F1211',
		 darkenGold: '#B3A66C',
		 lightenGold: '#C3B473',
	  },
	  secondary: {
		 main: '#EEC845',
	  }
	},
	typography: {
		fontSize: 14,
		fontFamily: [
			'Roboto',
			'Montserrat',
			'sans-serif',
		].join(','),
	},
 });

 materialTheme = responsiveFontSizes(materialTheme)

 export { materialTheme }