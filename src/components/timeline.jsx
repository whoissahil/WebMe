import React, { Component } from 'react'


import { FaBriefcase, FaBookReader} from "react-icons/fa";

// demo
export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <FaBriefcase size="1em" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer @ DLX Holiday Homes Rental LLC <span>07/2020-Present</span></h2>
                        <p>
                          <li className="padLi">Designed the user experience for the website and finalize the technology stack for the consumer-facing digital channels.</li>
                          <li className="padLi">Solely developed the website for a sister company called <a href="https://www.servicedapartments.ae/" target="_blank" rel="noopener noreferrer">Serviced Apartments</a> using Wordpress. Handled the Designing, Developing, Digital Marketing, Google Analysis, Google Tag Manager, and SEO of the company.</li>
                          <li className="padLi">Created Landing Pages for specific projects which successfully increased the company's business by 20%.</li>
                          <li className="padLi">Created a website for a Property Maintenance Company which brought the business a wide number of new opportunities and increased the number of customers by 60%.</li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <FaBriefcase size="1em" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Web Developer @ Mpliphi Tech FZE <span>02/2019-06/2019</span></h2>
                        <p>
                          <li className="padLi">Developed a Mini-Program App on WeChat for a Real Estate startup catering to rental and sale for properties in Dubai.</li>
                          <li className="padLi">REST API and datamodel development in a Java/Spring MVC web application.</li>
                          <li className="padLi">Developed a responsive site along with a team of two for AmsportME and Bits Pilani based on PHP.</li>
                          <li className="padLi">Managed the User Acceptance Testing and roll out of the site for AmsportME and Bits Pilani</li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        {/* <i className="icon-pen2" /> */}
                        <FaBriefcase  size="1em" />
                      </div>
                      <div className="timeline-label">
                        <h2>Intern @ Web Development - Kemipex FZE <span>08/2018-01/2019</span></h2>
                        <p>
                          Successfully completed multiple project and implemented them which helped the company save time and increase their efficiency.
                          <li className="padLi">Studied the customer demands and characteristics through customer journey maps, transaction data etc. This data was used to segment the customers and the segmentation was used for developing marketing programs for retail outlets.</li>
                          <li className="padLi">Established an “Analytics cell” in the organization to utilize the vast amount of data captured by the company, churn the data, convert them into insights and implement them over six months.</li>
                          <li className="padLi">Created a scorecard to improve channel partners sales and service performance.</li>
                          <li className="padLi">Utilized analytical tools such as Access, Excel to generate models for analysis which improved the efficiency of serving clients. Created analytical models to identify network enhancement requirements based on multiple variables</li>
                          <li className="padLi">Developed and implemented the main website of the company detailing the Product offerings and the commerce features using PHP which helped the company to increase its client base by 30 percent.</li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <FaBriefcase size="1em" />
                      </div>
                      <div className="timeline-label">
                        <h2>Intern @ Software Development - FlyNava Technologies <span>06/2017-08/2017</span></h2>
                        <p>
                          <li className="padLi">Led a team of three people and successfully completed the project in the given timeline.</li>
                          <li className="padLi">Developed an Android app for the software named Jupiter.</li>
                          <li className="padLi">The app displayed Market Performance and analysis in an organized manner and manage the UI module perfectly.</li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <FaBookReader size="1em" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor of Engineering (Hons.) in Computer Science -  BITS Pilani, Dubai Campus<span> 2014-2018</span></h2>
                        <p>
                          <li className="padLi"><u>Courses</u> - Artificial Intelligence, Cloud Computing, Compiler Construction, Computer Architecture, Cryptography, Data Structures &amp; Algorithms, Design &amp; Analysis Of Algorithm, Computer Networks</li>
                          <li className="padLi"><u>Clubs</u> - Active member of Microsoft Tech Club, Photography Club, and Sports Club</li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
