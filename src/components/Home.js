import React from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import { useState } from "react";
import Typewriter from "typewriter-effect";


const Home = () => {
   const [istoggle, setistoggle] = useState(true);
   useSpring({ config: config.default })
   const fade = useTransition(istoggle,
      {
         from: { x: -100, y: -100, z: -1000, opacity: 0 },
         enter: { x: 0, y: 0, z: 0, opacity: 0.7 },

         // leave: { x: 0, y: 0, z: 0, opacity:1 },
         delay: 800,
         duration: 5,
         // reverse:true
      }

   )
   const rotate = useSpring({
      loop: true,
      to: [
         { rotateZ: 360, x: 0, opacity: 1 },
         { rotateZ: 360, x: 200, opacity: 1 },
         { rotateZ: 0, x: 0, opacity: 1 },
         { rotateZ: 0, x: -200, opacity: 1 }

      ],
      from: { rotateZ: 0, x: -200, opacity: 1 },
      config: {
         duration: 5500,
         bounce: 10,
      },

      delay: 1500,
   })
   return (
      <>
         <div className="container  d-column-flex " >
            <div className=" home-cont d-column-flex ">
               <div className="imageBrand text-center">

                  <animated.img src="https://media-exp1.licdn.com/dms/image/C5603AQG_VXo3cWtkXA/profile-displayphoto-shrink_400_400/0/1629741517230?e=1658361600&v=beta&t=Qg9kOXLNKGQ1Q3VVBAlGM5HYJu1MGIT6w-XSx7mYO_s" style={rotate} />

               </div>
               <div className="textBrand d-column-flex ">

                  {fade((style, item) =>
                     item ? <animated.h1 className="text-center brand" style={style}>Hey! This is Harsh Jha</animated.h1> : " "
                  )}
                  <Typewriter
                  options={{
                     autoStart:true,
                     loop: true,
                     delay: 100,
                     strings: [
                        "Welcome to My website ,",
                        " I am currently a First Year Undergrad .",
                        "2021 - 2025",
                     ]
                  }}
                   className="text-center brandpara" />
               </div>
            </div>
         </div>
      </>
   );
}
export default Home;

// onInit={ (typewriter) => {
//    typewriter
//    .typeString("Welcome to My website")
//    .pauseFor(1000)
//    .deleteAll()
//    .typeString(" I am currently a First Year Undergrad")
//    .pauseFor(1000)
//    .deleteAll()
//    .typeString("2021 - 2025")
//    .start();
// }}