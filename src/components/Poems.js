import React, { useState } from "react";
import poem01 from "../assets/images/poem01.jpg";
import poem02 from "../assets/images/poem02.jpg";
import poem03 from "../assets/images/poem03.jpg";
import poem04 from "../assets/images/poem04.jpg";
import poem05 from "../assets/images/poem05.jpg";
import poem06 from "../assets/images/poem06.jpg";
import poem07 from "../assets/images/poem07.jpg";
import poem08 from "../assets/images/poem08.jpg";
import poem09 from "../assets/images/poem09.jpg";
import poem10 from "../assets/images/poem10.jpg";

function Poem() {
  const [currentImage, setCurrentImage] = useState(null);
  const pearray = [
    poem01,
    poem02,
    poem03,
    poem04,
    poem05,
    poem06,
    poem07,
    poem08,
    poem09,
    poem10,
  ];
  return (
    <div className="container">
      <h1 className="text-center my-5 display-2">Poems</h1>
      <div className="collapse" id="collapsePoem">
        <div className="card">
          <button
            type="button"
            className="btn-close btn-close-white mt-3 mx-3"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePoem"
            aria-expanded="false"
            aria-controls="collapsePoem"
            aria-label="Close"
          ></button>
          <hr />
          <div className="card">
            <div className="row justify-content-center">
              <div className="carousel-control-prev">
                <i
                  className="fa fa-angle-left fa-4x"
                  onClick={() =>
                    currentImage > 0 ? setCurrentImage(currentImage - 1) : null
                  }
                ></i>
              </div>
              <div className="col-md-8 col-12 text-center align-self-center">
                <img
                  src={pearray[currentImage]}
                  alt="current"
                  className="w-100 lightbox-image"
                />
              </div>
              <div className="carousel-control-next">
                <i
                  className="fa fa-angle-right fa-4x"
                  onClick={() =>
                    currentImage < 9 ? setCurrentImage(currentImage + 1) : null
                  }
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(0);
            topFunction();
          }}
        >
          <img src={poem01} alt="poem1" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(1);
            topFunction();
          }}
        >
          <img src={poem02} alt="poem2" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(2);
            topFunction();
          }}
        >
          <img src={poem03} alt="poem3" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(3);
            topFunction();
          }}
        >
          <img src={poem04} alt="poem4" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(4);
            topFunction();
          }}
        >
          <img src={poem05} alt="poem5" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(5);
            topFunction();
          }}
        >
          <img src={poem06} alt="poem6" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(6);
            topFunction();
          }}
        >
          <img src={poem07} alt="poem7" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(7);
            topFunction();
          }}
        >
          <img src={poem08} alt="poem8" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(8);
            topFunction();
          }}
        >
          <img src={poem09} alt="poem9" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePoem"
          aria-expanded="false"
          aria-controls="collapsePoem"
          onClick={() => {
            setCurrentImage(9);
            topFunction();
          }}
        >
          <img src={poem10} alt="poem10" className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default Poem;

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
