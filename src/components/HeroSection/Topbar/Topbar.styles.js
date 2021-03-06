import { makeStyles } from '@material-ui/core'

export const useTopBarStyles = makeStyles(({ palette }) => ({
   topBarLink: {
     color: palette.primary.main,
     alignSelf: 'center',
     whiteSpace: 'nowrap'
   },
   topBarWrapper: {
     position: 'absolute',
     top: 0,
     left: 0,
     zIndex: 999,
     width: '100%',
     height: 60,
     backgroundColor: '#101211',
     display: 'flex',
     flexWrap: 'nowrap',
     justifyContent: 'flex-end',
   },
   topBarTabsFlexContainer: {
      height: '100%',
   },
   topBarLogo: {
      alignSelf: 'center',
      position: 'absolute !important',
      top: 30,
      left: 30,
   }
}))
