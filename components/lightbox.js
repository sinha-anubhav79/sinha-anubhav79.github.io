import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { animate } from 'animejs';

function LightBox({ show, onClose, currentContentID, nextContentMethod, previousContentMethod, contentList, hasVideo }) {
  const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

const minSwipeDistance = 50 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe)
    previousContentMethod();
  if (isRightSwipe)
    nextContentMethod();
}

  useEffect(() => {
    animate('#currentContent', {
      opacity: [
        { from: 0.25},
        { to: 1, ease: 'inOut(3)', duration: 500 }
      ],
    })
  }, [currentContentID])
  return (
    <Modal
      show={show}
      onHide={onClose}
      className="text-light text-center"
      size="lg"
      centered
      contentClassName="bg-transparent glass-content"
    >
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{contentList[currentContentID].title || contentList[currentContentID].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="position-relative" style={{ height: "60vh"}} id="currentContent" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {
            hasVideo ?
              <iframe src={contentList[currentContentID].src || contentList[currentContentID].image || contentList[currentContentID].img || contentList[currentContentID].content}
                style={{ aspectRatio: `${contentList[currentContentID].aspectRatio || "16/9"}`, width: "90vw", height: "70vh", maxWidth: "100%", maxHeight: "100%" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen /> :
              <img src={contentList[currentContentID].src || contentList[currentContentID].image || contentList[currentContentID].img || contentList[currentContentID].content} alt={"photo"} className="w-100 h-100 d-block object-fit-contain rounded" />
          }
        </Modal.Body>
        <div className="d-flex justify-content-center pb-3">
          <div className="my-auto py-2 px-3 m-3 bg-transparent rounded-circle" role="button" onClick={previousContentMethod}>
            <FontAwesomeIcon icon={faLessThan} />
          </div>
          <div className="my-auto py-2 px-3 m-3 bg-transparent rounded-circle" role="button" onClick={nextContentMethod}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
        <Modal.Footer>
          <br />
          <cite>{contentList[currentContentID].date}</cite>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default LightBox;