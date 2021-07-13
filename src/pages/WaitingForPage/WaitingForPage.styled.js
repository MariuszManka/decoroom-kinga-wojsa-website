import { Box, Grid, Typography,  } from '@material-ui/core'
import { withStyles, } from '@material-ui/core/styles'
import image from '../../images/hero.jpg'


export const StyledContainer =  withStyles(() => ({
   root: {
      backgroundImage: `url(${image})`,
      backgroundPosition: '50% 100%',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
   }
}))(Grid)

export const StyledOverlay =  withStyles(({ palette }) => ({
   root: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: palette.primary.overlay,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      color: 'white',
   }
}))(Box)

export const StyledHeader =  withStyles((theme) => ({
   root: {  
      padding: theme.spacing(0,6),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: '#2F2E41'
   }
}))(Grid)