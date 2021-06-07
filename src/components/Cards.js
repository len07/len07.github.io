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
                     src="images/Paris.jpg"
                     text="Travelling to Europe"
                     label='LIFESTYLE'
                     path='/Blog'
                     />
                     <CardItem 
                     src="images/CambodiaKids.jpg"
                     text="Mission Cambodia: One Week Volunteering"
                     label='SOCIAL ISSUES'
                     path='/Blog'
                     />
                     <CardItem 
                     src="images/oslcview.jpg"
                     text="High School Experience"
                     label='EDUCATION'
                     path='/Blog'
                     />
                     <CardItem 
                     src="images/cambodiacandid.jpg"
                     text="Get in touch!"
                     label='NETWORK'
                     path='/Blog'
                     />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;