import React, { useState, useEffect } from 'react';
import {Menu, Close} from '@mui/icons-material';
import './Navbar.css';
import { AppBar, Button, List, ListItemButton, Toolbar, Typography, Stack, Link} from '@mui/material';

function Navbar(props) {
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

  const scroll = (element) => {
    console.log(element.current)
    element.current.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    setMenu(false);
  };

  const navButtons = (
    <Stack sx={{height: "100%"}} direction={mobile ? "column" : "row"} spacing={mobile ? 0 : 4}>
      <a className={mobile ? "menu-button" : "nav-button"} onClick={() => {scroll(props.home);}}>HOME</a>
      <a className={mobile ? "menu-button" : "nav-button"} onClick={() => {scroll(props.about);}}>ABOUT</a>
      <a className={mobile ? "menu-button" : "nav-button"} onClick={() => {scroll(props.projects);}}>PROJECTS</a>
      <a className={mobile ? "menu-button" : "nav-button"} onClick={() => {scroll(props.contact);}}>CONTACT</a>
    </Stack> 
  );

  const burgerMenu = (
    <div className={menu ? "menu-container active" : "menu-container"}>
      {navButtons}
    </div>
  )

  const menuButton = (<Button onClick={toggleMenu} sx={{background: "transparent", color: "white"}}>{menu ? <Close /> : <Menu />}</Button>)

  menu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  return (
      <>
        <AppBar position="fixed" elevation={0} className="appbar" sx={navbar ? styles.scroll : styles.noScroll}>
          <Toolbar className="toolbar">
            <Typography variant="h5" sx={{flex: 1}}>Leo Tremblay</Typography>
            {mobile ? menuButton : navButtons}
          </Toolbar>
        </AppBar> 

        {burgerMenu}
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