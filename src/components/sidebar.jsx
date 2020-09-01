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
              <span id="colorlib-email"><a href="mailto: me@whoissahil.com"><span>📧</span> me@whoissahil.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home"><span>🧑🏽‍💻</span> Introduction</a></li>
                  <li><a href="#about" data-nav-section="about"><span>🙋🏽‍♂️</span> About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline"><span>💼</span> Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <ul>
                  <li><a href="https://docs.google.com/document/d/1eQoTG7tInq4b5CXQ6gOepA0_LCQz9eaP7YY-W3jxxyQ/edit?usp=sharing" target="_blank"><FaTasks size="1em" /> View CV</a></li>
                </ul>
            </nav>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <ul>
                  <li><span> 🔎</span> Find me on - </li>
                  <li><a href="https://twitter.com/whoissahil" target="_blank" rel="noopener noreferrer"><FaTwitter size="1em" />/whoissahil</a></li>
                  <li><a href="https://www.linkedin.com/in/whoissahil/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="1em" />/whoissahil</a></li>
                  <li><a href="https://github.com/whoissahil" target="_blank" rel="noopener noreferrer"><FaGithub size="1em" />/whoissahil</a></li>
                  <li><a href="https://medium.com/@whoissahil" target="_blank" rel="noopener noreferrer"><FaMediumM size="1em" />/whoissahil</a></li>
                </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with ❤ and 🍺
              </small></p>
            </div>
          </aside>
          </div>
        </div>
    )
  }
}
