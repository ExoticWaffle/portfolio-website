import { React, useRef } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <div className="background">
        <header className="navbar-container"><Navbar home={home} about={about} projects={projects} contact={contact} /></header>
        <Header ref={home} />
          <div className="body-container">
            <About ref={about} />
            <Projects ref={projects} />
          </div>
        <Footer ref={contact} />
      </div>
    </>
  );
}

export default App;
