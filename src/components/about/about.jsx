import React from 'react'
import Me from "../../Assets/harsh9.png";
import SoftwareEngg from "../../Assets/Softwareengg.svg"
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css'

const About = ({ innerRef }) => {

   return (
      <section id="about" ref={innerRef}>
         <h5>Get to Know</h5>
         <h2>About Me</h2>
         <div className="container about__container">
            <div className="about__me">
               <div className="about__me-image">
                  <img src={Me} alt="About Images" />
               </div>
            </div>

            <div className="about__content">
               <div className="about__cards">
                  <article className='about__card'>
                     <FaAward className='about__icon' />
                     <h5>Experience</h5>
                     <small>6+ Months Working</small>
                  </article>
                  <article className='about__card'>
                     <FiUsers className='about__icon' />
                     <h5>Clients</h5>
                     <small> 1 Client</small>
                  </article>
                  <article className='about__card'>
                     <VscFolderLibrary className='about__icon' />
                     <h5>Projects</h5>
                     <small>2+ Completed</small>
                  </article>
               </div>
               <div className='about__card-textCont'>
                  <strong>Hi ! </strong>
                  <p>This is Harsh . I'm a Junior from India and currently in my Second year Undergrad . I am ' Competative Programmer ' , ' Open-Source Enthusiast ' and ' Learner ' . I'm deeply passionate about Software Development and Innovation and I believe in the power of Community .</p>
               </div>
               <a href="#contact" className='btn btn-primary' >Let's Talk</a>
               <div className="soft__img" >
                  <img  src={SoftwareEngg} alt="SoftwareEngg"/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About