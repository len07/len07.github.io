import React, { useEffect } from "react";
import { useParams } from "react-router";
 
function Post() {
 let { postSlug } = useParams();
 
 useEffect(() => {
   // Fetch post using the postSlug
 }, [postSlug]);
 
 return (
   <div className="card">
     <div class="blog-text">
       <h1 className="blog-title">My First Semester at Waterloo CS</h1>
       <p>
         Overall an incredibly humbling and eye-opening term. I feel that I learned the most in Algebra,
         followed by CS135 and Calc. I really enjoyed my time at Waterloo with all of my friends (new and old), and have made
         countless memories over the course of 4 months. Every Friday we would have movie night, although I don't pulling
         all-nighters like we did :/. 
       </p>
       <p>There were times when the courses became really challenging for me but with the moral support of my friends and 
         my personal determination, I was able to pull through, learning a lot about myself and my program through this experience. 

         I've discovered that I am far more familiar and comfortable with the coding environment, and the different coding languages no longer seem as intimidating as they used to be. The website you are on right now is one perfect example of my learning and progress!</p>
     </div>
   </div>
  
 );
}
 
export default Post;


