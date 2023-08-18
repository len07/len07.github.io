import React from 'react';
import '../App.css';
import Typical from 'react-typical'
import './HeroSection.css';

function HeroSection () {
    return (
        <div className='hero-container'> 
            <img className="heroimage" src="images/IMG_2196.jpeg" alt="DescriptionPhoto"></img>
            <h1>ALENA <h1 className="highlighted-text"> LUO</h1></h1> 
            <span className='primary-text'>
                {" "}
                <h1>
                {" "}
                <Typical
                loop={Infinity}
                steps={[
                    "Passionate Coder 💻",
                    1000,
                    "Waterloo CS Student",
                    1000,
                    "Aspiring Leader ⛳️",
                    1000,
                    "Linguaphile🔤",
                    1000,
                    

                ]}
                />
                </h1>
                
                
            </span>
    
            </div>
     
        
    );
}

export default HeroSection;