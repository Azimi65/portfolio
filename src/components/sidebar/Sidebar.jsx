import SidebarContent from './SidebarContent';
import {Box}  from "@mui/material";
import DrawerActionButton from './DrawerActionButton';
import SidebarDrawer from './SidebarDrawer';
const Sidebar = ()=>{
    return(
        <Box sx={{width:1}}>
            <SidebarContent />
            <SidebarDrawer/>
        </Box>
                
    )
}
export default Sidebar;