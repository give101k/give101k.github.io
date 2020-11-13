import React from "react";
import Desc from "./Desc";

function Cv() {
   return (
      <main className="page cv-page">
         <div className="border-bottom">
            <Desc />
         </div>
         <section className="portfolio-block cv">
            <div className="container">
               <div className="work-experience group">
                  <div className="heading">
                     <h2 className="text-center">Work Experience</h2>
                  </div>
                  <div className="item">
                     <div className="row">
                        <div className="col-md-6">
                           <h3>Research Assistant</h3>
                           <h4 className="organization">Montclair CRoSS Lab</h4>
                        </div>
                        <div className="col-md-6"><span className="period">9/2019 - 05/2020</span></div>
                     </div>
                     <p className="text-muted">
                        <ul>
                           <li>Worked with Dr.Weitian Wang on developing a system to understand human emotion for Human-Robot collaboration with the goal of making Human-Robot collaboration safer.</li>
                           <li>Used transfer learning to recognize peoples’ emotions through facial expressions.</li>
                           <li>With the emotion status,the robot system can decide how fast or slow to work with the human.</li>
                           <li>Code is open-sourced on <a href="https://github.com/give101k/Human-Emotion-Understanding-via-Transfer-Learning">github</a>.</li>
                        </ul>
                     </p>
                  </div>
               </div>
               <div className="education group">
                  <div className="heading">
                     <h2 className="text-center">Education</h2>
                  </div>
                  <div className="item">
                     <div className="row">
                        <div className="col-md-6">
                           <h3>BS in Computer Science</h3>
                           <h4 className="organization">Montclair State University</h4>
                        </div>
                        <div className="col-md-6"><span className="period">09/2017 - 05/2020</span></div>
                     </div>
                     <p className="text-muted">
                        <ul>
                           <li>Cumulative GPA: 3.6/4.0</li>
                           <li>Deans list: Fall 2018, Spring/Fall 2019, and Spring 2020</li>
                        </ul>
                     </p>
                  </div>
                  <div className="item">
                     <div className="row">
                        <div className="col-md-6">
                           <h3>Majored in Applied Computer Science</h3>
                           <h4 className="organization">Passaic County Community College</h4>
                        </div>
                        <div className="col-md-6"><span className="period">09/2012 - 05/2017</span></div>
                     </div>
                     <p className="text-muted">I originally majored in engineering before becoming a computer science student in the Fall of 2015.</p>
                  </div>
               </div>
               <div className="group">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="skills portfolio-info-card">
                           <h2>Skills</h2>
                           <h3>C/C++</h3>
                           <div className="progress">
                              <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}><span class="sr-only">100%</span></div>
                           </div>
                           <h3>Python, Numpy</h3>
                           <div className="progress">
                              <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}><span class="sr-only">100%</span></div>
                           </div>
                           <h3>HTML,CSS</h3>
                           <div className="progress">
                              <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}><span class="sr-only">100%</span></div>
                           </div>
                           <h3>SQL</h3>
                           <div className="progress">
                              <div className="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}><span class="sr-only">100%</span></div>
                           </div>
                           <h3>Javascript</h3>
                           <div className="progress">
                              <div className="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}><span class="sr-only">100%</span></div>
                           </div>
                           <h3>Tensorflow</h3>
                           <div className="progress">
                              <div className="progress-bar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}><span class="sr-only">100%</span></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="contact-info portfolio-info-card">
                           <h2>Contact Info</h2>
                           <div className="row">
                              <div className="col-1"><i className="icon ion-android-calendar icon"></i></div>
                              <div className="col-9"><span>06/21/1994</span></div>
                           </div>
                           <div className="row">
                              <div className="col-1"><i className="icon ion-person icon"></i></div>
                              <div className="col-9"><span>Brandon Hanlon</span></div>
                           </div>
                           <div className="row">
                              <div className="col-1"><i className="icon ion-ios-telephone icon"></i></div>
                              <div className="col-9"><span>(973) 567-9622</span></div>
                           </div>
                           <div className="row">
                              <div className="col-1"><i className="icon ion-at icon"></i></div>
                              <div className="col-9"><span>brandon.hanlon@bhanlon.me</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section >
      </main >
   );
}

export default Cv;
