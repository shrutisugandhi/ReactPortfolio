import React from 'react';
import './Projects.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import skillsVector from './../../assets/skills_vector.png';
import {projectsData} from '../../data/projectsData'
const Projects = () => {
    return (
        <div className='section-container'>
            <Header heading="My Projects"
            details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!" />

        
            <div className="project-cards-container">
                
              { 
                projectsData.map((project) => {
                    return (
                        
                        <div key={project.projectName} className="project-card ">
                            <div className="image-container">
                                <a href={project.projectUrl} className="project-external-link">
                                <img src={project.imageUrl} alt="skill" className="image-container"/>
                                </a>
                        </div>
                           
                             <div className='project-details-container'>
                                <h2 className='project-heading'>{project.projectName}</h2>
                                <p className='project-details'>{project.projectDescription}</p>
                                <a href={project.videoUrl} className='project-yt-link'>
                                    Watch More!
                                </a>
                            </div>
                        </div>
                    )
                })
              
            }  
        </div>
        <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
             <Footer phrase='View My Skills.' toAddress='/skills' />
        </div>
    )
}

export default Projects