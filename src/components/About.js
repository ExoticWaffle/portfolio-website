import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import aboutText from '../assets/text';

function About(props) {
    const text=aboutText;
    return (
        <>
          <Stack sx={styles.container} justifyContent="center" alignItems="center" spacing={5}>
            <Typography variant="h3" sx={styles.title}>About</Typography>
            <Typography sx={{px: "40px", textAlign: "center"}}>{text}</Typography>
          </Stack>                                    
        </>
    );
}

const styles={
    container: {
        width: "50%",
        maxWidth: "600px",
        backgroundColor: "#fff",
        p: "50px",
    },
    title: {
        borderBottom: "4px solid black",
        pb: "30px",
        textAlign: "center",
        width: "100%"
    }
    
}

export default About;