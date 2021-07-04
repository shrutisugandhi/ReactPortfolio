import React from 'react';
import './Contact.css'
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to connect with me .'
            />
             {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                        id="email"

                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        id="msg"
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                    <a href='mailTo:shrutisugandhi007@gmail.com'> Send Email</a>   
                    </button>
                </form>
            </div>
             {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/shrutisugandhi' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/shruti-sugandhi-800482a3/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                </div>
            <Footer
                phrase='Read more '
                toAddress='/about'
              
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    )
}

export default Contact