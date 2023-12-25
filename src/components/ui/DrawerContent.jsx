import { HomeRounded,Face4Rounded, TextSnippetRounded,WorkRounded,ContactlessRounded, CopyrightRounded} from '@mui/icons-material';
import { Typography,Avatar ,Box,Divider,Hidden,Tabs,Tab} from "@mui/material";
import {grey,red} from '@mui/material/colors'
const DrawerContent=({value,handleChange,setDrawerOpen})=>{
    const tabProps=(index)=>{
        return{
            id:`sidebar-tab-${index}`,
          "aria-controls":`tabpanel-${index}`,
        }
      }
    return(
        <>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',pt:2}}> 
                <Hidden mdDown>
                    <Avatar src="./images/avatar.jpg" alt="profile image" variant="rounded" sx={{ width: 160, height: 160 }}>AM</Avatar>
                </Hidden>
                    
                <Typography variant="h6" color={"whitesmoke"} sx={{mt:2}}>اکرم میرعظیمی</Typography>
                <Typography variant="caption" color={"whitesmoke"}>برنامه نویس فرانت اند</Typography>
            </Box> 
        <Divider variant="middle" color={red[500]} sx={{mt:2}}/>
        <Box sx={{width:1}}>
            <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile  value={value} onChange={handleChange}>

                <Tab  label="صفحه اصلی" onClick={()=>{setDrawerOpen(false)}} icon={<HomeRounded fontSize="small"/>} iconPosition="start" {...tabProps(0)} sx={{backgroundColor:grey[800],minHeight:50,m:0.5,borderRadius:2,m:1}}>

                </Tab>
                <Tab  label="درباره من" onClick={()=>{setDrawerOpen(false)}} icon={<Face4Rounded fontSize="small"/>} iconPosition="start" {...tabProps(1)}sx={{backgroundColor:grey[800],minHeight:50,m:0.5,borderRadius:2,m:1}}>

                </Tab>
                <Tab  label="رزومه من" onClick={()=>{setDrawerOpen(false)}} icon={<TextSnippetRounded fontSize="small"/>} iconPosition="start" {...tabProps(2)}sx={{backgroundColor:grey[800],minHeight:50,m:0.5,borderRadius:2,m:1}}>

                </Tab>
                <Tab  label="نمونه کارها" onClick={()=>{setDrawerOpen(false)}} icon={<WorkRounded fontSize="small"/>} iconPosition="start" {...tabProps(3)}sx={{backgroundColor:grey[800],minHeight:50,m:0.5,borderRadius:2,m:1}}>

                </Tab>
                <Tab  label="ارتباط با من" onClick={()=>{setDrawerOpen(false)}} icon={<ContactlessRounded fontSize="small"/>} iconPosition="start" {...tabProps(4)} sx={{backgroundColor:grey[800],minHeight:50,m:0.5,borderRadius:2,m:1}}>

                </Tab>
        </Tabs>
        </Box>
        <Divider variant="middle"/> 
        <Box sx={{display:'flex',justifyContent:'end',flexDirection:'column',alignItems:'center',height:"100"}}>
            <Typography color={"whitesmoke"} variant="caption">طراحی شده توسط من</Typography>
            <Typography color={"whitesmoke"} variant="caption">
                کپی رایت 1402 
                <CopyrightRounded fontSize="small" sx={{verticalAlign:'middle'}}/>
            </Typography>
        </Box>  
         </>
    )
}
export default DrawerContent;