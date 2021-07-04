import React from 'react';
import './App.css';
//import { BrowserRouter } from 'react-router-dom'
import {  Route,HashRouter } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About me/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import NavBar from '../NavBar/Nav';
import GoHome from '../GoHome/GoHome'
const App = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
        <HashRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          {/* here "exact" keyword will resolve "match" case "contains" routing which show both home component compulsarily along with other paths */}
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact} />
          <GoHome/>
          </div>
          </HashRouter>
      {/* </BrowserRouter> */} 
{/* Above Hash Routing is used bcoz of issues with client side rendering as when browser send an request to server to fetch particular page url,server is unable to find that bcoz browser routing is not implemented in it   */}

  </div>)
}
export default App;


//One issue with react router is that bydefaullt it will show "/" path component along with requested path for ex: home component 
//will be visibled always along with others components , 

//this is becoz of  "match" case which is like "contains" check

//Therefore "match" will match both "/" or "/about" path
// "/Projects" path will match "/projects" and "/projects/25"

//To prevent this we use "exact" check