import { Box, Typography } from '@mui/material';
import {React, useState, forwardRef} from 'react';


const Header = forwardRef((props, ref) => {
  const [mobile, setMobile] = useState(window.innerWidth <= 640);
  const checkMobile = () => {
    setMobile(window.innerWidth <= 640);
  }
  window.addEventListener('resize', checkMobile);
    return (
        <div style={styles.container} ref={ref}>
          <Typography variant={mobile ? "h3" : "h1"}>Leo Tremblay</Typography>
          <Typography>I'm a programmer (I like to keep it broad)</Typography>
        </div>
  );
});

const styles={
    container: {
        color: '#fff',
        height: '100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }
}

export default Header;