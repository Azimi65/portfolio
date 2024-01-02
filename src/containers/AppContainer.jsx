import Sidebar from '../components/sidebar/Sidebar';
import PageContainer from './PageContainer';
import '../App.css';
import MainLayout from '../layout/MainLayout';
import { useEffect, useState } from 'react';
import Page from '../pages/Page';
import { Typography,Box } from '@mui/material';
import SidebarContainer from './SidebarContainer';
import MainContext from '../context';
import DrawerActionButton from '../components/sidebar/DrawerActionButton';
import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Samples from '../pages/Samples';
import {useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
function AppContainer() {
  const [pageNumber,setPageNumber]=useState(0)
  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
    console.log(newValue)
  };
  const[drawerOpen,setDrawerOpen]=useState(false)
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"))
  useEffect(()=>{
    if(isSmUp){
          setDrawerOpen(false)
    }
  },[isSmUp])
  return (
    <MainContext.Provider value={{pageNumber,handlePageNumber,drawerOpen,setDrawerOpen}}>
      <MainLayout>
          <SidebarContainer>
            <Sidebar/>
          </SidebarContainer>
          <DrawerActionButton/>
          <PageContainer>
            <Page pageNumber={pageNumber} index={0}>
              <Home/>
            </Page>
            <Page pageNumber={pageNumber} index={1}>
            <About/>
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume/>
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Samples/>
            </Page>
            <Page pageNumber={pageNumber} index={4}>
            <Box sx={{backgroundImage:`url(${require("../assets/images/wallhaven-6krxr6.jpg")})`,height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
              <Typography>ارتباط با من</Typography>
            </Box>
            </Page>
          </PageContainer>   
        </MainLayout> 
    </MainContext.Provider>
  );
}
export default AppContainer;
