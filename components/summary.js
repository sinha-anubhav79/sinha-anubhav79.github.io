import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from '../styles/About.module.css'

export default function Summary() {
  return (
    <>
      <div className={`${styles.aboutSection} overflow-hidden p-5 rounded-3`}>
        <Row className="align-items-center">
          <Col xs={12} xl={7}>
            <div className="fs-5">
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Hi! I&apos;m <b>Anubhav Sinha</b>, a Software Developer currently engineering scalable solutions at <b>Oracle</b>, and previously a Software Engineer Intern at <b>Microsoft</b>. I hold a Bachelor&apos;s in Information Technology from BIT Mesra and thrive on building products that leave a lasting impact.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                I am a versatile, polyglot developer passionate about the modern web and mobile landscape. My technical toolkit spans core languages like <b>C++, Java, Python, and TypeScript</b>, and I specialize in crafting sleek, responsive user interfaces using <b>React, Next.js, Flutter, and React Native</b>.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Under the hood, I architect robust backend systems with <b>Node.js and Spring Boot</b>, while leveraging modern DevOps technologies like <b>Kubernetes and Helm</b> to deploy resilient infrastructure. From writing my first lines of C++ in high school to orchestrating enterprise-grade applications, I love blending clean code with creative problem-solving!
              </p>
            </div>
          </Col>
          <Col xs={12} xl={5}>
            <Image
              src="/assets/images/anubhav_2.jpg"
              alt="Profile"
              className={`h-100 w-100 object-fit-cover border border-white ${styles.aboutImg}`}
              data-aos="fade-up-left"
              layout="responsive"
              height={100}
              width={100}
            />
          </Col>
        </Row>
      </div>
    </>
  )
}
