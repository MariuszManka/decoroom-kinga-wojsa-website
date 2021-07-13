import { Grid } from '@material-ui/core'
import { withStyles, } from '@material-ui/core/styles'

export const StyledHeader =  withStyles((theme) => ({
   root: {  
      padding: theme.spacing(0,6),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: '#2F2E41'
   }
}))(Grid)