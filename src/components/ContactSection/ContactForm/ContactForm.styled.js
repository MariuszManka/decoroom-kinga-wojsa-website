
import { makeStyles } from '@material-ui/core/styles'

export const useContactFormStyles = makeStyles(({ palette }) => ({

  cssLabel: { //Labelka inputu
    color : 'var(--main) !important',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': { //Input przy focusie
      borderColor: 'var(--main) !important',
    },
    color: '#fff !important',
  },

  cssFocused: {},

  notchedOutline: { //Input bez focusa
    borderWidth: '1px',
    borderColor: 'var(--main) !important',
  },

  button: {
       color:'var(--main) !important',
       borderColor: 'var(--main) !important',
       margin: '15px 0 0 0 !important', 
       width: '25%'
  },

  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    rowGap: 24,
    width: '100%'
  } 

}))



// export const useTextFieldStyles = makeStyles(({ palette }) => ({
//    root: {
//       width: '100%',
//       '& [class*="MuiFormLabel-root"][class*="MuiInputLabel-root"]': {
//          whiteSpace: 'nowrap',
//       },
//       '& [class*="MuiOutlinedInput-root"]': {
//          '& fieldset': {
//             borderColor: '#1e272e',
            
//             '& legend': {
//                fontSize: '0.85em !important',
//             },
//          },
//          '& input[type=number]': {
//             '-moz-appearance': 'textfield',
//          },
//       },
//       '& [class*="MuiOutlinedInput-root"][class*="Mui-error"]': {
//          '& fieldset': {
//             borderRadius: props => props.hasLabel === false ? 0 : '4px',//Border dla nieaktywnej kontrolki
//          },
//          color: palette.primary.error, //Kolor ikonki dla błędu
//       },
//       '&  [class*="MuiOutlinedInput-root"][class*="Mui-disabled"]': {
//          background: '#f7f7f7',
//          '& fieldset': {
//             borderRadius: props => props.hasLabel === false ? 0 : '4px',//Border dla nieaktywnej kontrolki
//          },
//       },
//       '& [class*="MuiInputBase-root"][class*="Mui-disabled"]': {
//          background: '#f7f7f7',
//          color: 'rgba(0, 0, 0, 0.4)',//Kolor tekstu nieaktywnej kontrolki
//       },
//       '& [class*="MuiInputLabel-root"][class*="MuiFormLabel-root"][class*="Mui-disabled"]': {
//          color: 'rgba(0, 0, 0, 0.4)',//Kolor labelki nieaktywnej kontrolki
//          top: '1px'
//       },
//       '& [class*="MuiInputLabel-root"][class*="MuiFormLabel-root"]': {
//          color: 'rgba(0, 0, 0, 0.9)',
//          top: '1px',
//          fontSize: '18px'
//       },
//       '& [class*="MuiFormLabel-root"]': {
//          width: '100%',
//       },
//       '& [class*="MuiInputLabel-root"][class*="MuiFormLabel-root"][class*="Mui-error"]': {
//          color: palette.primary.error,
//          top: '1px'
//       },
//       '& [class*="MuiInputLabel-root"][class*="MuiFormLabel-root"][class*="Mui-focused"]': {
//          color: palette.primary.mainDarken800,
//          top: '1px',
//       },
//       '& [class*="MuiFormHelperText-root"]': {
//          position: 'absolute',
//          bottom: '-20px',
//          left: '0px',
//          whiteSpace: 'nowrap'
//       },

//       '& [class*="MuiFormHelperText-root"][class*="Mui-error"]': {//Style dla tesktu z błędem pojawiającego się pod kontrolką 
//          color: palette.primary.error
//       },
//       '& [class*="MuiInputLabel-root"][class*="Mui-error"]': {//Style dla labelki kontrolki z błędem
//          fontWeight: 500, 
//       },
//       '& [class*="MuiInputLabel-root"][class*="Mui-disabled"][class*="Mui-error"]': {//Style dla labelki kontrolki nieaktywnej z błędem
//          fontWeight: 400, 
//       },
//       '& [class*="MuiInputBase-root"][class*="Mui-disabled"][class*="Mui-error"]': {//Style dla nieaktywnej kontrolki z błędem
//          color: palette.primary.error,
//       },
//       '& [class*="MuiButtonBase-root"]': {//Style dla ikonek w kontrolce
//          color: props => props.error === true &&  palette.primary.error,
//       },
//       '& [class*="MuiOutlinedInput-input"]': {//Style dla ikonek w kontrolce
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//       },
//       '& input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-calendar-picker-indicator': {
//          display: 'none', 
//          '-webkit-appearance': 'none', 
//       }
//    },
// }))