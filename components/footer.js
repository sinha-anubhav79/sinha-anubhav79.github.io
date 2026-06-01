import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <hr />
          <div className="d-flex justify-content-between text-center row">
            <div className="align-self-center col-md-6 col-12">
              <p>&copy;2024 Anubhav Sinha</p>
            </div>
            <div className="h-100 d-flex justify-content-center text-center col-md-6 col-12">
              <div className="my-auto">
                <div className="row my-3">
                  <div className={`${styles.contactIcon} col-2`}>
                    <a
                      href="https://www.facebook.com/profile.php?id=100014921014599"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
                    </a>
                  </div>
                  <div className={`${styles.contactIcon} col-2`}>
                    <a
                      href="https://www.instagram.com/sinha_anubhav_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                  </div>
                  <div className={`${styles.contactIcon} col-2`}>
                    <a
                      href="https://www.linkedin.com/in/sinha-anubhav/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                    </a>
                  </div>
                  <div className={`${styles.contactIcon} col-2`}>
                    <a
                      href="https://github.com/sinha-anubhav79"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                  </div>
                  <div className={`${styles.contactIcon} col-2`}>
                    <a
                      href="https://twitter.com/sinha_79"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </a>
                  </div>
                  <div className={`${styles.contactIcon} col-2`}>
                    <a
                      href="mailto:sinha.anubhav.79@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
