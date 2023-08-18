import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Blog from './components/blog/Blog';
import Posts from './components/blog/Posts';
import Post from './components/blog/Post';
 
function App() {
 return (
 <>
 <Router>
   <Navbar />
   <Routes>
   <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/experience" element={<Experience />} />
     <Route path="/blog" element={<Blog />}>
       <Route path="" element={<Posts />} />
       <Route path="/blog/:postSlug" element={<Post />} />
     </Route>
   </Routes>
 </Router>
</>
 
 );
 
}
 
export default App;