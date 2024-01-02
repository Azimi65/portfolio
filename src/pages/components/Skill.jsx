import { Divider,Chip,Box, Typography, LinearProgress,Badge } from '@mui/material';
const Skill = ({icon,color,name,value})=>{
    
    return(
        <>
            <Divider textAlign='left' sx={{"&::before , &::after":{borderColor:`${color}.main`},mt:3}}>
                <Chip label={name} icon={<Box component="img" src={icon} sx={{width:30,height:30}}>

                </Box>} color={color} sx={{color:'black',p:2,width:200,height:40}}/>
            </Divider>
            <Box sx={{display:'flex',alignItems:'center',gap:5}}>
            <Box sx={{width:1,mt:2}}><LinearProgress color={color} variant='determinate' value={Math.round(value)} sx={{height:10,borderRadius:2}}></LinearProgress></Box>

                <Box>
                    <Badge color={color} badgeContent={`${Math.round(value)}%`} variant="standard" sx={{color:'black'}}/>          
                </Box>
            </Box>
        </>
        
    )
}
export default Skill;