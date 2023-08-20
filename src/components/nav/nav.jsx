import { React, useState , useEffect} from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './nav.css';

const Nav = ({actNav}) => {
   const [activeNav, setactiveNav] = useState("#");
   useEffect(() => {
      setactiveNav(actNav)
   }, [actNav])

   return (
      <nav>
         <ul>
            <li onClick={() => setactiveNav("#")} className={activeNav === '#' ? 'active' : ' '}>
               <a href="#" >
                 <span className="icon"><AiOutlineHome /></span>
                 <span className="text">Home</span>
               </a>
            </li>
            <li onClick={() => setactiveNav("#about")} className={activeNav === '#about' ? 'active' : ' ' }>
               <a href="#about">
                  <span className="icon"><AiOutlineUser /></span>
                  <span className="text">About</span>
               </a>
            </li>
            <li onClick={() => setactiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ' '}>
               <a href="#experience" >
                  <span className="icon"><BiBook /></span>
                  <span className="text">Experience</span>
               </a>
            </li>
            <li onClick={() => setactiveNav("#services")} className={activeNav === '#services' ? 'active' : ' '}>
               <a href="#services" >
                  <span className="icon"><RiServiceLine /></span>
                  <span className="text">Service</span>
               </a>
            </li>
            <li onClick={() => setactiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ' '}>
               <a href="#contact" >
                 <span className='icon'> <BiMessageSquareDetail /></span>
                 <span className='text'>Contact</span>
               </a>
            </li>
            <div className="indicator"></div>
         </ul>
      </nav>
   )
}

export default Nav