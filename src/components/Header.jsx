import {AppBar,Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import {Button} from '@mui/material'
import {styled} from '@mui/material/styles';
const CustomizedButton=styled(Button)`
color:lime;
`;
const Header = ()=>{
    
    return(
        <>
            <AppBar>
              <Toolbar>
              <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            صفحه اصلی
          </Typography>
          <Typography variant="subtitle1">وب سایت شخصی من</Typography>
          <Button variant='dashed' color="secondary" sx={{borderColor: 'warning.main'}}>ورود</Button>
          <CustomizedButton variant='contained'>ثبت نام</CustomizedButton>  
              </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}
export default Header;