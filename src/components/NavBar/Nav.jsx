import React from 'react';
import './Nav.css'
import { slide as Menu } from 'react-burger-menu'
import { Link, withRouter } from 'react-router-dom'

// withRouter -> we will get access history or location object using withRouter
//Condition of using withRouter  is ,Route component should be in BrowserRouter component
class NavBar extends React.Component {
    //here class based component is used to keep track of location history which highlights the ,
    //navbar link whichever is clicked and this location history  is provided in React.Component
    
    
    
    render() {
        console.log(this.props);
        const { location } = this.props;
        
        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const projectsClass = location.pathname === '/projects' ? 'active-item' : '';
        const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
        const contactClass = location.pathname === '/contact' ? 'active-item' : '';


        return (
        <Menu>
                {/* Never want to use <a> tag inside react router application bcoz by clicking on <a> tag whole page refreshes which is not good approach  so we use client side routing*/}
                {/* For client side routing react routing library provides an <Link/> component for navigation */}
                 {/* Intentional Navigation is done using <Link> tag */}
                <Link to="/" className={`menu-item ${homeClass}`}>
                    Home   
                </Link>
                <Link to="/about" className={`menu-item ${aboutClass}`}>
                    About Me            
                </Link>
            
                <Link to="/projects" className={`menu-item ${projectsClass}`}>
                    Projects
                </Link>
                <Link to="/skills" className={`menu-item ${skillsClass}`}>
                    Skills
                </Link>
                <Link to="/contact" className={`menu-item ${contactClass}`}>
                    Contact
                </Link>

                {/* Above Link component has handled routing at Client Side which prevent page from refreshing */}
         </Menu>
    ) 
    }
   
}
export default withRouter(NavBar)  //here withRouter will hold navbar history


//Other way of access to history object by creating our own custom history object .It is used while working with Redux


//Programmatic Navigation :
//Scenario where routing should be changes according to scenario without user intervention

//Not every time user will click on button to change the page
//For eg. : showing profile after sign in was successfull or removing splash screen after 2 sec

//React router gives us provision of navigating programmatically
//We can use history obj to go back or to go to a specific page



