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
    <Navbar home={home} about={about} projects={projects} contact={contact} />
      <div className="background" ref={home}>
        <Header  />
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
