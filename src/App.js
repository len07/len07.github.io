import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Blog from './components/pages/Blog';
function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Experience' component={Experience} />
      <Route path='/Blog' component={Blog} />
    </Switch>
  </Router>
</>
  );

}

export default App;
