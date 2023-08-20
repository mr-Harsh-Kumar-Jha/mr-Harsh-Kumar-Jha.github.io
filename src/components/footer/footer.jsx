import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <div className='waves'>
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
      </div>
      <a href="#" className='footer__logo'>Harsh</a>
      <ul className="permalinks">
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
         <a href="https://www.instagram.com/_mr_h_a_r_s_h_j_h_a/"><FiInstagram/></a>
         <a href="https://twitter.com/Harshku79928569"><IoLogoTwitter/></a>
         <a href="https://github.com/mr-Harsh-Kumar-Jha"><FaGithub/></a>
         <a href="https://www.linkedin.com /in/harsh-jha-457707203/"><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
         <small>&copy; harshjha.vercel.app . All rights Reserved .</small>
      </div>
    </footer>
  )
}

export default Footer