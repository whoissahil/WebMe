import React, { Component } from 'react'
// import { FaTasks, FaGithub, FaLinkedinIn, FaTwitter, FaMediumM } from "react-icons/fa";

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
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Namastey, <br />I'm Sahil</h1>
                          <p ><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1eQoTG7tInq4b5CXQ6gOepA0_LCQz9eaP7YY-W3jxxyQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</a></p>
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
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Code &amp;<br /> Coffee</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/whoissahil" target="_blank" rel="noopener noreferrer">View Projects</a></p>
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
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Happy to <br/>Connect :) </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/whoissahil/" target="_blank" rel="noopener noreferrer"> Connect with me</a></p>
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
