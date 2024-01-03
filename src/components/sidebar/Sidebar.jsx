import SidebarContent from './SidebarContent';
import {Box}  from "@mui/material";
import { useTheme } from '@emotion/react';
import DrawerActionButton from './DrawerActionButton';
import SidebarDrawer from './SidebarDrawer';
import {grey} from '@mui/material/colors'
const Sidebar = ()=>{
    const theme=useTheme()
    return(
        <Box sx={{width:1,backgroundColor:theme.palette.mode==='dark'?grey[900]:grey[200],height:'100vh',overflowY:'scroll'}} >
            <SidebarContent />
            <SidebarDrawer/>
        </Box>
                
    )
}
export default Sidebar;