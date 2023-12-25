import Grid from "@mui/material/Unstable_Grid2";
import{grey,red} from '@mui/material/colors';
import DrawerContent from './ui/DrawerContent';
import {Drawer,Fab,Hidden}  from "@mui/material";
import { useState } from "react";
import { MenuRounded } from "@mui/icons-material";
const Sidebar = ({value,handleChange})=>{
   const[drawerOPen,setDrawerOpen]=useState(false) 
    return(
        
            <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={{backgroundColor:grey[900],display:'flex',gap:1,alignItems:'center',flexDirection:'column',paddingBottom:3}}>
                {/* <Hidden mdUp> */}
                    <Fab sx={{backgroundColor:red[500],marginLeft:10,mt:2,display:{
                        xs:'block',
                        sm:'block',
                        md:'none',
                        lg:'none',
                        xl:'none'
                    }}} onClick={()=>{setDrawerOpen(true)}} aria-label="sidebar">
                    <MenuRounded/>
                    </Fab>
                {/* </Hidden> */}
                
            {/* Drawer */}
                <DrawerContent value={value} handleChange={handleChange}/>
                <Drawer open={drawerOPen} variant="temporary" onClose={()=>{setDrawerOpen(false)}} sx={{display:{
                    lg:"none",
                    xl:"none",
                    xs:"block",
                    sm:"block",
                    md:"none"
                }}}>
                    <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen}/>
                </Drawer>
            </Grid>
       
    )
}
export default Sidebar;