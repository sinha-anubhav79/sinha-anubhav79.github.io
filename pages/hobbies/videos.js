import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import data from "../../data/videos.json";
import LightBox from "../../components/lightbox";

function Videos() {
  const [modalState, setModalState] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [platform, setPlatform] = useState("Youtube");

  function nextImage() {
    if (currentImage === data[platform].length - 1) {
      setCurrentImage(0);
      if (platform === "Youtube")
        setPlatform("Instagram");
      else if (platform === "Instagram")
        setPlatform("WebsiteExclusive");
      else
        setPlatform("Youtube");
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function prevImage() {
    if (currentImage === 0) {
      let temp;
      if (platform === "Youtube") {
        temp = "WebsiteExclusive";
        setPlatform("WebsiteExclusive");
      }
      else if (platform === "Instagram") {
        temp = "Youtube";
        setPlatform("Youtube");
      }
      else {
        temp = "Instagram";
        setPlatform("Instagram");
      }
      setCurrentImage(data[temp].length - 1);
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
          contentList={data[platform]}
          hasVideo={true} />
        <h1 className="text-center display-2 py-5">Videos</h1>
        <h2>Youtube</h2>
        <Row>
          {data.Youtube.map((element, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
              onClick={() => {
                setCurrentImage(index);
                setPlatform("Youtube");
                setModalState(true);
              }}
            >
              <div className="card py-4">
                <img src={element.thumbnail} className="object-fit-cover w-100" />
              </div>
            </div>
          ))}
        </Row>
        <h2>Instagram</h2>
        <Row>
          {data.Instagram.map((element, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
              onClick={() => {
                setCurrentImage(index);
                setPlatform("Instagram");
                setModalState(true);
              }}
            >
              <div className="card py-4">
                <img src={element.thumbnail} className="object-fit-cover w-100" />
              </div>
            </div>
          ))}
        </Row>
        <h2>Website Exclusive</h2>
        <Row>
          {data.WebsiteExclusive.map((element, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
              onClick={() => {
                setCurrentImage(index);
                setPlatform("WebsiteExclusive");
                setModalState(true);
              }}
            >
              <div className="card py-4">
                <img src={element.thumbnail} className="object-fit-cover w-100"/>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Videos;
