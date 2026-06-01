import React from "react";
import data from "../../data/education.json";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function Education() {
  return (
    <>
      <h1 className="text-center display-3 pb-4">My Education</h1>
      <br />
      <Container>
      <Row>
        <Col>
          <div>
            {data.toReversed().map((education, index) => EducationCard(education, index))}
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

function EducationCard(education, index) {
  return (
    <div key={index}>
      <Row className="justify-content-center">
        <Col xs={12} md={1} className="position-relative text-center" data-aos="fade-right">
          <span className="position-absolute fw-bold" style={{ top: "15%"}}>{education.month}, {education.year}</span>
        </Col>
        <Col xs={2} md={1}>
          <div className="h-100 position-relative start-50" style={{ borderLeft: "2px dashed #c4d2e2" }}>
            <Image
              src={education.image}
              alt="school"
              className="position-absolute translate-middle bg-light rounded-circle"
              height={64}
              width={64}
              style={{ top: "30%" }}
            />
          </div>
        </Col>
        <Col xs={10} md={6}>
          <div className="rounded py-2 px-4 my-4 glass-education-content" data-aos="flip-left">
            <h4>{education.institute}</h4>
            <small className="fst-italic">{education.score}</small>
            <hr />
            <p>
              {education.description}
            </p>
          </div>
        </Col>
      </Row>

    </div>
  )
}