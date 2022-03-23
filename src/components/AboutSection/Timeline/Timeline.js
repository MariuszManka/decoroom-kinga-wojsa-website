import React from 'react';
import { 
   Timeline, 
   TimelineItem, 
   TimelineSeparator, 
   TimelineConnector, 
   TimelineContent, 
} from '@mui/lab'
// import { CheckCircleOutlineIcon, CachedIcon, ErrorIcon, PauseCircleFilledIcon } from '@material-ui/icons'
import { useTimelineStyles } from './Timeline.styles'
import {Paper, Typography} from '@material-ui/core'
import { StarBorderOutlined, Straighten, Bed, BackupTable, FavoriteBorder, PostAddOutlined  } from '@mui/icons-material';


const ResponsiveTimeline = () => {
  
  const classes = useTimelineStyles()
  const iconSize = 60
  const connectorSize = 45
  return (
    <Timeline  position="alternate">
      <TimelineItem className={classes.timelineItem} >
        <TimelineSeparator>
          <PostAddOutlined sx={{fontSize: iconSize}} />
          <TimelineConnector style={{height: connectorSize}} />
        </TimelineSeparator>
        <TimelineContent classes={{root: classes.timelineContent}} >
            Kosztorys i dokumentacja
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.timelineItem}>
        <TimelineSeparator>
         <StarBorderOutlined sx={{fontSize: iconSize}} />
          <TimelineConnector style={{height: connectorSize}} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent} >
            Wizualizacja pomieszczeń
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.timelineItem}>
        <TimelineSeparator>
          <Straighten sx={{fontSize: iconSize}} />
          <TimelineConnector style={{height: connectorSize}} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
            Propozycje w postaci moodboardów
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.timelineItem}>
        <TimelineSeparator>
          <Bed sx={{fontSize: iconSize}}  />
          <TimelineConnector style={{height: connectorSize}} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent} >
            Układ funkcjonalny
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.timelineItem}>
        <TimelineSeparator>
          <BackupTable sx={{fontSize: iconSize}} />
          <TimelineConnector style={{height: connectorSize}} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent} >
            Inwentaryzacja
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.timelineItem}>
        <TimelineSeparator>
        <FavoriteBorder sx={{fontSize: iconSize}} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent} >
            Rozmowa o Twoim wymarzonym wnętrzu
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default ResponsiveTimeline