import React from 'react';
import '../../App.css';
import './About.css';
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { FaBaby, FaBriefcase, FaGlobeEurope, FaHandPeace, FaLaptop, FaLaptopCode, FaSchool } from 'react-icons/fa';

export default function About() {
   return (
   <>
   <div>
   <section class="about">
    <div class="main">
        <div class="about-text">
            <h1>ABOUT ME</h1>          
            <p>Hey there, nice to meet you! I'm Alena. One of the most difficult questions I find is, ironically, "Tell me about yourself". How can anyone possibly describe everything about themselves in a mere few sentences? So, rather than attempt
            to put into words exactly who I am, I present to you a journey of the first 20 years of my life:</p>
        </div>
    </div>
   </section>
   <div style={{ backgroundColor: "#eee2dc"}}> 
   <VerticalTimeline>
    <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ac3b61', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ac3b61' }}
    date="July 19th, 2003"
    iconStyle={{ background: '#ac3b61', color: '#ffffff'}}
    icon={FaBaby}>
        <img src="images/birthpicture.jpeg" width="150px"/>
        <h4 style={{ color: "white" }}>I was born at 1:59am in Ontario, Canada</h4>
    </VerticalTimelineElement>
    <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ac3b61', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ac3b61' }}
    date="2009-2010"
    iconStyle={{ background: '#ac3b61', color: '#fff' }}
    icon={FaSchool}>
        <h4 style={{ color: "white" }}>Studied in Shanghai for a year</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ac3b61', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ac3b61' }}
    date="September 2017"
    iconStyle={{ background: '#ac3b61', color: '#fff' }}
    icon={FaSchool}>
        <h4 style={{ color: "white" }}>Entered IB program for high school</h4>
    </VerticalTimelineElement>
    <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ac3b61', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ac3b61' }}
    date="Summer 2019"
    iconStyle={{ background: '#ac3b61', color: '#fff' }}
    icon={FaGlobeEurope}>
        <img src="images/Paris.jpg" width="150px"/>
        <h4 style={{ color: "white" }}>Vacationed to Europe with family</h4>
    </VerticalTimelineElement>
    <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ac3b61', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ac3b61' }}
    date="December 2019"
    iconStyle={{ background: '#ac3b61', color: '#fff' }}
    icon={FaHandPeace}>
        <img src="images/camb.jpeg" width="150px"/>
        <h4 style={{ color: "white" }}>Volunteered in Cambodia with my co-founders</h4>
    </VerticalTimelineElement>
    <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ac3b61', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ac3b61' }}
    date="September 2021"
    iconStyle={{ background: '#ac3b61', color: '#fff' }}
    icon={FaLaptopCode}>
        <img src="images/waterloo.jpg" width="150px"/>
        <h4 style={{ color: "white" }}>Entered University of Waterloo</h4>
    </VerticalTimelineElement>
    <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ac3b61', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ac3b61' }}
    date="May 2022"
    iconStyle={{ background: '#ac3b61', color: '#fff' }}
    icon={FaBriefcase}>
        <img src="images/firstdayofwork.jpeg" width="150px"/>
        <h4 style={{ color: "white" }}>First day of first internship</h4>
    </VerticalTimelineElement>
   </VerticalTimeline>
   </div>
   
   </div>
   </>);
}

