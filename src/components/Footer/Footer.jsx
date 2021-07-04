import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = ({phrase,toAddress}) => {
    return (
        <div className='footer-link'>
        <Link to={toAddress} className='footer-link-element'>{phrase}</Link>
        </div>
    )
}
export default Footer;