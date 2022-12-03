/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Neeraj Kumar</h6>
            <h3>Web Developer</h3>
            <p>
              Hard-working, passionate, innovative, quality-focused & experienced web developer. Have expertise in various programming languages and technologies but not limited to HTML, CSS, JavaScript, JQuery, Reactsjs, Nodesjs, Expressjs, MongoDB, Firebase, SQL, GitHub, REST APIs, Bootstrap, Material UI, Figma, & Docker.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
