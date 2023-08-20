import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi';

const Services = ({innerRef}) => {
   return (
      <section id='services' ref={innerRef}>
         <h5>What I Offer</h5>
         <h2>Services</h2>

         <div className="container service__container">
            <article className="service">
               <div className="service__head">
                  <h3>Frontend Development</h3>
               </div>

               <ul className="service__list">
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>We make user-friendly web interfaces that help improve user experience and increase customer engagement.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>We as a front end team specializes in creating intuitive user interfaces across all mobile devices.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Front-End Technolofies : <strong>React.Js</strong>,  <strong>JavaScript</strong> , <strong>HTML</strong> , <strong>CSS</strong></p>
                  </li>
               </ul>
            </article>
            {/* End of Frontend Development */}
            <article className="service">
               <div className="service__head">
                  <h3>Backend Development</h3>
               </div>

               <ul className="service__list">
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
               </ul>
            </article>
             {/* End of Backend Development */}
             <article className="service">
               <div className="service__head">
                  <h3>Fullstack Web Development</h3>
               </div>

               <ul className="service__list">
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
                  <li>
                     <BiCheck className='service__list-icon' />
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </li>
               </ul>
            </article>
         </div>
      </section>
   )
}

export default Services