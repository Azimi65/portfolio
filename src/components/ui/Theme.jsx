import { createTheme } from "@mui/material";
import {blue ,red} from '@mui/material/colors'
const theme = createTheme({
    direction: 'rtl',
    palette:{
      mode:"dark",
        primary:{
            main:"#00a152"
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
    },
    components:{
MuiButton: {
        variants: [
          {
            props: { variant: 'dashed' },
            style: {
              textTransform: 'none',
              border: `2px dashed ${blue[500]}`,
            },
          },
          {
            props: { variant: 'dashed', color: 'secondary' },
            style: {
              border: `4px dashed ${red[500]}`,
            },
          },
        ],
      },
    }  
  
  });
export default theme;