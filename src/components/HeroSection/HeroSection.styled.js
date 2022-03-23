import { makeStyles } from '@material-ui/core'

export const useHeroSectionStyles = makeStyles(({ palette }) => ({
   heroSectionWrapper: {
      gridArea: 'hero-image',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
   },
   heroSectionImage: {
      height: '100%',
   },
   heroSectionHeadingWrapper: {
      color: palette.primary.white,
      borderLeft: `5px solid ${palette.primary.main}`,
   },
   heroSectionHeadingText: {
      paddingLeft: 20, 
      fontWeight: 500,
      letterSpacing: 1,
      borderLeft: `5px solid ${palette.primary.main}`,
      margin: '15px', //Zmienić aby oddalić pionowe kreski w napisie na stronie tytułowej
      whiteSpace: 'nowrap',
   },
   heroSectionLogoWrapper: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'space-between',
      left: '6%',
      top: '45%',
      transform: 'translateY(-50%)',
      gap: 55,
      width: '35%',
      zIndex: 999,
   }
}))
