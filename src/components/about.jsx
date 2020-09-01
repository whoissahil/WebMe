import React, { Component } from 'react'

import { BsCodeSlash } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";




export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">
                        <span>About Me</span>
                      </span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p className="myContent">
                        I am a Computer Science Engineer from BITS Pilani, Dubai
                        Campus. A business-focused individual who aspires to
                        contribute through my experience in Data Science and
                        Analytics. I have experience in Full Stack Web
                        Development / App Development and have proficiency in
                        more than five computer languages including Python,
                        JavaScript, C/C++ and more.{" "}
                      </p>
                      <p className="myContent">
                        Good with management skills and public speaking. I've
                        also worked across a wide array of industry 4.0
                        technologies including Big Data, Blockchain, machine
                        learning, AI, AR, and IoT. Basically, While ( ! (
                        succeed = try() ) );{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <BsCodeSlash class="padMe" size="2em" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building Web Apps and Website
                      using JavaScript, React, HTML, CSS, Django, Flask, and MEAN stack.
                      Check my <a href="https://github.com/whoissahil" target="_blank" rel="noopener noreferrer">💻 Projects Mayhem</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <img className="padOnMobile" style={{height:'2.5em'}} src="icons/svg/025-neural.svg" alt="Data Science Icon" />
                  </span>
                  <div className="desc">
                    <h3>Data Science &amp; Analytics</h3>
                    <p>
                      Now I'm getting my hands dirty with Data Science &amp; Analytics.
                      View my certifications on <a href="https://www.coursera.org/user/e997007a6d05140b8d97e48fbbb69fee" target="_blank" rel="noopener noreferrer">Coursera</a> and my badges on <a href="https://www.youracclaim.com/users/whoissahil/badges" target="_blank" rel="noopener noreferrer">Acclaim</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <MdDeveloperMode class="padMe" size="2em" />
                  </span>
                  <div className="desc">
                    <h3>Mobile App Development</h3>
                    <p>
                      I have also developed few hyrid apps for both Android and iOS 
                      for Hackathons and College Projects using XCode and Android Studio.
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
