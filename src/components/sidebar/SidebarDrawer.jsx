import SidebarContent from "./SidebarContent";
import { Drawer } from "@mui/material";
import MainContext from '../../context';
import { useContext } from "react";
const SidebarDrawer = ()=>{
    const {setDrawerOpen,drawerOpen}=useContext(MainContext)
    return(
        <Drawer open={drawerOpen} variant="temporary" onClose={()=>{setDrawerOpen(false)}} sx={{display:{
            lg:"none",
            xl:"none",
            xs:"block",
            sm:"block",
            md:"none"
        }}}>
            <SidebarContent/>
        </Drawer>
    )
}
export default SidebarDrawer;