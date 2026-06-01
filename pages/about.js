import React from "react";
import AboutSkills from "../components/about/aboutSkills";
import Introduction from "../components/about/introduction";
import Education from "../components/about/education";
import WorkExperience from "../components/about/workExperience";
import Hobbies from "../components/about/hobbies";
import { Container } from "react-bootstrap";
import Projects from "../components/about/projects";

function About() {
  return (
    <>
      <Container>
        <br />
        <Introduction />
        <br />
        <hr />
        <br />
        <WorkExperience />
        <hr />
        <br />
        <Projects />
        <hr />
        <br />
        <AboutSkills />
        <hr />
        <br />
        <Education />
        <hr />
        <br />
        <Hobbies />
      </Container>
    </>
  );
}

export default About;
