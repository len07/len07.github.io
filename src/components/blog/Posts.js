import React from "react";
import { Link } from "react-router-dom";
 
function Posts() {
 return (
  <div className='cards'>
  
  <div className="cards__container">
      <div className="cards__wrapper">
          <ul className="cards__items">
            <li className='cards__item'>
              <Link className='cards__item__link' to="/blog/MyFirstSemesteratWaterlooCS">
                  <figure className="cards__item__pic-wrap" data-category="EDUCATION">
                      <img 
                        src="images/math135.jpg"
                        alt="Alena"
                        className='cards__item__img' 
                      />
                  </figure>
                  <div className='cards__item__info'>
                      <h5 className='cards__item__text'>My First Semester at Waterloo CS</h5> 
                  </div>
              </Link>
            </li>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/blog/Cambodiavolunteering">
                  <figure className="cards__item__pic-wrap" data-category="SOCIAL ISSUES">
                      <img 
                        src="images/CambodiaKids.jpg"
                        alt="Alena"
                        className='cards__item__img' 
                      />
                  </figure>
                  <div className='cards__item__info'>
                      <h5 className='cards__item__text'>Mission Cambodia: One Week Volunteering</h5> 
                  </div>
              </Link>
            </li>
            <li className='cards__item'>
              <Link className='cards__item__link' to="/blog/Vancouvertrip">
                  <figure className="cards__item__pic-wrap" data-category="TRAVEL">
                      <img 
                        src="images/lookoutpoint.jpeg"
                        alt="Alena"
                        className='cards__item__img' 
                      />
                  </figure>
                  <div className='cards__item__info'>
                      <h5 className='cards__item__text'>Travel with me to Vancouver</h5> 
                  </div>
              </Link>
            </li>          
          </ul>
      </div>
  </div>
</div>
   
 );
}
 
export default Posts;
 
 
