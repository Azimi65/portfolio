import{Chip,Divider, Typography,Slide, Card,Button,CardMedia,CardContent,CardActions} from '@mui/material';
import {useState,useEffect} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import devSamples from '../constant/samples';
import EllipsisText from "react-ellipsis-text";
const Samples=()=>{
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        return ()=>{
            setLoading(false)
        }
    },[])
    return(
        <>
            <Slide direction='down' in={loading}style={{transitionDelay: loading ? "200ms":"0ms"}}>
                <Divider sx={{mt:2,"&::before , &::after":{borderColor:'error.main'}}}>
                    <Chip label="نمونه کارهای من" color="error"/>
                </Divider>
            </Slide>
            <Grid container sx={{mx:5,justifyContent:'center'}}>
                
                {devSamples.map((item,index)=>(
                    <Slide direction='up' in={loading}style={{transitionDelay: loading ? `${index+3}99ms`:"0ms"}}>
                        <Grid item key={index} xs={12} sm={12} md={6} lg={3} sx={{mt:3,mx:5}}>
                            <Card sx={{ maxWidth: 345,backgroundColor:"steelblue" }}>
                                <CardMedia
                                    sx={{ maxHeight: 120 , minHeight:120}}
                                    image={item.image}
                                    title=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div"  sx={{color:'lime'}}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify',color:'whitesmoke'}}>
                                    <EllipsisText text={item.info} length={"70"} />
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:'flex',justifyContent:'end'}}>
                                    <Button size="small" sx={{color:'lime'}}>ادامه مطلب</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Slide>
                ))}
                
            </Grid>
        </>
        
    )
}
export default Samples;