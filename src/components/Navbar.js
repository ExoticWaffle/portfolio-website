import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { AppBar, Button, List, ListItemButton, Toolbar, Typography, Stack, Link, Box} from '@mui/material';

function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
      <>
        <AppBar position="fixed" elevation={0} sx={navbar ? [styles.appbar, styles.appbarScroll] : styles.appbar}>
          <Toolbar sx={styles.toolbar}>
            <Typography variant="h5" sx={{flex: 1}}>Leo Tremblay</Typography>
            <Stack sx={{height: "100%"}} direction="row" spacing={2}>
              <Button sx={styles.navButton} color="inherit">About</Button>
              <Button sx={styles.navButton} color="inherit">Works</Button>
              <Button sx={styles.navButton} color="inherit">Contact</Button>
            </Stack>
          </Toolbar>
          
        </AppBar>
      </>
  )
}

const styles={
  appbar: {
    px: "60px", 
    height: "80px",
    backgroundColor: "transparent",
    transition: "background-color 0.7s ease"
    
  },

  appbarScroll: {
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(8px)"
  },

  toolbar: {
    mx: "auto", 
    width: "100%", 
    height: "100%",
    maxWidth: "1500px", 
    justifyContent: "space-between",
  },
  navButton: {
    textDecoration: "none",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    height: "100%",
    transition: "border-bottom 0.1s ease",
    borderRadius: "0px",
    "&:hover": {
      borderBottom: "4px solid",
      cursor: "pointer",
    }
  }
}

export default Navbar;