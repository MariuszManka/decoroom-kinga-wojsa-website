import { makeStyles } from '@material-ui/core'

export const useAboutSectionStyles = makeStyles(theme => ({
   aboutSectionImage: {
      height: '100%',
   },
   aboutSectionHeading: {
     color: theme.palette.primary.darkenGold,
     fontWeight: 400,
     marginBottom: 20,
  },
  aboutSectionDescriptionWrapper: {
     backgroundColor: theme.palette.primary.lightenGrey,
     color: theme.palette.primary.darkenGold, 
     fontFamily: theme.typography.fontFamily,
     padding: 30
  }
}))
