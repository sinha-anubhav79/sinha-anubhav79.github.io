import React from 'react';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBridgeLock, faGlobe, faTrowelBricks } from '@fortawesome/free-solid-svg-icons';

export default function IndividualProject({ webProject }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* <div className='text-center mt-5' style={{ height: "70vh" }}>
        <FontAwesomeIcon icon={faTrowelBricks} color='grey' size='7x' />
        <div className='display-4'>
          Page Under Construction
        </div>
      </div> */}
      <Container>
        <Card className='p-4 mt-5 text-white'>
          <div className='text-center'>
            <h1 className='display-2'>{webProject.title}</h1>
            <div className='pb-4'>
              {webProject.repository ? <a href={webProject.repository} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="xl" className='px-2' />
              </a> : null}
              {webProject.link ? <a href={webProject.link} target="_blank">
                <FontAwesomeIcon icon={faGlobe} size="xl" className='px-2' />
              </a> : null}
            </div>
          </div>
          <Row className='justify-content-center'>
            <Col xs={12} md={6}>
              <Image
                src={webProject.image}
                alt={webProject.title}
                className="w-100 h-100"
                height={100}
                width={100}
                layout='responsive'
              />
            </Col>
            <Col xs={12} md={8} className='pt-5 text-center fs-5'><b>Summary:</b> {webProject.summary}</Col>
          </Row>
          <div className='py-5'>{webProject.description}</div>
        </Card>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), 'data');
  const filePath = path.join(projectsDirectory, 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContents);
  const webProjects = projects.webDevelopment;

  const paths = webProjects.map((project) => ({
    params: { project_id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { project_id } = params;
  const projectsDirectory = path.join(process.cwd(), 'data');
  const filePath = path.join(projectsDirectory, 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContents);
  const webProjects = projects.webDevelopment;

  const webProject = webProjects.find((proj) => proj.id.toString() === project_id);

  return {
    props: {
      webProject,
    },
  };
}