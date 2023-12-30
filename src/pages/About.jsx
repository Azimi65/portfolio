import {Box,Divider,Chip, Avatar, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const About =() =>{
    return(
        <Box sx={{height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',mt:3}}>
           <grid container>
            <Grid>
                <Divider>
                    <Chip label="من یک برنامه نویس و توسعه دهنده فرانت اند هستم" color='primary' sx={{px:3,py:2}}/>
                </Divider>
            </Grid>
            <Grid   xs={12} sm={12} md={5} lg={5} xl={5} sx={{mx:5,mt:5}}>
                <Avatar src="./images/avatar.jpg" alt="profile image" variant="rounded" sx={{ width: 250, height: 250 }}>AM</Avatar>
            </Grid>
            <Grid   xs={12} sm={12} md={5} lg={5} xl={5} sx={{mx:5,mt:5}}>
                <Typography>نام و نام خانوادگی: یونس قربانی</Typography>
            </Grid>
           </grid>
            
        </Box>
    )
}
export default About;