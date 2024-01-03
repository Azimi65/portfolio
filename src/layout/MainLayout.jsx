import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider,Helmet } from 'react-helmet-async';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import {useScrollTrigger} from '@mui/material';
import {cloneElement} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {lightTheme,darkTheme} from './theme'
function ElevationScroll(props: Props) {
    const { children} = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
const MainLayout = ({children,mode})=>{
  const theme= mode==='dark'?darkTheme:lightTheme;
    return(
        <>
            <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <HelmetProvider>
                  <Helmet>
                    <title>وب سایت شخصی اکرم میرعظیمی</title>
                  </Helmet>
              </HelmetProvider>
              <Grid container sx={{height:"100vh"}}>
                  {children}
              </Grid>
            </ThemeProvider>
        </CacheProvider>
        </>
    )
    
}
export default MainLayout;