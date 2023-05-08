import { Box, Typography } from '@mui/material';
import React from 'react';


function Header(props) {
    return (
        <>
          <Box style={styles.container}>
            <Typography variant="h1">Leo Tremblay</Typography>
            <Typography>I'm a programmer</Typography>
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
    }
}

export default Header;