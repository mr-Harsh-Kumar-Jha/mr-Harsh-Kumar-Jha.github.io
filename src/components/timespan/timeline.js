import React , {useState} from "react";
import HorizontalTimeline from "react-horizontal-timeline";
// import TimelineElement from "./timelineElements";
const VALUES = [
   '2022-03-01',
   '2021-08-01',
   '2019-05-01',
];

const TimelineElement = [
   {
      id: 1,
      company: "DevKraft",
      position: "Web Developer",
      location: "Pune",
      date: "March 2022 - Present"

   },
   {
      id: 2,
      company: "Abhishek Vidyalayam",
      position: "Class: 11th - 12th",
      location: "Pune",
      date: "August 2019 - August 2021"
   },
   {
      id: 3,
      company: "Dr. D.Y. Patil institute of Technology",
      position: "Class: 10th",
      location: "Pune",
      date: "August 2018 - August 2019"
   }
];

const Timeline = () => {
//   state = { value: 0, previous: 0 };
const[value,setValue] = useState(0);
// const[previous,setPrevious] = useState(0);

    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '80%', height: '150px', margin: '0 auto' , marginTop:'20px'}}>
          <HorizontalTimeline
            index={value}
            indexClick={(index) => {
              setValue(index)
            //   setPrevious(value)
            }}
            values={ VALUES } />
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}
            <div className="container flex-column">
              <div className="timeline-heading"><h1>{TimelineElement[value].company}</h1></div>
              <div> <h4>Position: {TimelineElement[value].position}</h4></div>
              <div>  <span>Location: {TimelineElement[value].location} </span></div>
              <div> <span>Date: {TimelineElement[value].date}</span></div>
            </div>
        </div>
      </div>
    );
}
export default Timeline;