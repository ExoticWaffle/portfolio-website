import { Box, Typography } from '@mui/material';
import {React, forwardRef} from 'react';


const Header = forwardRef((props, ref) => {
    return (
        <div style={styles.container} ref={ref}>
          <Typography variant="h1">Leo Tremblay</Typography>
          <Typography>I'm a programmer</Typography>
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