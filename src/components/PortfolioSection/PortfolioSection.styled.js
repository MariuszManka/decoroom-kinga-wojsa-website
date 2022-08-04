import { makeStyles } from '@material-ui/core'

export const usePortfolioSectionStyles = makeStyles(({ palette }) => ({
   root: {
     margin: 'auto !important',
     transform: 'translateZ(0)', 
     maxWidth: 1400,
   },
   imageItem: {
    '& [class*="MuiImageListItem-item"]': {
      overflow: 'visible !important',
    }
   }
}))

