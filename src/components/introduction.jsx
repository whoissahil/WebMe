import React, { Component } from 'react'
// import { FaTasks, FaGithub, FaLinkedinIn, FaTwitter, FaMediumM } from "react-icons/fa";
import Typist from "react-typist";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-12 col-md-pull-12 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi, I'm Sahil</h1>
                          <h2><a href="https://docs.google.com/document/d/1eQoTG7tInq4b5CXQ6gOepA0_LCQz9eaP7YY-W3jxxyQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">📄 Brag-Sheet (CV for Normal People)</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-12 col-md-pull-12 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Code &amp; Coffee</h1>
                          <h2><a href="https://github.com/whoissahil" target="_blank" rel="noopener noreferrer">💻 Projects Mayhem</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-12 col-md-pull-12 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Happy to Connect :) </h1>
                          <h2><a  href="https://www.linkedin.com/in/whoissahil/" target="_blank" rel="noopener noreferrer">🤝 Hook it Up</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
