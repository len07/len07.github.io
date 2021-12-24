import React from 'react';
import '../../App.css';
import './Experience.css';

export default function Experience() {
    return(
        <>
        <h1 className='experience'>EXPERIENCE</h1>

        <div className='column1'>
        <img className='education'src="images/pyn.jpg" alt="DescriptionPhoto"></img>
            <h3 className='a4i'>PARSEC YOUTH NETWORK</h3>
            <h4 className='jobtitle'>Tutor</h4>
            <h5 className='datetime'>November 2020-Present</h5>
            <li className='descriptionexperience'>Teaching elementary kids Math, English and French</li>
            <li className='descriptionexperience'>Responsible for lesson planning, assigning homework and marking assessments</li>
        </div>
        <div className='column2'>
        <img className='cambodia'src="images/camb.jpeg" alt="DescriptionPhoto"></img>
            <h3 className='a4i'>ACT 4 IMPACT</h3>
            <h4 className='jobtitle'><b>Co-founder</b></h4>
            <h5 className='datetime'>December 2018-June 2021</h5>
            <li className='descriptionexperience'>Donated over $2000 to various charitable organizations including HomesFirst Homeless Shelter, Salalek 5 Primary School of Cambodia, The George Floyd Memorial Fund, and Sunnybrook Hospital.</li>
            <li className='descriptionexperience'>Organized multiple tournament buyouts and bubble tea sales events to raise awareness and funds for social issues.</li>
            <li className='descriptionexperience'>Kingdom of Cambodia Acknowledgement Letter</li>
        </div>


    </>);
}