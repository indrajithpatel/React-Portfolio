import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  const getInTouch = () => {
    window.open(
      `mailto:${data.email}`
    );
  };

  if (data) {
    var name = data.name;  
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Work
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>
              {name ? `Hello, I'm ${name}` : null}
            </TypeWriter>
          </h1>
          <h3>I build things for the web</h3>
          <hr />
        </div>
        <button type="submit" style={{background:"#418841"}} onClick={getInTouch}>Get in Touch</button>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
