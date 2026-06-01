import React from 'react';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { monthFinder } from '../../functions/dateCalculator';
import Image from 'next/image';

export default function IndividualExperience({ experience }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Container>
        <Card className='mt-3 rounded-3 text-white'>
          <div className='p-3 text-center'>
            <h1 className='display-2  '>{experience.OrganisationName}</h1>
            <div className='pb-4'>{experience.designation}</div>
            <p>{monthFinder(experience.startMonth).substring(0, 3)}, {experience.startYear} - {experience.endMonth ? monthFinder(experience.endMonth).substring(0, 3) + ',' : "Present"} {experience.endYear}</p>
          </div>
          <Row className='text-center justify-content-center'>
            <Col xs={10} sm={8} md={4} lg={3} xl={2}>
              <Image
                src={experience.src}
                alt={experience.OrganisationName}
                className="w-100 h-100"
                height={100}
                width={100}
                layout='responsive'
              />
            </Col>
          </Row>
          <div className='px-4 py-4 p-sm-5 fs-5'>{experience.description}</div>
        </Card>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const experiencesDirectory = path.join(process.cwd(), 'data');
  const filePath = path.join(experiencesDirectory, 'experience.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const experiences = JSON.parse(fileContents);

  const paths = experiences.map((experience) => ({
    params: { experience_id: experience.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { experience_id } = params;
  const experiencesDirectory = path.join(process.cwd(), 'data');
  const filePath = path.join(experiencesDirectory, 'experience.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const experiences = JSON.parse(fileContents);

  const experience = experiences.find((exp) => exp.id.toString() === experience_id);

  return {
    props: {
      experience,
    },
  };
}