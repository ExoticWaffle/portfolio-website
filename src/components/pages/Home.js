import React from 'react';
import '../../App.css';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import './Home.css'
function Home () {
    return (
      <>
        <div className="background">
        <Header />
          <div className="body-container">
            <About />
            <Projects />
          </div>
          <Footer />
        </div>
        
      </>
    );
}

export default Home;