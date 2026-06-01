import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import ProjectFormModal from '../../components/forms/ProjectFormModal';
import ProjectCard from '../../components/projects/projectCard';

function Projects({ data }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editCategory, setEditCategory] = useState('');

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        if (data.loggedIn) setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  const handleDelete = async (id, category) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const res = await fetch(`/api/projects?id=${id}&category=${category}`, { method: 'DELETE' });
      if (res.ok) {
        window.location.reload();
      } else {
        alert('Failed to delete');
      }
    }
  };

  const handleCreate = () => {
    setEditId(null);
    setEditCategory('');
    setShowModal(true);
  };

  const handleEdit = (id, category) => {
    setEditId(id);
    setEditCategory(category);
    setShowModal(true);
  };

  const renderProjectCard = (element, category) => (
    <Col lg={3} sm={6} xs={12} key={element.id} className="my-3 position-relative">
      <ProjectCard 
        element={element} 
        category={category} 
        isLoggedIn={isLoggedIn} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </Col>
  );

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-5 mb-3 position-relative">
        <h1 className="text-center my-5 display-2">Projects</h1>
        {isLoggedIn && (
          <Button 
            variant="primary" 
            className="fs-4 fw-bold rounded-circle d-flex align-items-center justify-content-center position-absolute end-0" 
            style={{width: '50px', height: '50px'}}
            onClick={handleCreate}
          >
            +
          </Button>
        )}
      </div>

      <h1>Web Development</h1>
      <Row>
        {data.webDevelopment?.map((element) => renderProjectCard(element, 'webDevelopment'))}
      </Row>

      <h1>App Development</h1>
      <Row>
        {data.appDevelopment?.map((element) => renderProjectCard(element, 'appDevelopment'))}
      </Row>

      <h1>Designing Work</h1>
      <Row>
        {data.designWork?.map((element) => renderProjectCard(element, 'designWork'))}
      </Row>

      {/* Project Form Modal */}
      <ProjectFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        editId={editId}
        editCategory={editCategory}
      />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  let data = { webDevelopment: [], appDevelopment: [], designWork: [] };
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(raw);
  }
  return { props: { data } };
}

export default Projects;
