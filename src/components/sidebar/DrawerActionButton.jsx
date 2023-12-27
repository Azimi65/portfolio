import {Fab} from '@mui/material';
import{red} from '@mui/material/colors';
import { MenuRounded } from "@mui/icons-material";
import Maincontext from '../../context';
import { useContext } from 'react';
const DrawerActionButton=()=>{
    const {setDrawerOpen}=useContext(Maincontext)
    return(
      
       <> 
       {/* <Hidden mdUp> */}
                    <Fab sx={{backgroundColor:red[500],mt:2,position:'absolute',display:{
                        xs:'block',
                        sm:'block',
                        md:'none',
                        lg:'none',
                        xl:'none'
                    }}} onClick={()=>{setDrawerOpen(true)}} aria-label="sidebar">
                    <MenuRounded/>
                    </Fab>
                {/* </Hidden> */}
       </>
                   
      
    )
}
export default DrawerActionButton;