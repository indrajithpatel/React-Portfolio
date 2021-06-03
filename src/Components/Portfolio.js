import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects, index) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <h2>{projects.title} </h2>
          <span>{projects.description}</span>
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
          <p>Technologies Used : React, Material UI, Firebase</p>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
       <div className="row portfolio">
        <div className="three columns header-col">
          <h1>
            <span>Personal Projects</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {projects}</div>
      </div>
    </section>
  );
};

export default Portfolio;
