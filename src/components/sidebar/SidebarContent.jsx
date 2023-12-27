import { Divider} from "@mui/material";
import {red} from '@mui/material/colors';
import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';
import SidebarTabs from './SidebarTabs';


const SidebarContent=()=>{  
    return(
        <>
        <SidebarHeader/>
        <Divider variant="middle" color={red[500]} sx={{mt:2}}/>
        <SidebarTabs/>
        <Divider variant="middle"/> 
        <SidebarFooter/>
         </>
    )
}
export default SidebarContent;