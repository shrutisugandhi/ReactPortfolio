import React from 'react';
import './Skills.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import skillsVector from './../../assets/skills_vector.png';
import { skillList } from '../../data/skillsData';
const Skills = () => {
    return (
        <div className='section-container'>
            <Header heading="My Skills"
            details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!" />

            <div className="skill-card-container">
                
              { 
                skillList.map((skill) => {
                    return (
                        
                        <div key={skill.skillName} className="skill-card skill">
                            <img src={skill.skillUrl} alt="skill"></img>
                            <p>{skill.skillName}</p>
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
                     <Footer phrase='Get in touch.' toAddress='/contact' />

        </div>
    )
}

export default Skills