import React from 'react';
import '../../App.css';
import './Blog.css';
import { Outlet } from "react-router-dom";
import {FaInstagramSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
export default function Blog() {
  return (
      <>
 
<div class="leftcolumn">
<div className="card2">
    <div class="card2">
      <h1 className="blog-text">Welcome to Lena's World</h1>
      <Outlet/>
    </div>
  </div>
 
  </div>
 
  <div class="rightcolumn">
  <div class="card">
    <h2>Fashion</h2>
    <img className='fakeimg'src="images/dtsolopic.jpg" alt="FakeImg"></img>
    <p className='blog-title'>Ever heard of retail therapy? Well, it's definitely my favourite type of therapy.</p>
  </div>
  <div class="card">
    <h3>Picture Gallery</h3>
    <div class="fakeimg"><img className='fakeimg'src="images/IMG_6848.JPG" alt="FakeImg"></img></div>
    <div class="fakeimg"><img className='fakeimg'src="images/IMG_0293.jpeg" alt="FakeImg"></img></div>
    <div class="fakeimg"><img className='fakeimg'src="images/Paris.jpg" alt="FakeImg"></img></div>
  </div>
 
</div>
<div class="footer">
  <section ClassName="footer-subscription">
          <p className="footer-subscriptionheading">
            
          </p>
          <p className="footer-subscription-text">
            
          </p>
          <div className="input-areas">
              <form>
                  <div className='footer'>
                      <h1>CONNECT WITH ME!</h1>
                  </div>
      
      <a href="mailto: alenaluo19@gmail.com">
          <MdEmail className='link-icon3'/>
      </a>
      <div className='footer'>
      <h1>alenaluo19@gmail.com </h1>
      </div>
    
      <a href="https://www.instagram.com/_alenaluo/">
          <FaInstagramSquare className='link-icon3'/>
      </a>
      <div className='footer'>
      <h1>alenaluo</h1>
      </div>
      <a href="https://github.com/len07">
          <FaGithub className='link-icon3'/>
      </a>
      <div className='footer'>
      <h1>@len07</h1>
      </div>
      <a href="http://www.linkedin.com/in/alena-luo">
          <FaLinkedin className='link-icon3'/>
      </a>
      <div className='footer'>
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
      <div className='text'>
      <h1>alenaluo</h1>
      </div>
  </div>
      </>
  )
};
