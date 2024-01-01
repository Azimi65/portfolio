import { devSkills } from '../constant/devSkills';
import {Box,Divider,Chip, Avatar, Typography, Icon} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {CodeRounded,KeyboardArrowLeftRounded,SelfImprovementRounded} from '@mui/icons-material';
import Skill from './components/Skill';
import { useState,useEffect } from 'react';

const About =() =>{
    const{htmlSkill,cssSkill,jsSkill,reactSkill,gitSkill}=devSkills;
    const[html,setHtml]=useState(0);
    const[css,setCss]=useState(0);
    const[js,setJs]=useState(0);
    const[react,setReact]=useState(0);
    const[git,setGit]=useState(0);
 useEffect(()=>{
    const timer=setInterval(()=>{
        setHtml((prevState)=>{
            const diff=Math.random()*10;
            return Math.min(prevState+diff,95)
        }) 
        setCss((prevState)=>{
            const diff=Math.random()*10;
            return Math.min(prevState+diff,75)
        })
        setJs((prevState)=>{
            const diff=Math.random()*10;
            return Math.min(prevState+diff,66)
        })
        setReact((prevState)=>{
            const diff=Math.random()*10;
            return Math.min(prevState+diff,53)
        })
        setGit((prevState)=>{
            const diff=Math.random()*10;
            return Math.min(prevState+diff,50)
        })
    },500)
    return()=>{
      clearInterval(timer)
    }
    },[])
    return(
        <Box sx={{height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',overflowY:'scroll'}}>
           <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mx:5}}>
                    <Divider sx={{"&::before , &::after":{borderColor:'primary.main'}}}>
                        <Chip   icon={<CodeRounded/>} label={<Typography variant='caption'>من یک برنامه نویس و توسعه دهنده فرانت اند هستم</Typography>} color='primary' sx={{px:3,py:3,textWrap:'wrap',textAlign:'left',color:'black'}}/>
                    </Divider>
                </Grid>
           </Grid>
           <Grid container sx={{display:'flex',justifyContent:'left',gap:5}}>
                <Grid item   sx={{mx:5,mt:3,display:'flex',justifyContent:'center'}}>
                    <Avatar src="./images/avatar.jpg" alt="profile image" variant="rounded" sx={{ width: 250, height: 250 }}>AM</Avatar>
                </Grid>
                <Grid  item  sx={{mx:5,mt:8,textAlign:'left',verticalAlign:'center'}}>
                    <Typography variant='caption' sx={{display:'flex',alignItems:'center'}}><KeyboardArrowLeftRounded color='primary'/>نام و نام خانوادگی: اکرم عظیمی</Typography>
                    <Typography variant='caption' sx={{display:'flex',alignItems:'center'}}><KeyboardArrowLeftRounded color='primary'/>سن:37</Typography>
                    <Typography variant='caption' sx={{display:'flex',alignItems:'center'}}><KeyboardArrowLeftRounded color='primary'/>شهر: اراک</Typography>
                    <Typography variant='caption' sx={{display:'flex',alignItems:'center'}}><KeyboardArrowLeftRounded color='primary'/>آدرس ایمیل: RoseCode@gmail.com</Typography>
                </Grid>
           </Grid>
           <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mx:5,mt:2}}>
                    <Divider sx={{"&::before , &::after":{borderColor:'secondary.main'}}}>
                        <Chip  icon={<SelfImprovementRounded/>}  label={<Typography variant='caption'>مهارت های من</Typography>} color='secondary' sx={{px:3,py:3,textWrap:'wrap',textAlign:'left'}}/>
                    </Divider>
                    <Skill icon={htmlSkill.icon} value={html} name={htmlSkill.name} color={htmlSkill.color}/>
                    <Skill icon={cssSkill.icon} value={css} name={cssSkill.name} color={cssSkill.color}/>
                    <Skill icon={jsSkill.icon} value={js} name={jsSkill.name} color={jsSkill.color}/>
                    <Skill icon={reactSkill.icon} value={react} name={reactSkill.name} color={reactSkill.color}/>
                    <Skill icon={gitSkill.icon} value={git} name={gitSkill.name} color={gitSkill.color}/>
                </Grid>
           </Grid>
        </Box>
    )
}
export default About;