import React, { useState } from 'react'
import './experience.css'
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { FaReact, FaHtml5, FaNodeJs, FaDocker, FaSass, FaAws } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedis, SiRabbitmq, SiDjango } from "react-icons/si";
import { SiBootstrap, SiMongodb, SiPostgresql , SiTailwindcss} from 'react-icons/si';
import { DiCss3, DiAngularSimple } from 'react-icons/di';
import ExpTimeline from './exptimeline';
import WorkExpTimeline from './educexp';

const Experience = ({ innerRef }) => {
   const [active, setActive] = useState("workExp");
   return (
      <section id='experience' ref={innerRef}>
         <h5>What Skills I have</h5>
         <h2>My Experience</h2>

         <div className="container experience__container">
            <div className="experience__frontend">
               <h3>Frontend Development</h3>
               <div className="experience__content">
                  <article className='experience__details'>
                     <FaHtml5 className='experience__details-icon' />
                     <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <DiCss3 className='experience__details-icon' />
                     <div>
                        <h4>CSS</h4>
                        <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <IoLogoJavascript className='experience__details-icon' />
                     <div>
                        <h4>Javascript</h4>
                        <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <FaReact className='experience__details-icon' />
                     <div>
                        <h4>React</h4>
                        <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <SiBootstrap className='experience__details-icon' />
                     <div>
                        <h4>BootStrap</h4>
                        <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <DiAngularSimple className='experience__details-icon' />
                     <div>
                        <h4>Angular</h4>
                        <small className="text-light">Begineer</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <FaSass className='experience__details-icon' />
                     <div>
                        <h4>SASS</h4>
                        <small className="text-light">Begineer</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <SiTailwindcss className='experience__details-icon' />
                     <div>
                        <h4>Tailwind CSS</h4>
                        <small className="text-light">Begineer</small>
                     </div>
                  </article>
               </div>
            </div>
            {/* End Of FrontEnd */}

            <div className="experience__backend">
               <h3>Backend Development</h3>
               <div className="experience__content">
                  <article className='experience__details'>
                     <FaNodeJs className='experience__details-icon' />
                     <div>
                        <h4>NodeJs</h4>
                        <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <SiDjango className='experience__details-icon' />
                     <div>
                        <h4>Django</h4>
                        <small className="text-light">Experienced</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <SiMongodb className='experience__details-icon' />
                     <div>
                        <h4>MongoDB</h4>
                        <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <AiOutlineConsoleSql className='experience__details-icon' />
                     <div>
                        <h4>SQL</h4>
                        <small className="text-light">Intermediate</small>
                     </div>
                  </article>
                  <article className='experience__details'>
                     <SiPostgresql className='experience__details-icon' />
                     <div>
                        <h4>PostgreSQL</h4>
                        <small className="text-light">Begineer</small>
                     </div>
                  </article>
               </div>
               {/* end of backend */}
            </div>
            {/* start of DevOps */}
            <div className="experience__DevOps">
                  <h3>DevOps</h3>
                  <div className="experience__content">
                     <article className='experience__details'>
                        <FaDocker className='experience__details-icon' />
                        <div>
                           <h4>Docker</h4>
                           <small className="text-light">Begineer</small>
                        </div>
                     </article>
                     <article className='experience__details'>
                        <SiRedis className='experience__details-icon' />
                        <div>
                           <h4>Redis</h4>
                           <small className="text-light">intermediate</small>
                        </div>
                     </article>
                     <article className='experience__details'>
                        <SiRabbitmq className='experience__details-icon' />
                        <div>
                           <h4>RabbitMQ</h4>
                           <small className="text-light">intermediate</small>
                        </div>
                     </article>
                     <article className='experience__details'>
                        <FaAws className='experience__details-icon' />
                        <div>
                           <h4>AWS</h4>
                           <small className="text-light">intermediate</small>
                        </div>
                     </article>
                  </div>
               </div>
               {/* end of DevOps */}
         </div>
         <div className='experience__buttons'>
            <button className={active === "workExp" ? "btn btn__active" : "btn"} onClick={() => setActive("workExp")}>Work Experience</button>
            <button className={active === "quali" ? "btn btn__active" : "btn"} onClick={() => setActive("quali")}>Qualification</button>
         </div>
         {active === "workExp" && <ExpTimeline />}
         {active === "quali" && <WorkExpTimeline />}
      </section>
   )
}

export default Experience