import React, { useState } from "react";
import sketch01 from "../assets/images/sketch_1.jpg";
import sketch02 from "../assets/images/sketch_2.jpg";

import ill01 from "../assets/images/ill01.jpg";
import ill02 from "../assets/images/ill02.png";

function Sketch() {
  const [currentImage, setCurrentImage] = useState(null);
  const pearray = [sketch01, sketch02, ill01, ill02];
  return (
    <div className="container">
      <h1 className="text-center my-5 display-2">Sketching</h1>
      <div className="collapse" id="collapseExample">
        <div className="card">
          <button
            type="button"
            className="btn-close btn-close-white mt-3 mx-3"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
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
                    currentImage < 3 ? setCurrentImage(currentImage + 1) : null
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
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            setCurrentImage(0);
            topFunction();
          }}
        >
          <img src={sketch01} alt="sketch1" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            setCurrentImage(1);
            topFunction();
          }}
        >
          <img src={sketch02} alt="sketch2" className="w-100" />
        </div>
      </div>
      <h1 className="text-center my-5 display-2">Illustrations</h1>
      <div className="row">
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            setCurrentImage(2);
            topFunction();
          }}
        >
          <img src={ill01} alt="sketch1" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            setCurrentImage(3);
            topFunction();
          }}
        >
          <img src={ill02} alt="sketch2" className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default Sketch;

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
