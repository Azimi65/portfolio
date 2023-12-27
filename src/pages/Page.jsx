import {Box } from "@mui/material";
const Page=(props) =>{
    const { children, pageNumber, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={pageNumber !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {pageNumber === index && (
          <Box >
           {children}
          </Box>
        )}
      </div>
    );
  }
  export default Page;