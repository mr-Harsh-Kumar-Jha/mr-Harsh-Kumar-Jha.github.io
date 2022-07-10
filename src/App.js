
import './App.css';
import Nav from './components/nav';
import Home from './components/Home';
import About from './components/about';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import Project from './components/project/project';

// import { useSpring, config, animated } from "react-spring";
// import { useState } from "react";
// const url = (name, wrap = true) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
   // const [flip, set] = useState(false)
   // const { x } = useSpring({
   //    reset: true,
   //    reverse: flip,
   //    from: { x: 0 },
   //    x: 1,
   //    delay: 200,
   //    config: config.molasses,
   //    onRest: () => set(!flip),
   // })

   const background1 = process.env.PUBLIC_URL + "/images/background1.jpeg";
   const background2 = process.env.PUBLIC_URL + "/images/background2.webp";
   const background3 = process.env.PUBLIC_URL + "/images/background3.jpeg"
   const myStyle = {
      backgroundImage:
         `url(${background2})`,
      minheight: '100vh',
      // marginTop:'-70px',
      // fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
   };

   const myStyle2 = {
      backgroundImage:
      `url(${background3})`,
      minheight: '100vh',  //https://img.freepik.com/free-photo/night-star-sky-background-copy-spec-design-texture_10541-539.jpg?w=1800
      // marginTop:'-70px',
      // fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
   };

   const myStyle3 = {
      backgroundImage:
         `url(${background1})`,
      minheight: '100vh',
      // marginTop:'-70px',
      // fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
   };

   return (
      <>
         <Nav />
         {/* <div className='containerSVG'>
            <animated.svg
               style={{ margin: 20, width: 1280, height: 780 , zIndex:-1, position:'absolute'}}
               viewBox="0 0 45 44"
               strokeWidth="0.2"
               fill="white"
               stroke="rgb(45, 55, 71)"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeDasharray={156}
               strokeDashoffset={x.to(x => (1 - x) * 156)}>
               <polygon points="22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994">
               </polygon>
            </animated.svg>
         </div> */}
         <section style = {myStyle3}>
            <Home />
         </section>
         <div style = {myStyle}>
         <section >
            <About/>
         </section>
         <section >
            <TechStack/>
         </section>
         </div>
         <section >
            <Project/>
         </section>
         <div className='container-fluid'>
            <Footer/>
         </div>

      </>
   );
}
// {
//    backgroundImage:url('stars'),
//    backgroundSize: 'cover' ,
//     background: '#253237',
//     color:'white'

export default App;
