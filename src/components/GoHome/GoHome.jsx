import React from 'react';
import './GoHome.css'
import { withRouter } from 'react-router';
import homeIconwhite from './../../assets/home_white.png'
import homeIconblack from './../../assets/home_black.png'

//This Component is used to teach Programmatically Navigation.
//But this can be done using intentional navigation using < Link > 
//but we have used history object, to represent its usage


class GoHome extends React.Component{
    navigateToHome = () => {
        const { history } = this.props;
        console.log(history);
        setTimeout(() => {                 //To redirect after 2 sec
            console.log("2 sec completed");
            history.push("/")   //this will redirect to home page from any component
        }, 1000);
                
   
   
    }
    render() {
        const { location } = this.props;
        const whiteButton = location.pathname === "/";      //when on home page icon should be black and on another pages icon should be white
        return (
            <button onClick={this.navigateToHome}            
             className={`go-home-btn ${whiteButton ? 'white-bg':'gradient-bg'}`}>
                
                <img src={whiteButton ? homeIconblack : homeIconwhite} alt="homeIcon" className="home-icon"/>


             </button>

                

           

        )
    }
}
export default withRouter(GoHome)