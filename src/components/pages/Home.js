import { Box } from '@mui/material';
import React from 'react';
import '../../App.css';
import About from '../About';
import Header from '../Header';
function Home () {
    return (
      <>
        <Box style={styles.container}>
          <Header />
          <About />
        </Box>
        
      </>
    );
}

const styles={
  container: {
    backgroundImage: `url("https://wallpapercave.com/wp/wp2418964.jpg")`,
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}

export default Home;