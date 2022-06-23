import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faHtml5, faCss3, faEnvira, faCodiepie, faCuttlefish, faJsSquare, faBootstrap } from '@fortawesome/free-brands-svg-icons';
const projects = require('./project.json');


const Project = () => {
   return (
      <>
         <div className='container project-cont'>
            <div className='project-heading'><span>Projects</span></div>
            <div className='row'>
               {projects.map((e) => {
                  return <div className="card-group my-3" style={{ width: "27.5rem" }} key={e.id}>
                     {/*<div className="card">
                           <img src={process.env.PUBLIC_URL + e.image} className="card-img-top" alt="..." />
                           <div className="card-body">
                              <h5 className="card-title">{e.name}</h5>
                              <p className="card-text">{e.description}</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                           </div>
                        </div> */}

                     <div className="card">
                        <img src={process.env.PUBLIC_URL + e.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title">{e.name}</h5>
                           {/* <p className="card-text">{e.description}</p> */}
                           <div className="accordion" id="accordionPanelsStayOpenExample">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                       Description
                                    </button>
                                 </h2>
                                 <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" style={{
                                    height: "340px" }}>
                                    <div className="accordion-body card-text" style={{
                                    height: "350px" }}>
                                       {/* <strong>This is the second item's accordion body.</strong>*/}  {e.description}
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                       TechStack - Used
                                    </button>
                                 </h2>
                                 <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body card-text">
                                       {/* <strong>This is the second item's accordion body.</strong>*/}
                                       <div className='row row-hover '>
                                          {e.Tech.map((elem) => {
                                             return <div className='col'>
                                                <FontAwesomeIcon icon={elem.icon} />
                                                {/* <i class='fab fa-codiepie' style={{fontSize:'48px',color:'rgb(90 90 231)'}}> C++ </i> */}
                                             </div>
                                          })}

                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       My Learnings
                                    </button>
                                 </h2>
                                 <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                    <div className="accordion-body card-text">
                                       {/* <strong>This is the second item's accordion body.</strong>*/} {e.Learning.map((elem) => {
                                          return <p>{elem}</p>
                                       })}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <a href={e.url} className="btn btn-primary my-5">Click Here to Visit</a>
                        </div>
                        <div className="card-footer">
                           <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                     </div>
                  </div>
                  {/* </div> */ }
               })}
            </div>
            <div style={{height:"250px"}}> </div>
         </div>

      </>
   )
}

export default Project;