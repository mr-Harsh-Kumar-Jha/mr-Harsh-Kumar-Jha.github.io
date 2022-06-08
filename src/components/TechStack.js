import React from 'react'
const TechStack = () => {
   return (
      <>
         <div className='container start-about'>
            <div className='container'>
               <h1 className="font-weight-bold-techstack " >Tech Stack</h1>
               <div className='container techstack-maincontent1'>
                  <div className='row row-hover '>
                     <div className='col'>
                     <i class='fab fa-cuttlefish' style={{fontSize:'48px',color:'rgb(7 93 228)'}}> C </i>
                     </div>
                     <div className='col'>
                     <i class='fab fa-codiepie' style={{fontSize:'48px',color:'rgb(90 90 231)'}}> C++ </i>
                     </div>
                     <div className='col'>
                     <i class='fab fa-html5' style={{fontSize:'48px',color:'red'}}> HTML</i>
                     </div>
                     <div className='col'>
                     <i class='fab fa-css3' style={{fontSize:'48px',color:'rgb(76 153 238)'}}> CSS</i>
                     </div>
                  </div>
                  <div className='row mt-5'>
                  <div className='col'>
                     <i class='fab fa-js-square' style={{fontSize:'48px',color:'yellow'}}>JavaScript</i>
                     </div>
                     <div className='col'>
                     <i class='fab fa-react' style={{fontSize:'48px',color:'rgb(112 240 230)'}}>React.js</i>
                     </div>
                     <div className='col'>
                     <i class='fab fa-node' style={{fontSize:'48px',color:'green'}}>Node.js</i>
                     </div>
                     <div className='col'>
                     <i class='fab fa-envira' style={{fontSize:'48px',color:'rgb(57 231 57)'}}>MongoDB</i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default TechStack;
