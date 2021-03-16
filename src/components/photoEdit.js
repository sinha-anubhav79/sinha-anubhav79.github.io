import React, { useState } from "react";
import pe01 from "../assets/images/pe01.gif";
import pe02 from "../assets/images/pe02.jpg";
import pe03 from "../assets/images/pe03.jpg";
import pe04 from "../assets/images/pe04.jpg";
import pe05 from "../assets/images/pe05.jpg";

function PhotoEdit() {
  const [currentImage, setCurrentImage] = useState(null);
  const pearray = [pe01, pe02, pe03, pe04, pe05];
  return (
    <div className="container">
      <h1 className="text-center my-5 display-2">Editing</h1>
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
                    currentImage < 4 ? setCurrentImage(currentImage + 1) : null
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
          <img src={pe01} alt="sketch1" className="w-100" />
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
          <img src={pe02} alt="sketch2" className="w-100" />
        </div>
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
          <img src={pe03} alt="sketch3" className="w-100" />
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
          <img src={pe04} alt="sketch4" className="w-100" />
        </div>
        <div
          className="col-lg-3 col-sm-6 col-12 py-4 thumb-img"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            setCurrentImage(4);
            topFunction();
          }}
        >
          <img src={pe05} alt="sketch5" className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default PhotoEdit;

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
