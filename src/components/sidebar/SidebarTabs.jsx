import { Box,Tabs,Tab} from "@mui/material";
import {grey,yellow} from '@mui/material/colors';
import MainContext from '../../context';
import { useContext } from 'react';
import { tabsData } from "../data/tabsData.sidebar";
import { useTheme } from "@emotion/react";
const SidebarTabs = ()=>{
    const theme=useTheme()
     const data=tabsData();
      const{pageNumber,handlePageNumber,setDrawerOpen}=useContext(MainContext)
    return(
        <Box>
            <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile  value={pageNumber} onChange={handlePageNumber} 
  >
                {data.map((tab,index)=>(
                    <Tab  label={tab.label}  onClick={()=>{setDrawerOpen(false)}} icon={tab.icon} iconPosition="start" {...tab} sx={{backgroundColor:theme.palette.mode==='dark'?grey[800]:grey[500],minHeight:50,m:0.5,borderRadius:2,m:1}}>
                </Tab>
                ))}
                
                
        </Tabs>
         </Box>
    )

}
export default SidebarTabs;