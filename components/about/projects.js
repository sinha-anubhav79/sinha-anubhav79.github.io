import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import data from "../../data/projects.json";
import ProjectCard from '../projects/projectCard';

export default function Projects() {
  const topProjects = Object.entries(data).flatMap(([category, projects]) =>
    projects.map(p => ({ ...p, category }))
  ).slice(0, 3);

  return (
    <>
      <div className="text-center">
        <Link href="/projects" className="text-center display-3 ">Projects</Link>
      </div>
      <br />
      <Row className='justify-content-center'>
        {topProjects.map((element, index) => (
          <Col xs={12} md={6} lg={4} xl={3} key={index} className="my-3">
            <ProjectCard element={element} category={element.category} />
          </Col>
        ))}
      </Row>
    </>
  )
}
