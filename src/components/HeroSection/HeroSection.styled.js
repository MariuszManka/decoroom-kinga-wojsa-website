import { makeStyles } from '@material-ui/core'

export const useHeroSectionStyles = makeStyles(({ palette }) => ({
   heroSectionWrapper: {
      gridArea: 'hero-image',
      position: 'relative',
   },
   heroSectionImage: {
      height: '100%',
   },
   heroSectionHeadingWrapper: {
      position: 'absolute',
      left: '10%',
      top: '40%',
      transform: 'translateY(-50%)',
      color: palette.primary.white,
      whiteSpace: 'pre-line',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderLeft: `5px solid ${palette.primary.lightenGold}`,
      paddingLeft: 10, //Zmienić aby oddalić pionowe kreski w nagłówku względem siebie
   },
   heroSectionHeadingText: {
      paddingLeft: 20, //Zmienić aby oddalić pionowe kreski w nagłówku od tekstu
      fontWeight: 500,
      letterSpacing: 1,
      borderLeft: `5px solid ${palette.primary.lightenGold}`,
   }
}))
