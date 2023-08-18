import React, { useEffect } from "react";
import { useParams } from "react-router";
import './Blog.css';
import math135 from './images/math135.jpg';
import vancouver from './images/vancouver.jpeg';
import cambodia from './images/camb.jpeg';
import seafoodboil from './images/seafoodboil.JPG'
import busstop from './images/busstop.jpeg';
import cake from './images/cake.jpeg';
import canadaplace from './images/canadaplace.jpeg';
import flightback from './images/flightback.jpeg';
import friedoysters from './images/friedoysters.jpeg';
import hike from './images/hike.jpeg';
import lobster from './images/lobsterroll.jpeg';
import lookoutpoint from './images/lookoutpoint.jpeg';
import scienceworld from './images/scienceworld.jpeg';
import tandembike from './images/tandembike.JPG';
import toyshop from './images/toyshop.JPG';
import resources from './images/resources.JPG';
import gym from './images/gym.jpeg';
import groupphoto from './images/groupphoto.JPG';
import factoryworker from './images/factoryworker.jpeg';
import kftea from './images/kftea.jpg';
import localhouse from './images/localhouse.jpeg';
import vball from './images/vball.jpg';

function Post() {
 let { postSlug } = useParams();
 
 useEffect(() => {
   // Fetch post using the postSlug
 }, [postSlug]);
 
 return (
   <div>
    { postSlug === "MyFirstSemesteratWaterlooCS" && 
      <div className="card">
      <div class="blog-text">
        <h1 className="blog-title">My First Semester at Waterloo CS</h1>
        <img className='fakeimg'src={ math135 } ></img>
          
        <p className="post">
          Overall an incredibly humbling and eye-opening term. I feel that I learned the most in Algebra,
          followed by CS 135 and Math 137. I really enjoyed my time at Waterloo with all of my friends (new and old), and have made
          countless memories over the course of 4 months., whether it was movie nights, group cooking, or studying for exams. I definitely feel more independent now than I was before, having had to do many things myself for the first time.
        </p>
        <p className="post"> There were times when courses became really challenging for me but with the moral support of my friends and 
          my personal determination, I was able to pull through, learning a lot about myself and my program in the process. 

          I've discovered that I am far more familiar and comfortable with the coding environment, and the different coding languages no longer seem as intimidating as they used to be. The website you are on right now is one perfect example of my learning and progress!</p>
          <p className="post"> COVID definitely took a toll on my initial university experience, but I would say that I still got to meet some amazing people and professors. </p>
      </div>
    </div> }
    { postSlug === "Vancouvertrip" && 
    <div className="card">
      <div class="blog-text">
        <h1 className="blog-title">Vancouver Trip May 2023</h1>
        <img className='fakeimg'src={ lookoutpoint } ></img>
          
        <p className="post">
          My friends and I embarked on a 5 day trip to Vancouver after our 2B term! On the first day, after unpacking our bags, we went straight to a local seafood restaurant that was highly rated. This was my first time trying oysters, and they were really delicious; however, the highlight of the show was definitely the seafood boil. After dinner, we walked back to our airbnb and went to bed early to prepare for our hike the day after. 
        </p>
        <div>
          <img src={seafoodboil} height="400px" style={{ padding: "10px", marginLeft: "750px" }}/>
          
        <p className="post">
          Day 2 was by far my favourite part of the trip!! We woke up bright and early to buy food for our hike at a local grocery store: sandwiches, water, and fruit. Then, we walked to our shuttle bus location to get to Sea to Sky Gondola. Even the view at the bus stop was breathtaking.
        </p>
        <img src={busstop} width="300px" style={{ marginLeft: "725px" }}/>
 
        <p className="post">
          After arriving at the location, we took the gondola up to the top of the mountain, and began our hike. The weather was perfect: sunny, breezy, with the snow on the ground keeping us cool. We hit 20k steps by the end of this day! For the rest of the evening we went to a ramen shop and then took some pictures at Canada Place.
        </p>
        <div className="group"> 
          <img src={hike} width="300px" style={{ padding: "10px" }} />
          <img src={vancouver} width="300px" style={{ padding: "10px" }} />
          <img src={canadaplace} width="300px" style={{ padding: "10px" }} />
        </div>
        <p className="post"> 
          Day 3 key words: lobster rolls, Science World, fancy Japanese restaurant and CHOCOLATE FUDGE CAKE. It was my friends birthday, so we decided to go somewhere fancier to celebrate. 
        </p>
        <div className="group">
          
          <img src={friedoysters} width="300px" style={{ padding: "10px" }}/>
          <img src={scienceworld} width="300px" style={{ padding: "10px" }} />
          <img src={ cake } width="300px" style={{ padding: "10px" }} />
        </div>
        <p className="post">
          Our last full day in Vancouver consisted of tandem biking in Stanley Park, shopping, and eating at a surf and turf restaurant. The fried oysters that I ordered were so good I would go back to Vancouver just for them.
        </p>
          <div className="group">
          <img src={lobster} width="300px" style={{ padding: "10px" }} />
          <img src={tandembike} width="300px" style={{ padding: "10px" }}/>
          <img src={toyshop} width="300px" style={{ padding: "10px" }} />
        </div>
        <p className="post">
          It seemed like 5 days flew by so fast, and before I knew it, we were packing up and training to the airport. Until next adventure :)
        </p>
        <img src={flightback} width="300px" style={{ padding: "10px", marginLeft: "750px" }} />
      </div>
    </div>
    </div>}

    { postSlug === "Cambodiavolunteering" && 
    <div className="card">
      <div class="blog-text">
        <h1 className="blog-title">Volunteering in Cambodia</h1>
        <img className='fakeimg'src={ cambodia } ></img>
          <p className="post">
            I founded a social issues club within my high school along with 4 other co-founders called Act 4 Impact. As part of this organization, we held a volleyball buy-in tournament and a Kungfu Tea partnership event to raise funds for a Cambodian elementary school. We used the $1000 raised to buy school supplies such as backpacks, chalkboards, pencils, and more.
          </p>
          <div className="group">
          <img src={vball} width="400px" style={{ padding: "10px", marginLeft: "90px" }}/>
          <img src={kftea} width="300px" style={{ padding: "10px" }}/>
          </div>
          <p className="post">
            In December 2019, I flew to Cambodia with two of my co-founders/friends. This was so exciting for all of us, since this trip meant a lot of firsts for all of us. First time volunteering abroad; first time flying international alone; first time visiting Cambodia.
          </p>
          <p className="post">
            We spent the week touring a local factory, teaching at Salalek 5 Primary School of Cambodia, and learning more about the culture and local life. It was deeply inspiring seeing all of the extremely hardworking students and factory workers. We were told that most workers had to commute 2-3 hours each day just to arrive at the factory.
            At the school, all the kids were very respectful and eager to learn. We taught them English, how to fold origami, the YMCA dance, and played outdoor gym games. 
          </p>
          <div className="group">
          <img src={factoryworker} width="300px" style={{ padding: "10px" }}/>
          <img src={localhouse} width="300px" style={{ padding: "10px" }}/>
          <img src={gym} width="300px" style={{ padding: "10px" }}/>
          </div>
          <p className="post">
            In speaking with the school officials, we learned that some students would go home early to help with farming or work odd jobs to support their families. 
            Many students chose not to go to high school after elementary school, since this would be an additional financial burden. To add, most people found that secondary education did not directly translate to higher pay. These circumstances make it hard to break the cycle of poverty.
          </p>
          <div className="group">
          <img src={resources} width="400px" style={{ padding: "10px", marginLeft: "50px" }}/>
          <img src={groupphoto} width="400px" style={{ padding: "10px" }}/>
          </div>
          <p className="post">
            It's hard to put into words the impact witnessing all of this first hand had on me. Compared to the Cambodian life especially for the impoverished in rural areas, my life in Canada is so privileged. 
            I want to continue to leverage the resources I have to help those in need, because clearly these people don't lack talent, but rather opportunity.
          </p>
        
      </div>
    </div>}
   </div>

   
  
 );

}

export default Post;


