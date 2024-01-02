import{Chip,Divider, Typography,Slide} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot} from '@mui/lab';
import { devEdu, devInfo } from '../constant/devInfo';
import {School,BusinessCenterRounded} from '@mui/icons-material';
import {useState,useEffect} from 'react';
const Resume=()=>{
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
                    <Chip label="رزومه من" color="error"/>
                </Divider>
            </Slide>
            
            <Grid container>
                <Grid xs={12} lg={6}>
                    <Slide direction='down' in={loading}>
                        <Divider sx={{mt:2,"&::before , &::after":{borderColor:'warning.main'}}}>
                            <Chip label="تحصیلات من" color="warning"/>
                        </Divider>
                    </Slide>
                    <Timeline position="alternate">
                        {devEdu.map((item,index)=>(
                            <Slide direction='up' in={loading} style={{transitionDelay: loading ? `${index+5}99ms`:"0ms"}}>
                                <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot color='error'>
                                    <School/>
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='caption'>{item.year}</Typography>
                                    <Typography variant='caption'>{item.cert}</Typography>
                                    <Typography variant='caption'>{item.field}</Typography>
                                    <Typography variant='caption'>{item.uni}</Typography>
                                </TimelineContent>
                                </TimelineItem>
                            </Slide>
                        ))}
                    </Timeline>
                </Grid>
                <Grid xs={12} lg={6}>
                    <Slide direction='down' in={loading}style={{transitionDelay: loading ? "200ms":"0ms"}}>
                        <Divider sx={{mt:2,"&::before , &::after":{borderColor:'info.main'}}}>
                            <Chip label="تجربیات من" color="success"/>
                        </Divider>
                    </Slide>
                    <Timeline position="alternate">
                        {devEdu.map((item,index)=>(
                            <Slide direction='up' in={loading} style={{transitionDelay: loading ? `${index+5}99ms`:"0ms"}}>
                                <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot color='warning'>
                                    <BusinessCenterRounded/>
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='caption'>{item.year}</Typography>
                                    <Typography variant='caption'>{item.cert}</Typography>
                                    <Typography variant='caption'>{item.field}</Typography>
                                    <Typography variant='caption'>{item.uni}</Typography>
                                </TimelineContent>
                                </TimelineItem>
                            </Slide>
                        ))}
                    </Timeline>
                </Grid>
            </Grid> 
        </>
       
    )
}
export default Resume;