import Header from '../components/header/header'
import About from '../components/about/about'
import Experience from '../components/experience/experience'
// import Services from '../components/services/services'
import Portfolio from '../components/portfolio/portfolio'
// import Testimonials from '../components/testimonials/testimonials'
import Contact from '../components/contact/contact'

import React ,{useRef} from 'react'

const MainCompo = ({setactiveNav}) => {
   const ref1 = useRef("");
   const ref2 = useRef("");
   const ref3 = useRef("");
   const ref4 = useRef("");
   const ref5 = useRef("");
   // const ref6 = useRef("");
   // const ref7 = useRef("");

   document.addEventListener("scroll", ()=>{
      // console.log(ref2.current.offsetTop , window.scrollY);
      if(window.scrollY>=ref1.current.offsetTop-97 && window.scrollY<ref2.current.offsetTop-97)
              setactiveNav("#");
      if(window.scrollY>=ref2.current.offsetTop-97  && window.scrollY<ref3.current.offsetTop-97)
              setactiveNav("#about");
      if(window.scrollY>=ref3.current.offsetTop-97 && window.scrollY<ref4.current.offsetTop-97)
              setactiveNav("#experience");
      // if(window.scrollY>=ref4.current.offsetTop-97 && window.scrollY<ref7.current.offsetTop-97)
      //         setactiveNav("#services");
      if(window.scrollY>=ref5.current.offsetTop-97)
              setactiveNav("#contact");
   });

   return (
      <>
         <Header innerRef={ref1}/>
         <About innerRef={ref2}/>
         <Experience innerRef={ref3}/>
         {/* <Services innerRef={ref4}/> */}
         <Portfolio innerRef={ref4}/>
         {/* <Testimonials innerRef={ref6}/> */}
         <Contact innerRef={ref5}/>
      </>
   );
}

export default MainCompo;
