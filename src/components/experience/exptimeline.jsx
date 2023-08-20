import React from 'react'
import exp from './exp.json'
import './exptimeline.css'

const ExpTimeline = () => {
   return (
      <div className='container timeline__container'>
         {exp.map((data, ind) => {
            return (
               <div className='timeline__item' key={ind}>
                  <div className="timeline__item-content">
                     <div className='timeline__item-content-head'>
                        <h1 className="tag">
                           {data.comName}
                        </h1>
                        <time>{data.tenure}</time>
                     </div>
                     <h2 >{data.jobTitle}</h2>
                     <ul >{data.techStack.map((tech,ind2) => {
                        return (
                           <li key={ind2}>{tech}</li>
                        )
                     })}</ul>
                     <small><strong>Location : </strong>{data.location}</small>
                     <span className="circle"><img src={data.logo} alt={data.comName} /></span>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default ExpTimeline