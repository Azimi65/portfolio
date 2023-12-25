import Sidebar from './components/Sidebar';
import ContentContainer from './components/ContentContainer';
import './App.css';
import MainLayout from './components/layout/MainLayout';
import { useState } from 'react';
import TabPanel from './components/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
function App() {
  const [value,setValue]=useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
        <MainLayout>
          <Sidebar value={value} handleChange={handleChange}/>
          <ContentContainer>
            <TabPanel value={value} index={0}>
              <Typography>صفحه اصلی</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography>درباره من</Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography>رزومه من</Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Typography>نمونه کارها</Typography>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Typography>ارتباط با من</Typography>
            </TabPanel>
          </ContentContainer>   
        </MainLayout> 
  );
}
export default App;
