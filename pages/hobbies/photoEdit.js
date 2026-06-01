import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../data/photoEdit.json";
import LightBox from "../../components/lightbox";

function PhotoEdit() {
  const [modalState, setModalState] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    if (currentImage === data.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function prevImage() {
    if (currentImage === 0) {
      setCurrentImage(data.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <>
      <Container id="photoEdit">
        <LightBox 
          show={modalState} 
          onClose={() => setModalState(false)} 
          currentContentID={currentImage} 
          nextContentMethod={nextImage} 
          previousContentMethod={prevImage} 
          contentList={data} />
        <h1 className="text-center display-2 py-5">Editing Works</h1>
        <Row>
          {data.map((element, index) => (
            <Col xs={12} sm={6} lg={3}
              key={index}
              className="py-4 thumb-img"
              onClick={() => {
                setCurrentImage(index);
                setModalState(true);
              }}
            >
              <img src={element.src} className="object-fit-cover w-100"/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PhotoEdit;
