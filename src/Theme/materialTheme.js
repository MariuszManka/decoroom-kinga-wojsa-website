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
		 main: '#B3A66C',
		 white: '#ededed',
		 greyLighten: '#222222',
		 greyDarken: '#1B1B1B',
		 darkenGold: '#B3A66C',
		 lightenGold: '#C3B473',
	  },
	},
 });

 materialTheme = responsiveFontSizes(materialTheme)

 export { materialTheme }