import React from "react";
import { Link } from "react-router-dom";
 
function Posts() {
 return (
   <div className="leftcolumn">
     <div className="card">
   <div class="blog-text">
     <Link to="/blog/MyFirstSemesteratWaterlooCS">
     
         <h1 class="blog-title">My First Semester at Waterloo CS</h1>
         <img className='fakeimg'src="images/math135.jpg" alt="FakeImg"></img>
        
         <div class="blog-text">   
           <p>
           Overall an incredibly humbling and eye-opening term. I feel that I learned the most in Algebra,
         followed by CS135 and Calc....
           </p>
         </div>
      
     </Link>
   </div>
 </div>
 <div className="card">
   <div class="blog-text">
     <Link to="/blog/MissionCambodia:OneWeekVolunteering">
     
         <h1 class="blog-title">Mission Cambodia: One Week Volunteering</h1>
         <img className='fakeimg'src="images/CambodiaKids.jpeg" alt="FakeImg"></img>
        
         <div class="blog-text">   
           <p>
           Volunteering in Cambodia was a once in a lifetime experience that I was fortunate enough to partake in....
           </p>
         </div>
      
     </Link>
   </div>
 </div>
 </div>
   
 );
}
 
export default Posts;
 
 
