
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

   const myStyle = {
      backgroundImage:
         "url('https://as2.ftcdn.net/v2/jpg/03/15/25/45/1000_F_315254526_BguE2UPiesByZ4CA7HQoMAASbWeltDIv.jpg')",
      minheight: '100vh',
      // marginTop:'-70px',
      // fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
   };

   const myStyle2 = {
      backgroundImage:
         "url('https://images.unsplash.com/photo-1653941796655-98844505f783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTA0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60')",
      minheight: '100vh',  //https://img.freepik.com/free-photo/night-star-sky-background-copy-spec-design-texture_10541-539.jpg?w=1800
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
         <section style={myStyle}>
            <Home />
         </section>
         <section>
            <About/>
         </section>
         <section style={myStyle2}>
            <TechStack/>
         </section>
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
