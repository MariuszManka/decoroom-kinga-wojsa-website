import { makeStyles } from '@material-ui/core'

export const useHeroSectionStyles = makeStyles(({ palette }) => ({
   heroSectionWrapper: {
      gridArea: 'hero-image',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundImage: 'url("https://www.datocms-assets.com/50813/1637104183-tlo-min.png")',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPositionX: '50%',
      width: '100%',

      ['@media (max-width:720px)']: { // eslint-disable-line no-useless-computed-key
         backgroundPositionX: '75%',
      }
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
      
      ['@media (max-width:720px)']: { // eslint-disable-line no-useless-computed-key
         display: 'none',
      }
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

      ['@media (max-width:720px)']: { // eslint-disable-line no-useless-computed-key
         top: '25px', 
         left: '50%',
         transform: 'translateX(-50%)',
         width: '280px',
      }
   }
}))
