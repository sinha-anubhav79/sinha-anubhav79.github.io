import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ element, category, isLoggedIn, onDelete, onEdit }) {
  return (
    <div className="position-relative h-100">
      <Card className="p-0 text-center h-100">
        <div className="position-relative" style={{height: "10rem"}}>
          <Image src={element.image} fill/>
        </div>
        <Card.Body>
          <Card.Title>{element.title}</Card.Title>
          <Card.Text>{element.summary}</Card.Text>
          <Link href={`/projects/${category === 'webDevelopment' ? 'web' : category === 'appDevelopment' ? 'app' : 'design'}/${element.id}`}>
            <span className="btn btn-outline-info">Learn More</span>
          </Link>
        </Card.Body> 
      </Card>
      {isLoggedIn && (
        <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 10 }}>
          <button className="btn btn-warning btn-sm me-1" title="Edit" onClick={() => onEdit(element.id, category)}>
            ✏️
          </button>
          <button className="btn btn-danger btn-sm" title="Delete" onClick={() => onDelete(element.id, category)}>
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}
