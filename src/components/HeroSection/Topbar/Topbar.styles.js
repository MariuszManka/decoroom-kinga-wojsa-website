import { makeStyles } from '@material-ui/core'

export const useTopBarStyles = makeStyles(({ palette }) => ({
   topBarLink: {
     color: palette.primary.main,
     alignSelf: 'center',
     whiteSpace: 'nowrap',
   },
   topBarWrapper: {
     position: 'absolute',
     top: 0,
     left: 0,
     zIndex: 999,
     width: '100%',
     minWidth: '320px',
     height: 60,
     backgroundColor: '#101211',
     display: 'flex',
     flexWrap: 'nowrap',
     justifyContent: 'flex-end',
     
     ['@media (max-width:720px)']: { // eslint-disable-line no-useless-computed-key
      height: 220,
      alignItems: 'flex-end',
      justifyContent: 'center',
     }
   },
   topBarTabsFlexContainer: {
      height: '100%',
   },
   topBarLogo: {
      alignSelf: 'center',
      position: 'absolute !important',
      top: 30,
      left: 30,
   },
   topBarItem: {
      fontSize: 20,
      whiteSpace: 'nowrap',
      marginBottom: 10,
      marginTop: 10,

      ['@media (max-width:720px)']: { // eslint-disable-line no-useless-computed-key
         fontSize: 21,
      }
   }
}))
