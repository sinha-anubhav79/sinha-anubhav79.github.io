import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Introduction() {
  return (
    <>
      <div className="about-section overflow-hidden p-5 rounded-3">
        <h1 className="text-center mb-4 display-2">Something about me...</h1>
        <hr />
        <Row className="align-items-center">
          <Col xs={12} xl={7}>
            <div className="fs-5">
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Hi! My name is <b>Anubhav Sinha</b>.
                Currently I am a <b>Software Developer at Oracle</b>, working in the
                Communications GBU with the charging team of BRM, since August 2023.
                I have also worked as a <b>Software Engineer Intern at Microsoft</b> during my
                summer break of 2022, with the Fluid team of Loop components.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                I graduated with a Bachelor&apos;s degree in Information Technology
                from Birla Institute of Technology, MESRA. I have been a coding enthusiast
                and have been really into the tech world. I love technology and have a
                keen interest in developing products that create an impact.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                I got my first real taste of programming in C++ during the final years of high
                school. But the spark had ignited earlier—back when I was tinkering with Java in
                NetBeans, trying to write my own programs long before I officially chose Computer
                Science as a subject.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Ever since I was thirteen, I was curious about how things worked on the internet.
                I still remember pondering how I can just throw in some www.something.com and
                flaunt in front of my mom with the most basic, colorless HTML page I built in
                the school computer lab — just happy to have something live on a screen.
              </p>
              <p
                data-aos="fade-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                From those humble beginnings to freelancing as a web developer, and eventually
                working with tech giants like Microsoft and Oracle, it’s been a wild, rewarding
                ride with a whole lot of growth along the way.
              </p>
            </div>
          </Col>
          <Col xs={12} xl={5}>
            <Image
              src="/assets/images/anubhav.jpg"
              alt="Profile"
              className="h-100 w-100 object-fit-cover border border-white about-img"
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
