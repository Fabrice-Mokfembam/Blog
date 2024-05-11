import React from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer_container'>
      <h3>Copyright@2024.All Rights Reserved</h3>
      <div className="social_media_links">
        <FaWhatsapp className='footer_icons'/>
        <FaLinkedin className='footer_icons'/>
        <FaEnvelope className='footer_icons'/>
      </div>
    </div>
  );
}

export default Footer;