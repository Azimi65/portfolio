import { createTheme } from "@mui/material";
import {blue ,red} from '@mui/material/colors'
export const darkTheme = createTheme({
    direction: 'rtl',
    palette:{
      mode:"dark",
        primary:{
            main:"#8be9fd"
        },
        grey:{
          
        }
    },
    typography:{
      fontFamily:"Vazir,Roboto",
      fontSize:25,
      button: {
        fontStyle: 'italic',
        fontSize:12,
      },
      subtitle1:{
        fontSize:29
      }
    } 
  
  });
  export const lightTheme = createTheme({
    direction: 'rtl',
    palette:{
      mode:"light",
        primary:{
            main:"#f44336"
        },
        grey:{
          
        }
    },
    typography:{
      fontFamily:"Vazir,Roboto",
      fontSize:25,
      button: {
        fontStyle: 'italic',
        fontSize:12,
      },
      subtitle1:{
        fontSize:29
      }
    } 
  
  });
