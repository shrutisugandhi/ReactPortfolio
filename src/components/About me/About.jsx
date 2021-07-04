import React from 'react';
import './About.css'
import aboutVector from './../../assets/about_vector.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        
        <div className='section-container'>
            <Header heading='About Me' details='UI Developer' />
           <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Developer</h3>
                    <p className='about-details'>
                        UI Developer with Experience of Developing Web application using various technology stack .
                        Possess Leadership Skills along with Good Team Player
                        
                    </p>

                    

                    
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer phrase='Check out my' link='Projects' toAddress='/projects'/>
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>)
}

export default About