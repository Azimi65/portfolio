import { Typography,Box } from "@mui/material";
import {CopyrightRounded} from "@mui/icons-material"
const SidebarFooter=()=>{
    return(
        <Box sx={{display:'flex',justifyContent:'end',flexDirection:'column',alignItems:'center',height:"100",marginTop:10}}>
            <Typography color="text.primary" variant="caption">طراحی شده توسط من</Typography>
            <Typography color="text.primary" variant="caption">
                کپی رایت 1402 
                <CopyrightRounded fontSize="small" sx={{verticalAlign:'middle'}}/>
            </Typography>
        </Box>  
    )
}
export default SidebarFooter;