import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/video-2.mp4" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className="fa-regular fa-circle-play" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;