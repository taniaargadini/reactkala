import React from 'react';
import '../App.css';
import { Button } from './Buttons';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>KALA KINI NANTI EXPERIENCE</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET AVATAR
        </Button>
       
        
      </div>
    </div>
  );
}

export default HeroSection;
