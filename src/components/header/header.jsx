import React, { useState, useEffect } from 'react'
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';
import Me from '../../Assets/harsh6.png';

const Header = ({ innerRef }) => {
   const arrayWords = ["Fullstack Developer", "Competitive Programmer", "Software Engineer"]
   const Period = 2000;
   const [Delta, setDelta] = useState(300 - Math.random() * 100);
   const [text, setText] = useState(' ');
   const [isDeleting, setisDeleting] = useState(false);
   const [loop, setLoop] = useState(0);

   useEffect(() => {
      let ticker = setInterval(() => {
         typeWriter();
      }, Delta);

      return () => { clearInterval(ticker) };
   }, [text])

   const typeWriter = () => {
      let i = loop % arrayWords.length;
      let fullText = arrayWords[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
         setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
         setisDeleting(true);
         setDelta(Period);
      } else if (isDeleting && updatedText === '') {
         setisDeleting(false);
         setLoop(loop + 1);
         setDelta(500);
      }
   }


   return (
      <header ref={innerRef}>
         <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Harsh Jha</h1>
            <h5 className="text-light" style={{color:'var(--color-primary)' , fontSize:'1.5rem'}}>
               {text}<span> | </span>
            </h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
               <img src={Me} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
         </div>
      </header>
   )
}

export default Header