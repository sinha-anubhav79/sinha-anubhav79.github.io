'use client';

import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const ProjectFormModal = ({ show, handleClose, editId, editCategory }) => {
  const isEditMode = !!(editId && editCategory);

  const [formData, setFormData] = useState({
    projectCategory: '',
    title: '',
    summary: '',
    description: '',
    link: '',
    repository: '',
    image: null,
  });

  useEffect(() => {
    if (show) {
      if (isEditMode) {
        fetch(`/api/projects?id=${editId}&category=${editCategory}`)
          .then(res => res.json())
          .then(data => {
            if (data && !data.error) {
              setFormData({
                projectCategory: editCategory,
                title: data.title || '',
                summary: data.summary || '',
                description: data.description || '',
                link: data.link || '',
                repository: data.repository || '',
                image: null,
              });
            }
          })
          .catch(console.error);
      } else {
        setFormData({
          projectCategory: editCategory || '',
          title: '',
          summary: '',
          description: '',
          link: '',
          repository: '',
          image: null,
        });
      }
    }
  }, [editId, editCategory, isEditMode, show]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== '') {
        data.append(key, formData[key]);
      }
    });
    
    const url = isEditMode ? `/api/projects?id=${editId}&category=${editCategory}` : '/api/projects';
    const method = isEditMode ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: method,
      body: data,
    });

    if (res.ok) {
      handleClose();
      window.location.reload();
    } else {
      alert('Submission failed!');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{isEditMode ? 'Edit' : 'Create'} Project</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Project Category</Form.Label>
            <Form.Select name="projectCategory" required onChange={handleChange} value={formData.projectCategory} disabled={isEditMode}>
              <option value="">Select Category</option>
              <option value="webDevelopment">Web Development</option>
              <option value="appDevelopment">App Development</option>
              <option value="designWork">Design Work</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" required onChange={handleChange} value={formData.title} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
            <Form.Control as="textarea" rows={2} name="summary" required onChange={handleChange} value={formData.summary} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} name="description" required onChange={handleChange} value={formData.description} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Live Link (optional)</Form.Label>
            <Form.Control type="url" name="link" onChange={handleChange} value={formData.link} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Repository Link (optional)</Form.Label>
            <Form.Control type="url" name="repository" onChange={handleChange} value={formData.repository} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Project Image {isEditMode && '(Leave empty to keep existing)'}</Form.Label>
            <Form.Control type="file" name="image" accept="image/*" required={!isEditMode} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="mt-4 mb-5">
            {isEditMode ? 'Update' : 'Submit'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProjectFormModal;
