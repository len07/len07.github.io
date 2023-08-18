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
                     path='/blog/MyFirstSemesteratWaterlooCS'
                     />
                     <CardItem 
                     src="images/CambodiaKids.jpg"
                     text="Mission Cambodia: One Week Volunteering"
                     label='SOCIAL ISSUES'
                     path='/blog/Cambodiavolunteering'
                     />
                     <CardItem 
                     src="images/lookoutpoint.jpeg"
                     text="Travel with me to Vancouver"
                     label='TRAVEL'
                     path='/blog/Vancouvertrip'
                     />
                    
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;