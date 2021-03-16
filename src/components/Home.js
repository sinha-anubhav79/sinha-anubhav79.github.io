import React from "react";
import homeImage from "../assets/images/WebsiteIcon.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="showcase">
      <div className="container h-100 d-flex justify-content-center">
        <div className="my-auto">
          <div className="text-center">
            <Link to="/about">
              <img src={homeImage} alt="profile" className="home-img" />
            </Link>
          </div>
          <div className="typewriter text-start">
            Your Adroit
            <span className="changing-text">
              <Typewriter
                options={{
                  strings: ["Designer", "Developer", "Programmer", "Engineer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
