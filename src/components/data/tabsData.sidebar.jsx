import { HomeRounded,Face4Rounded, TextSnippetRounded,WorkRounded,ContactlessRounded} from '@mui/icons-material';

const tabProps=(index)=>{
    return{
        id:`sidebar-tab-${index}`,
      "aria-controls":`tabpanel-${index}`,
    }
  }
  export const tabsData = () =>{
    const tabs=[
    {label:'صفحه اصلی',icon:<HomeRounded fontSize="small"/>,...tabProps(0)},
    {label:' درباره من',icon:<Face4Rounded fontSize="small"/>,...tabProps(1)},
    {label:' رزومه من',icon:<TextSnippetRounded fontSize="small"/>,...tabProps(2)},
    {label:' نمونه کارها',icon:<WorkRounded fontSize="small"/>,...tabProps(3)},
    {label:' ارتباط با من',icon:<ContactlessRounded fontSize="small"/>,...tabProps(4)},

  ]
  return tabs;
};