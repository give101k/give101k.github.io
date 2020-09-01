import React from "react";

function Skills() {
  return (
    <>
      <section className="portfolio-block skills">
        <div className="container">
          <div className="heading">
            <h2>Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-lightbulb-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Machine learning</h3>
                  <p className="card-text">
                    I have worked with Tensorflow for the purpose of developing
                    a neural network to recognize peoples' emotions through
                    facial expressions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-gear-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Robotics</h3>
                  <p className="card-text">
                    I have worked with ROS (Robot Operating System) to control a
                    Franka Emika Panda robot arm.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-star-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Web Development</h3>
                  <p className="card-text">
                    I have worked with react, nodejs, php, and sql. I have
                    developed both frontend and backend systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
