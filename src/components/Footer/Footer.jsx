import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = ({phrase,link,toAddress}) => {
    return (
        <div className='footer-link'>
        <Link to={toAddress} className='footer-link-element'>Get in Touch</Link>
        </div>
    )
}
export default Footer;