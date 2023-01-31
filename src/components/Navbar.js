import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }
    else{
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

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
        <nav className={navbar ? "navbar active": "navbar"}>
          <div className="navbar-container">
              <p className="navbar-name" onClick={closeMobileMenu}>Leo Tremblay</p>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                  <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Works' className="nav-links" onClick={closeMobileMenu}>
                    Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Contact' className="nav-links" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </>
  )
}

export default Navbar;