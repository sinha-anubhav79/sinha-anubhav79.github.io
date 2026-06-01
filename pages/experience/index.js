import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import ExperienceCard from '../../components/experience/experienceCard';
import ExperienceFormModal from '../../components/forms/ExperienceFormModal';
import fs from 'fs';
import path from 'path';

function Experience({ data }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        if (data.loggedIn) setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

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
  const voluntaryExperiences = data.filter(e => e.experienceType === 'Voluntary').sort(sortExp);

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this experience?')) {
      const res = await fetch(`/api/experience?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        window.location.reload();
      } else {
        alert('Failed to delete');
      }
    }
  };

  const handleCreate = () => {
    setEditId(null);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    setEditId(id);
    setShowModal(true);
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-center align-items-center mt-5 mb-3 position-relative">
          <h1 className="display-2 my-5 text-center">Professional Experience</h1>
          {isLoggedIn && (
            <Button
              variant="primary"
              className="fs-4 fw-bold rounded-circle d-flex align-items-center justify-content-center position-absolute end-0"
              style={{ width: '50px', height: '50px' }}
              onClick={handleCreate}
            >
              +
            </Button>
          )}
        </div>
        <Row>
          {professionalExperiences.map((element, index) => (
            <Col xs={12} md={6} lg={4} key={`prof-${index}`}>
              <ExperienceCard element={element} isLoggedIn={isLoggedIn} onDelete={handleDelete} onEdit={handleEdit} />
            </Col>
          ))}
        </Row>

        <h1 className="text-center my-5 display-2 mt-5 pt-5">Voluntary Experience</h1>
        <Row>
          {voluntaryExperiences.map((element, index) => (
            <Col xs={12} md={6} lg={4} key={`vol-${index}`}>
              <ExperienceCard element={element} isLoggedIn={isLoggedIn} onDelete={handleDelete} onEdit={handleEdit} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Experience Form Modal */}
      <ExperienceFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        editId={editId}
      />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'experience.json');
  let data = [];
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(raw);
  }
  return { props: { data } };
}

export default Experience;