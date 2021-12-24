import React from 'react'

import './Footer.css';
import {MdEmail} from 'react-icons/md'; 
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';


function Footer() {
    return (
        <div className='footer-container'> 
        <section ClassName="footer-subscription">
            <p className="footer-subscriptionheading">
                
            </p>
            <p className="footer-subscription-text">
                
            </p>
            <div className="input-areas">
                <form>
                    <div className='titlehome'>
                        <h1>CONNECT WITH ME!</h1>
                    </div>
          

        <a href="mailto: alenaluo19@gmail.com">
            <MdEmail className='link-icon'/> 
        </a>

        <div className='text'>
        <h1>alenaluo19@gmail.com </h1>
        </div>
        
        
        <a href="https://github.com/len07">
            <FaGithub className='link-icon'/>
        </a>
        <div className='text'>
        <h1>@len07</h1>
        </div>
        <a href="http://www.linkedin.com/in/alena-luo">
            <FaLinkedin className='link-icon'/>
        </a>
        <div className='text'>
        <h1>Alena Luo</h1>
        </div>
                </form>
            </div>
        </section>
        <div className='footer-links'>
         <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
            </div>
         </div>
        </div>
     </div>
    );
}

export default Footer;