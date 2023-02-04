import { Box, Typography } from '@mui/material';
import React from 'react';

function Header(props) {
    return (
        <>
          <Box style={styles.container}>
            <Typography variant="h1">Leo Tremblay</Typography>
            <Typography>I'm the beep boop beep boop man (web developer)</Typography>
          </Box>
        </>
    );
}

const styles={
    container: {
        color: '#fff',
        height: '100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    name: {
        
    }
}

export default Header;