'use client';

import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';

const months = [
  { value: 1, label: 'January' }, { value: 2, label: 'February' },
  { value: 3, label: 'March' },   { value: 4, label: 'April' },
  { value: 5, label: 'May' },     { value: 6, label: 'June' },
  { value: 7, label: 'July' },    { value: 8, label: 'August' },
  { value: 9, label: 'September' },{ value: 10, label: 'October' },
  { value: 11, label: 'November' },{ value: 12, label: 'December' }
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 15 }, (_, i) => currentYear - i);

const ExperienceFormModal = ({ show, handleClose, editId }) => {
  const isEditMode = !!editId;

  const [formData, setFormData] = useState({
    experienceType: '',
    type: '',
    category: '',
    level: '',
    OrganisationName: '',
    designation: '',
    startMonth: 1,
    startYear: currentYear,
    endMonth: 1,
    endYear: currentYear,
    summary: '',
    description: '',
    src: null,
  });

  useEffect(() => {
    if (show) {
      if (isEditMode) {
        fetch(`/api/experience?id=${editId}`)
          .then(res => res.json())
          .then(data => {
            if (data && !data.error) {
              setFormData({
                experienceType: data.experienceType || '',
                type: data.type || '',
                category: data.category || '',
                level: data.level || '',
                OrganisationName: data.OrganisationName || '',
                designation: data.designation || '',
                startMonth: data.startMonth || 1,
                startYear: data.startYear || currentYear,
                endMonth: data.endMonth || 1,
                endYear: data.endYear || currentYear,
                summary: data.summary || '',
                description: data.description || '',
                src: null,
              });
            }
          })
          .catch(console.error);
      } else {
        // Reset form for create mode
        setFormData({
          experienceType: '',
          type: '',
          category: '',
          level: '',
          OrganisationName: '',
          designation: '',
          startMonth: 1,
          startYear: currentYear,
          endMonth: 1,
          endYear: currentYear,
          summary: '',
          description: '',
          src: null,
        });
      }
    }
  }, [editId, isEditMode, show]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'src') {
      setFormData({ ...formData, src: files[0] });
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
    
    const url = isEditMode ? `/api/experience?id=${editId}` : '/api/experience';
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
        <Modal.Title>{isEditMode ? 'Edit' : 'Create'} Experience</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Experience Type</Form.Label>
            <Form.Select name="experienceType" required onChange={handleChange} value={formData.experienceType}>
              <option value="">Select</option>
              <option value="Professional">Professional</option>
              <option value="Voluntary">Voluntary</option>
            </Form.Select>
          </Form.Group>

          {formData.experienceType === 'Professional' && (
            <Form.Group className="mb-3">
              <Form.Label>Type (e.g., Full-time, internship)</Form.Label>
              <Form.Control type="text" name="type" required onChange={handleChange} value={formData.type} />
            </Form.Group>
          )}

          {formData.experienceType === 'Voluntary' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select name="category" required onChange={handleChange} value={formData.category}>
                  <option value="">Select</option>
                  <option value="Clubs and Society">Clubs and Society</option>
                  <option value="Work">Work</option>
                  <option value="Volunteering">Volunteering</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Level</Form.Label>
                <Form.Select name="level" required onChange={handleChange} value={formData.level}>
                  <option value="">Select</option>
                  <option value="School">School</option>
                  <option value="College">College</option>
                  <option value="Freelance">Freelance</option>
                </Form.Select>
              </Form.Group>
            </>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Organisation Name</Form.Label>
            <Form.Control type="text" name="OrganisationName" required onChange={handleChange} value={formData.OrganisationName} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" name="designation" required onChange={handleChange} value={formData.designation} />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Start Month</Form.Label>
                <Form.Select name="startMonth" onChange={handleChange} value={formData.startMonth}>
                  {months.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Start Year</Form.Label>
                <Form.Select name="startYear" onChange={handleChange} value={formData.startYear}>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>End Month</Form.Label>
                <Form.Select name="endMonth" onChange={handleChange} value={formData.endMonth || ''}>
                  <option value="">Select</option>
                  {months.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>End Year</Form.Label>
                <Form.Select name="endYear" onChange={handleChange} value={formData.endYear || ''}>
                  <option value="">Select</option>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
            <Form.Control as="textarea" rows={2} name="summary" required onChange={handleChange} value={formData.summary} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} name="description" required onChange={handleChange} value={formData.description} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Organisation Logo {isEditMode && '(Leave empty to keep existing)'}</Form.Label>
            <Form.Control type="file" name="src" accept="image/*" required={!isEditMode} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {isEditMode ? 'Update' : 'Submit'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ExperienceFormModal;
