import {Box,Typography} from '@mui/material';
import Typed from "typed.js";
import { useEffect,useRef,useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import {links} from '../constant/particles'
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
            strings:["اکرم عظیمی"],
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
    },[]);
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return(
        
    <Box sx={{backgroundImage:`url(${require("../assets/images/wallhaven-j3328w.jpg")})`,height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',
    display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        
            
        <Typography ref={nameEl}></Typography>
        <Typography ref={infoEl}></Typography>
        {/* <Particles id="tsparticles" options={links} init={particlesInit} loaded={particlesLoaded} /> */}
    </Box>  
    )
}
export default Home;