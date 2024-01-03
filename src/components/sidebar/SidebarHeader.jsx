import {Box,Avatar,Typography,Hidden, IconButton} from '@mui/material';
import {WhatsApp} from '@mui/icons-material';
import {GitHub,Telegram,Instagram} from '@mui/icons-material';
import ThemeActionButton from './ThemeActionButton'
const SidebarHeader=()=>{
    return(
        <>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',pt:2}}> 
        <ThemeActionButton/>
                <Hidden mdDown>
                    <Avatar src="./images/avatar.jpg" alt="profile image" variant="rounded" sx={{ width: 160, height: 160 }}>AM</Avatar>
                </Hidden>
                    
                <Typography variant="h6" color="primary" sx={{mt:2}}>اکرم عظیمی</Typography>
                <Typography variant="caption" color={"gray"}>برنامه نویس فرانت اند</Typography>
        </Box> 
        <Box component="div" sx={{display:'flex',justifyContent:'center'}}>
            <IconButton>
                <a href='https://www.github.com/Azimi65' target='_blank' rel='noopening noreffering'>
                    <GitHub sx={{color:'red'}}/>
                </a>
            </IconButton>
            <IconButton>
                <a href='https://t.me/@Mirazimy' target='_blank' rel='noopening noreffering'>
                    <Telegram sx={{color:'red'}}/>
                </a>
            </IconButton>
            <IconButton>
                <a href='https://www.instagram.com/a.m.azimy/' target='_blank' rel='noopening noreffering'>
                    <Instagram sx={{color:'red'}}/>
                </a>
            </IconButton>
        </Box>
        </>
        
    )
}
export default SidebarHeader;