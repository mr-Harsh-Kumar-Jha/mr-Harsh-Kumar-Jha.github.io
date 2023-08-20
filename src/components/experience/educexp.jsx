import React from 'react'
import exp from './eduexp.json'
import './educexp.css'

const WorkExpTimeline = () => {
   return (
      <div className='container timeline__container'>
         {exp.map((data, ind) => {
            return (
               <div className='timeline__item' key={ind}>
                  <div className="timeline__item-content">
                     <div className='timeline__item-content-head'>
                        <h1 className="tag">
                           {data.College}
                        </h1>
                        <time>{data.tenure}</time>
                     </div>
                     <h2 >{data.degreeType}</h2>
                     <small><strong>Location : </strong>{data.location}</small>
                     <span className="circle"><img src={data.logo} alt={data.comName} /></span>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default WorkExpTimeline