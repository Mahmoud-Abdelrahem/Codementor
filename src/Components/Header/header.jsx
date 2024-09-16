import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {

    return (
        <>
        <Box variant="h6" component="div" sx={{ display: 'flex' , backgroundColor:'white' , padding:'10px' }}>
            <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
                Codementor
            </Typography>
            <Button sx={{color:'black' , marginLeft:'30px'}} endIcon={<ArrowDropDownIcon /> }>Mentorship</Button>
            <Button sx={{color:'black' , marginLeft:'10x'}} endIcon={<ArrowDropDownIcon /> }>Expert Ship</Button>
            <Button sx={{color:'black' , marginLeft:'10px'}} endIcon={<ArrowDropDownIcon /> }>Freelance</Button>
            <Button sx={{color:'black' , marginLeft:'10px'}} endIcon={<ArrowDropDownIcon /> }>More</Button>
            <Typography sx={{marginLeft:'auto' , marginTop:'8px'}}>Become a mentor</Typography>
            <Typography sx={{marginLeft:'20px' , marginTop:'8px'}} >Login</Typography>
            <Button sx={{marginLeft:'20px', marginRight:'8px' , marginBottom:'8px' , backgroundColor:'black' , fontFamily:'serif', padding:'5px'}} variant="contained">Logout</Button>
        </Box>
        <Divider />
        </>
    );
}


export default Header;
