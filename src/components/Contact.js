import React from "react";

function Contact() {
  return (
    <footer id="footer">
      <div className="container">
        <hr />
        <div className="d-flex justify-content-between text-center row">
          <div className="align-self-center col-md-6 col-12">
            <p>&copy;2021 Anubhav Sinha All. rights reserved.</p>
          </div>
          <div className="h-100 d-flex justify-content-center text-center col-md-6 col-12">
            <div className="my-auto">
              <div className="row my-3">
                <div className="contact-icon col-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100014921014599"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook-square fa-2x"></i>
                  </a>
                </div>
                <div className="contact-icon col-2">
                  <a
                    href="https://www.instagram.com/sinha.anubhav.79/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </div>
                <div className="contact-icon col-2">
                  <a
                    href="https://www.linkedin.com/in/anubhav-sinha-0223491ab/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin-square fa-2x"></i>
                  </a>
                </div>
                <div className="contact-icon col-2">
                  <a
                    href="https://github.com/sinha-anubhav79"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github fa-2x"></i>
                  </a>
                </div>
                <div className="contact-icon col-2">
                  <a
                    href="https://twitter.com/sinha_79"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </div>
                <div className="contact-icon col-2">
                  <a
                    href="mailto:sinha.anubhav.79@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-envelope fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
