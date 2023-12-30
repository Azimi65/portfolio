import {Box,Typography} from '@mui/material';
import Typed from "typed.js";
import { useEffect,useRef } from 'react';
const Home=()=>{
    const nameEl=useRef(null);
    const infoEl=useRef(null);
    const strings=[
        "من یک برنامه نویس فرانت اند هستم",
        "من یک توسعه دهنده وب هستم",
        "من یک فریلنسر هستم",
        "من یک مدرس وب هستم"
    ];
    useEffect(()=>{
        const typedName = new Typed(nameEl.current,{
            strings:["اکرم میرعظیمی"],
            typeSpeed:50,
            backSpeed:20,
            backDelay:10,
            showCursor:false
        })
        const typedInfo = new Typed(infoEl.current,{
            strings:strings,
            loop:true,
            showCursor:false,
            startDelay:1500,
            typeSpeed:50,
            backSpeed:20,
            backDelay:10,
        })
        return ()=>{
            typedName.destroy();
            typedInfo.destroy();
        }
    },[])
    return(
    <Box sx={{backgroundImage:`url(${require("../assets/images/wallhaven-d6pld3.jpeg")})`,height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',
    display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Typography ref={nameEl}></Typography>
        <Typography ref={infoEl}></Typography>
      </Box>  
    )
}
export default Home;