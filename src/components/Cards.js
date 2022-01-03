import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1 id="blogsHeading">BLOG</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                     <CardItem 
                     src="images/math135.jpg"
                     text="My First Semester at Waterloo CS"
                     label='Education'
                     path='/blog/My First Semester at Waterloo CS'
                     />
                     <CardItem 
                     src="images/CambodiaKids.jpg"
                     text="Mission Cambodia: One Week Volunteering"
                     label='SOCIAL ISSUES'
                     path='/blog/MissionCambodia:OneWeekVolunteering'
                     />
                     <CardItem 
                     src="images/oslcview.jpg"
                     text="High School Experience"
                     label='EDUCATION'
                     path='/Blog'
                     />
                    
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;