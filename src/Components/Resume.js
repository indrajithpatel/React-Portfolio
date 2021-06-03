import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var work = data.work.map(function (work) {
      return (
        <div style = {{display : "flex"}}>
          <img style = {{height : "50px", marginRight : "15px"}} src={work.icon} alt="This is my company"></img>
          <div key={work.company}>
          <h3>{work.company}</h3>
          <span>{work.location}</span>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
        </div>
       
      );
    });
  }

  return (
    <section id="experience">
        <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
    </section>
  );
};

export default Resume;
