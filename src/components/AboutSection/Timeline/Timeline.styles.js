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
  }
}))
