import {Fab} from '@mui/material';
import{red} from '@mui/material/colors';
import { MenuRounded,ModeNightRounded,WbSunnyRounded } from "@mui/icons-material";
import Maincontext from '../../context';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
const ThemeActionButton=()=>{
    const {HandleThemeChange}=useContext(Maincontext)
    const theme =useTheme()
    return(
      
       <> 
       {/* <Hidden mdUp> */}
                    <Fab variant="extended"  size="small" color="primary" sx={{backgroundColor:"secondary",mt:2,mb:2,display:{
                        
                    }}} onClick={HandleThemeChange} aria-label="sidebar">
                        {theme.palette.mode==='dark'?<ModeNightRounded sx={{width:15,height:15}}/>:<WbSunnyRounded  sx={{width:15,height:15}}/>}
                        {theme.palette.mode==='dark'?'تم تیره':'تم روشن'}
                    </Fab>
                {/* </Hidden> */}
       </>
                   
      
    )
}
export default ThemeActionButton;