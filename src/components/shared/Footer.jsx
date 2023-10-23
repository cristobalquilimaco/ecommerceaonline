import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='wave'></div>
      <ul className='list_footer'>
        <li><a href="https://github.com/cristobalquilimaco"><i className='bx bxl-github'></i></a></li>
        <li><a href="https://www.linkedin.com/in/cristobal-quilimaco-119b4324b/"><i className='bx bxl-linkedin-square'></i></a></li>
        <li><a href="https://portfolioff.netlify.app/"><i className='bx bxs-briefcase'></i></a></li>
      </ul>
      <a href="mailto:quilimacox1@gmail.com"><p className='email_footer'>quilimacox1@gmail.com</p></a>
    </div>
  );
};

export default Footer;