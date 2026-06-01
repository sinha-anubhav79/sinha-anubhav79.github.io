import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import data from "../../data/experience.json";
import ExperienceCard from '../experience/experienceCard';

export default function WorkExperience() {
  const sortExp = (a, b) => {
    if (!a.startYear && !b.startYear) return 0;
    if (!a.startYear) return -1;
    if (!b.startYear) return 1;

    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear;
    }
    return b.startMonth - a.startMonth;
  };

  const professionalExperiences = data.filter(e => e.experienceType === 'Professional').sort(sortExp);

  return (
    <>
      <div className="text-center">
        <Link href="/experience" className="text-center display-3 ">Professional Experience</Link>
      </div>
      <br />
      <Row className='justify-content-center'>
        {professionalExperiences.map((element, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <ExperienceCard element={element} />
            <br />
          </Col>
        ))}
      </Row>
    </>
  )
}
