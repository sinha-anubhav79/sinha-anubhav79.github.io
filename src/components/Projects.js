import React from "react";
import project01 from "../assets/images/project01.gif";
import project02 from "../assets/images/project02.gif";
import project03 from "../assets/images/project03.gif";
import project04 from "../assets/images/project04.png";
import project05 from "../assets/images/project05.gif";
import project06 from "../assets/images/project06.gif";
import project07 from "../assets/images/project07.png";

function Projects() {
  return (
    <div className="container">
      <h1 className="text-center my-5 display-2">Projects</h1>
      <h1>Web Development</h1>
      <div className="row">
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img
              src={project01}
              className="card-img-top"
              alt="LEAD project 1"
            />
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">
                I made this webiste as a part of{" "}
                <a
                  href="https://ieeebitmesra.in/lead.html"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  LEAD
                </a>
                , an event by IEEE BIT MESRA student chapter where this was the
                first project assigned to us
              </p>
              <a
                href="https://sinha-anubhav79.github.io/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img
              src={project02}
              className="card-img-top"
              alt="Weather website"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Website</h5>
              <p className="card-text">
                This website was also a part of{" "}
                <a
                  href="https://ieeebitmesra.in/lead.html"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  LEAD
                </a>{" "}
                where I was first introduced to API calls, thus being my first
                Javascript extensive work
              </p>
              <a
                href="https://github.com/sinha-anubhav79/IEEE-LEAD/tree/sinha-anubhav79/Project-3/sinha-anubhav79"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img
              src={project03}
              className="card-img-top"
              alt="LEAD project 2"
            />
            <div className="card-body">
              <h5 className="card-title">Web scraping</h5>
              <p className="card-text">
                This project too was a part part of{" "}
                <a
                  href="https://ieeebitmesra.in/lead.html"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  LEAD
                </a>
                , where we had to scrape data from google and
                differente-commerce websites
              </p>
              <a
                href="https://github.com/sinha-anubhav79/IEEE-LEAD/tree/sinha-anubhav79/Project-2/sinha-anubhav79"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img src={project04} className="card-img-top" alt="Purple World" />
            <div className="card-body">
              <h5 className="card-title">Purple World</h5>
              <p className="card-text">
                This was my first work a client who asked me make his website
                using React. Thus I made my first full fledged, real world react
                project
              </p>
              <a
                href="https://purpleworld.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1>App Development</h1>
      <div className="row">
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img
              src={project05}
              className="card-img-top"
              alt="Covid Companion"
            />
            <div className="card-body">
              <h5 className="card-title">Covid Companion</h5>
              <p className="card-text">
                Along with my 4 team members, I contributed to this project
                under the leadership of{" "}
                <a
                  href="https://github.com/viroinrahul"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  Rahul Sinha
                </a>{" "}
                for{" "}
                <a
                  href="https://lockathon.tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  Lock-a-thon
                </a>
                . This was my first expirence with flutter and mobile
                development itself
              </p>
              <a
                href="https://github.com/sinha-anubhav79/covid_1/tree/sinha-anubhav79"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img src={project06} className="card-img-top" alt="Dine-inn" />
            <div className="card-body">
              <h5 className="card-title">Dine-inn</h5>
              <p className="card-text">
                I lead this flutter project along with my teammates{" "}
                <a
                  href="https://github.com/viroinrahul"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  Rahul Sinha
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/ritikakumari12"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  Ritika Kumari
                </a>{" "}
                for{" "}
                <a
                  href="https://ieeebitmesra.in/megaproject.html"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  Mega Projects
                </a>{" "}
                which was online seat booking system for restaurants to avoid
                crowding
              </p>
              <a
                href="https://github.com/sinha-anubhav79/Dine-inn"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1>Designing Work</h1>
      <div className="row">
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img src={project07} className="card-img-top" alt="NEEV" />
            <div className="card-body">
              <h5 className="card-title">Neev</h5>
              <p className="card-text">
                I worked at{" "}
                <a
                  href="https://www.neevsoaps.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="card-highlight"
                >
                  NEEV
                </a>
                , which is a company that makes natural skin-care products and
                provides employment to rural women. I handled their instagram
                page for{" "}
                <span
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="26 Aug'20 to 17 Oct'20"
                  className="card-highlight"
                >
                  around two months
                </span>
                , designing posters, videos and advertisements.
              </p>
              <a
                href="https://www.instagram.com/neevsoaps/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
