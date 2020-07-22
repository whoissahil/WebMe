import React, { Component } from 'react'

// import { medium } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTasks, FaGithub, FaLinkedinIn, FaTwitter, FaMediumM } from "react-icons/fa";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Sahil Sharma</a></h1>
              <span id="colorlib-email"><i className="icon-mail"></i><a href = "mailto: me@whoissahil.com">me@whoissahil.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://twitter.com/whoissahil" target="_blank" rel="noopener noreferrer"><FaTwitter size="2em"/></a></li>
                <li><a href="https://www.linkedin.com/in/whoissahil/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="2em" /></a></li>
                <li><a href="https://github.com/whoissahil" target="_blank" rel="noopener noreferrer"><FaGithub size ="2em"/></a></li>
                <li><a href="https://medium.com/@whoissahil" target="_blank" rel="noopener noreferrer"><FaMediumM size="2em"/></a></li>
                <li><a href="https://docs.google.com/document/d/1eQoTG7tInq4b5CXQ6gOepA0_LCQz9eaP7YY-W3jxxyQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><FaTasks size="2em"/></a></li>

              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                <br></br>
                <br></br>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i>
              </small></p>
            </div>
          </aside>
          </div>
        </div>
    )
  }
}
