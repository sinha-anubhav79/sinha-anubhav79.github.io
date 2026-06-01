import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import data from "../../data/sketch.json";
import LightBox from "../../components/lightbox";

function Sketch() {
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
      <Container>
        <LightBox
          show={modalState} 
          onClose={() => setModalState(false)} 
          currentContentID={currentImage} 
          nextContentMethod={nextImage} 
          previousContentMethod={prevImage} 
          contentList={data} />
        <h1 className="text-center display-2 py-5">Sketch</h1>
        <Row>
          {data.map((element, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
              onClick={() => {
                setCurrentImage(index);
                setModalState(true);
              }}
            >
              <img src={element.src} className="object-fit-cover w-100" />
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Sketch;
