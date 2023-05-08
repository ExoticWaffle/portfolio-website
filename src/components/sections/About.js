import { Box, Stack, Typography } from '@mui/material';
import {React, forwardRef} from 'react';

const About = forwardRef((props, ref) => {
    return (
        <div className="section-container" ref={ref}>
        <h1 className="section-title">About</h1>
        <p style={{padding: "0 40px", textAlign: "center"}}>
        I grew up in Hong Kong and I'm half Japanese and half Canadian, but now I'm in Montréal and I'm studying computer science at Université de Montréal. I really enjoy programming and just learning new things in the world of computers, like for example right now I'm doing a lot of web development and learning algorithms. I plan on branching out and learning things in more areas like AI and eventually be the guy that knows everything. Other than that I spend my time playing video games, reading and doing sports. I play basketball and ping pong every week, and have been for around 4 years. Welcome to my website!    
        </p>
        </div>                                    
    );
});

const styles={
    container: {
        width: "50%",
        maxWidth: "1000px",
        backgroundColor: "#fff",
        p: "50px",
        borderRadius: "50px"
    },
    
    title: {
        borderBottom: "4px solid black",
        pb: "30px",
        textAlign: "center",
        width: "100%"
    }
    
}

export default About;