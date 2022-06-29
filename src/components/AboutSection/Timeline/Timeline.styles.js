import { makeStyles } from '@material-ui/core'

 export const useTimelineStyles = makeStyles(theme => ({
  timelineItem: {
    color: theme.palette.primary.main, 
    fontSize: 30
  },
  timelineContent: {
    fontSize: '25px !important', 
    padding: '10px 16px 0px 16px !important',
    color: theme.palette.primary.white, 

    ['@media (max-width:720px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '16px !important', 
    }
  }
}))
