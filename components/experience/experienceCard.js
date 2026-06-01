import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import { monthFinder } from '../../functions/dateCalculator';
import Link from 'next/link';

export default function ExperienceCard({ element, isLoggedIn, onDelete, onEdit }) {
  return (
    <div className="position-relative h-100 mx-1">
      <Card className="p-0 text-center h-100">
        <div className="position-relative bg-white" style={{height: "10rem", borderTopLeftRadius: "var(--bs-card-inner-border-radius)", borderTopRightRadius: "var(--bs-card-inner-border-radius)"}}>
          <Image
            src={element.src}
            alt={element.OrganisationName}
            fill
            style={{objectFit: 'contain', padding: '1rem'}}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-semibold">{element.OrganisationName}</Card.Title>
          <Card.Subtitle className="mb-2" style={{color: '#c4d2e2'}}>{element.designation}</Card.Subtitle>
          <Card.Text className="small" style={{color: '#a0aec0'}}>
            {monthFinder(element.startMonth).substring(0, 3)}, {element.startYear} - {element.endMonth ? monthFinder(element.endMonth).substring(0, 3) + ',' : "Present*"} {element.endYear}
          </Card.Text>
          <Card.Text className="flex-grow-1">
            {element.summary || (element.description && element.description.substring(0, 150) + '...')}
          </Card.Text>
          <div className="mt-auto">
            <Link href={`/experience/${element.id}`}>
              <span className="btn btn-outline-info">Read More</span>
            </Link>
          </div>
        </Card.Body>
      </Card>

      {isLoggedIn && (
        <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 10 }}>
          <button className="btn btn-warning btn-sm me-1" title="Edit" onClick={() => onEdit(element.id)}>
            ✏️
          </button>
          <button className="btn btn-danger btn-sm" title="Delete" onClick={() => onDelete(element.id)}>
            🗑️
          </button>
        </div>
      )}
    </div>
  )
}
