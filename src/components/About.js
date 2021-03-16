import React from "react";
import { NavHashLink } from "react-router-hash-link";
import myImage from "../assets/images/home-img-1.jpg";
import IEEE from "../assets/images/IEEE.png";
import nss from "../assets/images/nss.jpg";
import neev from "../assets/images/neev_logo.jpg";
import poetry from "../assets/images/poetry.jpg";
import videdit from "../assets/images/vid-edit.jpg";
import photoedit from "../assets/images/photo-edit.jpg";
import sketch from "../assets/images/sketch.jpg";
import AboutSkills from "./AboutSkills";
import Timeline from "./Timeline";

function About() {
  return (
    <div className="container">
      <br />
      <div className="about-section">
        <h1 className="text-center mb-4 display-2">A little about me...</h1>
        <hr />
        <div className="row align-items-center">
          <div className="col-xl-7 col-12">
            <div className="about-text">
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Hello everyone! My name is Anubhav Sinha.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Currently I am an undergraduate student pursuing my Bachelor's
                degree in Information Technology from Birla Institute of
                Technology, MESRA. I am a coding enthusiast and really into the
                tech world. I love technology and have a keen interest in
                learning how things work on the internet.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                My tilt towards programming happened in standard 11 when I
                started learning C++ as I took Computer Science as my 5th
                subject. But C++ was not the first programming language I dealt
                with. Before that I tried to learn programming in java on
                netbeans on my own when I was in standard 9.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                However my coding journey began in standard 6 when I was first
                introduced to HTML. I was not really serious about coding back
                then and didn't try anything more than what was in the syllabus.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                However, with time my interests in computers grew more and more
                and I finally decided to try and build a career in this field.
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-12">
            <img
              src={myImage}
              alt="Profile"
              className="h-100 w-100 about-img"
              data-aos="fade-up-left"
            />
          </div>
        </div>
      </div>
      <hr />
      <br />
      <h1 className="text-center display-3 pb-4">My Education</h1>
      <br />
      <Timeline />
      <hr />
      <br />
      <NavHashLink to="/skills" className="about-link">
        <h1 className="text-center display-3 pb-4">Skills</h1>
      </NavHashLink>
      <br />
      <AboutSkills />
      <hr />
      <br />
      <h1 className="text-center display-3 ">Work Expirence</h1>
      <br />
      <div className="row work-section" data-aos="fade-up">
        <div className="row align-items-end">
          <div className=" col-xl-1 col-md-2 col-4">
            <img src={IEEE} alt="IEEE" className="w-100 h-100 py-2" />
          </div>
          <h1 className="col-xl-1 col-md-2 col-4 text-center work-head">
            IEEE
          </h1>
        </div>
        <hr />
        <div className="about-text">
          <p>
            I have been a part of IEEE BIT MESRA Student Chapter, which is one
            the elite technical clubs in my college, from September 2019. I was
            recruited based on an aptitute test, a coding round and finally an
            interview with the senior members of the club.
          </p>
          <p>
            The idea behind joining this club was very straightforward - to be
            in a like minded environment that would help me grow and push beyond
            my limits. The club just gave me a crux of how work in any
            organisation. I got a chance to be a part of the organising team of
            one of the flagship events of the club. I also got a chance to teach
            at one the workshops held by the club. And also got a chance to do a
            lot of the poster designing work for the club.
          </p>
          <p>
            Later I also became a member IEEE international organisation, under
            the Kolkata Section of Region 10, in around December 2020. This gave
            me a chance to attend various sessions and be in touch with the
            global technological development. I attend the AISYWLC (All India
            Students Young professional Women in engineering Life member
            Congress), held by IEEE Delhi section, as student branch associate
            of my club.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row work-section" data-aos="fade-up">
        <div className="row align-items-end">
          <div className=" col-xl-1 col-md-2 col-4">
            <img src={neev} alt="Neev" className="w-100 h-100 py-2" />
          </div>
          <h1 className="col-xl-1 col-md-2 col-4 text-center work-head">
            NEEV
          </h1>
        </div>
        <hr />
        <div className="about-text">
          <p>
            I interned at NEEV, which stands for New Education and Environment
            Visions, for around two months. It is a social enterprise that
            produces the high quality handcrafted herbal products while
            providing a dignified means of employment for rural women and
            regenerating rural economy. For around two months (26 Aug'20 to 17
            Oct'20) handled their instagram page designing posters, videos and
            advertisements.
          </p>
          <p>
            During the summer of lockdown I had just learnt photo and video
            editing using tools like photoshop, illustrator and others. And then
            I got this opportunity which was a little drifting from my stream
            but still I decided to do this internship for two primary reasons -
            it would help such an enterprise working for social cause and the
            other being the fact that I had plenty of time because of lockdown.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row work-section" data-aos="fade-up">
        <div className="row align-items-end">
          <div className=" col-xl-1 col-md-2 col-4">
            <img src={nss} alt="NSS" className="w-100 h-100 py-2 nss-img" />
          </div>
          <h1 className="col-xl-1 col-md-2 col-4 text-center work-head">NSS</h1>
        </div>
        <hr />
        <div className="about-text">
          <p>
            I have been a volunteer at NSS BIT MESRA from August 2019. And it
            has been a very different kind of expirence. Going around the campus
            for cleanliness drives, social awareness campaigns, blood donation
            camps has addded moral values in me. It has also motivated me work
            towards the benfit of the entire society.
          </p>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h1 className="text-center display-3 pb-4">Other Interests</h1>
      <div className="row">
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 p-4"
          data-aos="fade-up"
        >
          <div className="card text-center">
            <img src={poetry} className="card-img-top" alt="Poetry" />
            <div className="card-body">
              <h5 className="card-title">Poetry</h5>
              <p className="card-text">Click below to see some of my works.</p>
              <a
                href="/poem"
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
            <img src={photoedit} className="card-img-top" alt="Poetry" />
            <div className="card-body">
              <h5 className="card-title">Photo Editing</h5>
              <p className="card-text">Click below to see some of my works.</p>
              <a
                href="/photo-edit"
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
            <img src={sketch} className="card-img-top" alt="Poetry" />
            <div className="card-body">
              <h5 className="card-title">Illustration and Sketching</h5>
              <p className="card-text">Click below to see some of my works.</p>
              <a
                href="/sketch"
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
            <img src={videdit} className="card-img-top" alt="Poetry" />
            <div className="card-body">
              <h5 className="card-title">Video Editing</h5>
              <p className="card-text">Click below to see some of my works.</p>
              <a
                href="https://www.youtube.com/channel/UCjcqwIunOK_eYLNNv7Cb0yw/videos"
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
      <br />
    </div>
  );
}

export default About;
