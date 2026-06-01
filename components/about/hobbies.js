import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function Hobbies() {
  const hobbies = [
    {
      "name": "Poetry",
      "src" : "/assets/images/interests/poetry.jpg",
      "href" : "poems"
    }, {
      "name":"Photo Editing",
      "src" : "/assets/images/interests/photo-edit.jpg",
      "href" : "photoEdit"
    }, {
      "name":"Illustration and Sketching",
      "src" : "/assets/images/interests/sketch.jpg",
      "href" : "sketch"
    }, {
      "name":"Video Editing",
      "src" : "/assets/images/interests/vid-edit.jpg",
      "href" : "videos"
    } 
  ]
  return (
    <>
      <h1 className="text-center display-3 pb-4">Other Interests</h1>
      <Row>
        {hobbies.map((hobby, index) => 
        <Col key={index} xs={12} sm={6} lg={4} xl={3} className='p-4' data-aos="fade-up">
          <Card className='text-center'>
            <img
              src={hobby.src}
              className="card-img-top"
              alt={hobby.name}
            />
            <Card.Body>
              <Card.Title className='pb-3'>{hobby.name}</Card.Title>
              <Button variant="outline-info">
                <Link href={`/hobbies/${hobby.href}`}>
                  See Work
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        )}
      </Row>
      <br />
    </>
  )
}
