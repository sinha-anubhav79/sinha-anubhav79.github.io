import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { animate, createScope, createSpring } from 'animejs';
import AboutSkills from "../components/about/aboutSkills";
import Introduction from "../components/about/introduction";
import WorkExperience from "../components/about/workExperience";
import Projects from "../components/about/projects";
import Education from "../components/about/education";
import Hobbies from "../components/about/hobbies";
import Summary from "../components/summary";
import styles from "../styles/Home.module.css";

export default function Home() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>
      // Created a bounce animation loop
      animate(`.${styles.mainIcon}`, {
        scale: [
          { to: 1.15, ease: 'inOut(3)', duration: 500 },
          { to: 1, ease: createSpring({ stiffness: 300 }) }
        ],
        loop: true,
        loopDelay: 250,
      });
    });

    return () => scope.current.revert()

  }, []);

  return (
    <>
      <div className={styles.showcase}>
        <Container className="h-100 d-flex justify-content-center">
          <div className="my-auto">
            <div ref={root} className="text-center">
              <Link href="/about">
                <img
                  src="../assets/images/main-icon.png"
                  alt="profile"
                  className={`${styles.mainIcon} border border-3 border-white rounded-circle`}
                  role="button"
                />
              </Link>
            </div>

            <div className={styles.typewriter}>
              Your Adroit
              <span className={styles.changingText}>
                <Typewriter
                  options={{
                    strings: [
                      "Designer",
                      "Developer",
                      "Programmer",
                      "Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <br />
        <Summary />
        <br />
        <hr />
        <br />
        <WorkExperience />
        <hr />
        <br />
        <AboutSkills />
        <hr />
        <br />
        <Education />
      </Container>
    </>
  );
}
