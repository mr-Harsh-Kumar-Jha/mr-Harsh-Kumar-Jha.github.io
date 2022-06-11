import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode , faHtml5, faCss3 , faEnvira ,faCodiepie ,faCuttlefish ,faJsSquare } from '@fortawesome/free-brands-svg-icons';

const TechStack = () => {
   return (
      <>
         <div className='container start-about'>
            <div className='container'>
               <div className='tech-stack-heading'>
               <h1 className="font-weight-bold-techstack " >Tech Stack</h1>
               </div>
               <div className='container techstack-maincontent1'>
                  <div className='row row-hover '>
                     <div className='col'><FontAwesomeIcon icon={faCuttlefish} className=' facebookLogo' style={{fontSize:'48px',color:'rgb(7 93 228)'}} /><span style={{fontSize:'48px',color:'rgb(7 93 228)'}}> C</span>
                     {/* <i class='fab fa-cuttlefish' style={{fontSize:'48px',color:'rgb(7 93 228)'}}> C </i> */}
                     </div>
                     <div className='col'>
                     <FontAwesomeIcon icon={faCodiepie} className=' facebookLogo' style={{fontSize:'48px',color:'rgb(90 90 231)'}} />  <span style={{fontSize:'48px',color:'rgb(90 90 231)'}}> C++</span>
                     {/* <i class='fab fa-codiepie' style={{fontSize:'48px',color:'rgb(90 90 231)'}}> C++ </i> */}
                     </div>
                     <div className='col'>
                     <FontAwesomeIcon icon={faHtml5} className=' facebookLogo' style={{fontSize:'48px',color:'red'}} />  <span style={{fontSize:'48px',color:'red'}}> HTML</span>
                     {/* <i class='fab fa-html5' style={{fontSize:'48px',color:'red'}}> HTML</i> */}
                     </div>
                     <div className='col'>
                     <FontAwesomeIcon icon={faCss3} className=' facebookLogo' style={{fontSize:'48px',color:'rgb(76 153 238)'}} />  <span  style={{fontSize:'48px',color:'rgb(76 153 238)'}}> CSS</span>
                     {/* <i class='fab fa-css3' style={{fontSize:'48px',color:'rgb(76 153 238)'}}> CSS</i> */}
                     </div>
                  </div>
                  <div className='row mt-5'>
                  <div className='col'>
                  <FontAwesomeIcon icon={faJsSquare} className=' facebookLogo' style={{fontSize:'48px',color:'yellow'}} />  <span style={{color:'yellow',fontSize:'48px'}}> JavaScript</span>
                     {/* <i class='fab fa-js-square' style={{fontSize:'48px',color:'yellow'}}> JavaScript</i> */}
                     </div>
                     <div className='col'>
                     <FontAwesomeIcon icon={faReact} className=' facebookLogo' style={{fontSize:'48px',color:'rgb(112 240 230)'}} />  <span style={{fontSize:'48px',color:'rgb(112 240 230)'}}> React.js</span>
                     {/* <i class='fab fa-react' style={{fontSize:'48px',color:'rgb(112 240 230)'}}> React.js</i> */}
                     </div>
                     <div className='col'>
                     <FontAwesomeIcon icon={faNode} className=' facebookLogo' style={{fontSize:'48px',color:'green'}} />  <span style={{fontSize:'48px',color:'green'}}> Node.js</span>
                     {/* <i class='fab fa-node' style={{fontSize:'48px',color:'green'}}> Node.js</i> */}
                     </div>
                     <div className='col'>
                     <FontAwesomeIcon icon={faEnvira} className=' facebookLogo' style={{fontSize:'48px',color:'rgb(57 231 57)'}} />  <span style={{fontSize:'48px',color:'rgb(57 231 57)'}}> MongoDB </span>
                     {/* <i class='fab fa-envira' style={{fontSize:'48px',color:'rgb(57 231 57)'}}> MongoDB</i> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default TechStack;
