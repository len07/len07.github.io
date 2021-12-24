import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection () {
    return (
        <div className='hero-container'> 
            <video src="/Videos/Video1.mp4" autoPlay loop muted />
            <h1>ALENA LUO</h1>
            <p>Get to know me!</p>
            <div className='hero-btns'>
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
         
                 {Button && <Button buttonStyle='btn--outline' onClick={()=>window.open('https://www.youtube.com/watch?v=3wnpQFgJuh8')}>WATCH VIDEO</Button>}
                </Button>
                
            </div>
    
            </div>
     
        
    );
}

export default HeroSection;