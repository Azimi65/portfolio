import {Box,Avatar,Typography,Hidden} from '@mui/material';
const SidebarHeader=()=>{
    return(
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',pt:2}}> 
                <Hidden mdDown>
                    <Avatar src="./images/avatar.jpg" alt="profile image" variant="rounded" sx={{ width: 160, height: 160 }}>AM</Avatar>
                </Hidden>
                    
                <Typography variant="h6" color={"whitesmoke"} sx={{mt:2}}>اکرم میرعظیمی</Typography>
                <Typography variant="caption" color={"whitesmoke"}>برنامه نویس فرانت اند</Typography>
            </Box> 
    )
}
export default SidebarHeader;