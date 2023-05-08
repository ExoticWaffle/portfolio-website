import React, { useState, useEffect } from 'react';
import {Menu, Close} from '@mui/icons-material';
import './Navbar.css';
import { AppBar, Button, List, ListItemButton, Toolbar, Typography, Stack, Link} from '@mui/material';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 960);
  const [menu, setMenu] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80 || menu) {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  const checkMobile = () => {
    if(window.innerWidth <= 960){
      setMobile(true);
    }
    else{
      setMobile(false);
      setMenu(false);
    }
    
  }

  const toggleMenu = () => {
    setMenu(!menu);
    setNavbar(!menu)
  }

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('resize', checkMobile);

  const navButtons = (
    <Stack sx={{height: "100%"}} direction={mobile ? "column" : "row"} spacing={mobile ? 0 : 2}>
      <Button className={mobile ? "menu-button" : "nav-button"} color="inherit">About</Button>
      <Button className={mobile ? "menu-button" : "nav-button"} color="inherit">Works</Button>
      <Button className={mobile ? "menu-button" : "nav-button"} color="inherit">Skills</Button>
      <Button className={mobile ? "menu-button" : "nav-button"} color="inherit">Contact</Button>
    </Stack>
  );

  const burgerMenu = (
    <div className="menu-container">
      {navButtons}
    </div>
  )

  const menuButton = (<Button onClick={toggleMenu} sx={{background: "transparent", color: "white"}}>{menu ? <Close sx={{mx: "-10px"}} /> : <Menu />}</Button>)

  menu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  return (
      <>
        <AppBar position="fixed" elevation={0} className="appbar" sx={navbar ? styles.scroll : styles.noScroll}>
          <Toolbar className="toolbar">
            <Typography variant="h5" sx={{flex: 1}}>Leo Tremblay</Typography>
            {mobile ? menuButton : navButtons}
          </Toolbar>
        </AppBar>
        
        {menu ? burgerMenu : ""}
      </>
  )
}

const styles={
  noScroll: {
    backgroundColor: "transparent",
    transition: "background-color 0.7s ease"
  },

  scroll: {
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(8px)",
    transition: "background-color 0.7s ease"
  }
}

export default Navbar;