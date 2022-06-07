import React from "react";
import Typewriter from "typewriter-effect";
import { useSpring, animated, config } from "react-spring";
import Timeline from "./timespan/timeline";

const About = () => {
   useSpring({ config: config.default })
   const blink = useSpring({
      loop: { reverse: true },
      from: { opacity: 1 },
      config: {
         duration: 2500,
      },
      to: { opacity: 0 },
      delay: 2000,
   })

   const { transform1, transform2, transform3 } = useSpring({
      from: { transform1: 0, transform2: 0, transform3: 0 },
      config: {
         duration: 1500,
      },
      transform1: 75,
      transform2: 65,
      transform3: 70,

   })

   return (
      <>
         <div className="container start-about">
            <div className="box-Heading">
               <h2 className="font-weight-bold">ABOUT : </h2>
            </div>
            <div className="container  box">

               <div className="container box-content">
                  <animated.span className="box-welcome" style={blink}> HELLO !! </animated.span>
                  <Typewriter
                     options={{
                        strings: [
                           "My name is Harsh. I’m a junior from India(🇮🇳) ,",
                           "I'm an Open-Source Enthusiast, a Learner & a Competative Programmer ,",
                           "I'm deeply passionate about software development & innovations.",
                           " I believe in the power of community"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 200,
                     }}
                  />
               </div>
               <div className="container box-bar">
                  <span className="box-bar-header"> My Skill's </span>
                  <div className="container box-bar-innerContent">
                     <div className="box-bar-1 ">
                        <span>Competative Programming</span>
                        <div className="progress">
                           <animated.div className="progress-bar" role="progressbar" style={{ width: transform1.to(transform1 => `${transform1}%`) }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</animated.div>
                        </div>
                     </div>

                     <div className="box-bar-2 mt-3">
                        <span>Web Development</span>
                        <div className="progress">
                           <animated.div className="progress-bar" role="progressbar" style={{ width: transform2.to(transform2 => `${transform2}%`) }} aria aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</animated.div>
                        </div>
                     </div>

                     <div className="box-bar-3 mt-3">
                        <span>React</span>
                        <div className="progress">
                           <animated.div className="progress-bar" role="progressbar" style={{ width: transform3.to(transform3 => `${transform3}%`) }} aria aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</animated.div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            <div className="container mt-3">
               <Timeline />
            </div>

         </div>
      </>
   )
}
export default About;