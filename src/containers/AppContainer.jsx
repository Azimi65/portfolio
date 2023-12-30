import Sidebar from '../components/sidebar/Sidebar';
import PageContainer from './PageContainer';
import '../App.css';
import MainLayout from '../layout/MainLayout';
import { useState } from 'react';
import Page from '../pages/Page';
import { Typography,Box } from '@mui/material';
import SidebarContainer from './SidebarContainer';
import MainContext from '../context';
import DrawerActionButton from '../components/sidebar/DrawerActionButton';
import Home from '../pages/Home';
function AppContainer() {
  const [pageNumber,setPageNumber]=useState(0)
  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
    console.log(newValue)
  };
  const[drawerOpen,setDrawerOpen]=useState(false)
  
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
            <Box sx={{backgroundImage:`url(${require("../assets/images/wallhaven-6oqqqq.png")})`,height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
              <Typography>درباره من</Typography>
            </Box>
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Box sx={{backgroundImage:`url(${require("../assets/images/wallhaven-j3328w.jpg")})`,height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                <Typography>رزومه من</Typography>
              </Box>
            </Page>
            <Page pageNumber={pageNumber} index={3}>
            <Box sx={{backgroundImage:`url(${require("../assets/images/wallhaven-6o7g9x.jpeg")})`,height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
              <Typography>نمونه کارها</Typography>
            </Box>
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
