import React from "react";
import college from "../assets/images/College.png";
import school from "../assets/images/school_10.png";

function Timeline() {
  return (
    <div className="container bootdey">
      <div className="row gutters">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="">
            <div className="card-body">
              <div className="timeline">
                <div className="timeline-row">
                  <div className="timeline-time" data-aos="fade-right">
                    <img src={college} alt="BIT" className="w-25 h-25 edu" />
                    <br />
                    March, 2021<small>Currently</small>
                  </div>
                  <div className="timeline-dot fb-bg"></div>
                  <div className="timeline-content" data-aos="flip-left">
                    <h4>Birla Institute of Technology, MESRA</h4>
                    <p>
                      Now I'm an IT undergraduate at BIT Mesra. Currently I'm in
                      the 4th semester of my Bachelor degree in Technology
                      (B.Tech).
                    </p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time" data-aos="fade-left">
                    <img src={school} alt="DPS" className="w-25 h-25 edu" />
                    <br />
                    May, 2019<small>94.4%</small>
                  </div>
                  <div className="timeline-dot green-one-bg"></div>
                  <div
                    className="timeline-content green-one"
                    data-aos="flip-right"
                  >
                    <h4>Delhi Public School, Bokaro</h4>
                    <p>
                      After passing the matriculate exam I continued in DPS
                      itself for my intermediate exams. I passed my intermediate
                      exams with 94.4%.
                    </p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time" data-aos="fade-right">
                    <img src={school} alt="DPS" className="w-25 h-25 edu" />
                    <br />
                    June 2017<small>10 CGPA</small>
                  </div>
                  <div className="timeline-dot green-two-bg"></div>
                  <div
                    className="timeline-content green-two"
                    data-aos="flip-left"
                  >
                    <h4>Delhi Public School, Bokaro</h4>
                    <p>
                      I did my 10th from Delhi Public School, Bokaro Steel City.
                      I passed the matriculate exam with 10 CGPA in June 2017.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
