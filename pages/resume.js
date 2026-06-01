import { faDownload, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Button } from 'react-bootstrap'
import ResumeDocument from '../components/resume/ResumeDocument';
import resumeData from '../data/resumeData.json';

export default function Resume() {
  const resumeUrl = "assets/files/Resume.pdf";
  const today = new Date;
  const todayValue = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`

  return (
    <>
      <Container className='text-center'>
        <h1 className="display-2 d-print-none my-5">My Resume</h1>
        <div className='mb-4 d-print-none d-flex justify-content-center gap-3'>
          <a href={resumeUrl} target='_blank' download={`Anubhav_Sinha_Resume-${todayValue}`} className="btn btn-outline-primary">
            <FontAwesomeIcon icon={faDownload} className='px-2' />
            <span className='fw-semibold'>Download Resume</span>
          </a>
        </div>

        {/* Native JSX Resume */}
        <div className="d-flex justify-content-center">
          <ResumeDocument data={resumeData} />
        </div>
      </Container>
    </>
  )
}