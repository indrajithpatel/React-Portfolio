import React from "react";
const About = ({ data }) => {
  if (data) {
    var profilepic = "images/" + data.image;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Indrajith Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Hello! My name is Indrajith based in Bangalore and currently working
            at <a href="https://www.informatica.com/in/">INFORMATICA</a>{" "}
            .Passionate and enthusiastic <strong> Front-end Developer </strong>{" "}
            with a Bachelor's Degree and over 7+ years of
            professional experience in delivering device agnostic web
            applications. As a Front End developer I've worked both with small
            and large scale industries to help build & scale their companies. I
            describe myself as a passionate developer who loves to code and also
            explore new technologies. In my free time, you can find me either
            jogging or binge-watching
          </p>
          <p>The technologies I have been working recently</p>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>React</li>
            <li>Jest</li>
            <li>CSS3 ( Sass )</li>
            <li>Redux</li>
            <li>Cypress</li>
            <li>JavaScript ( ES6 )</li>
            <li>TypeScript</li>
            <li>Firebase</li>
            <li>Responsive Web</li>
            <li>Node.js</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
