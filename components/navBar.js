import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const navToggle = useRef(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function navCollapse() {
    if (document.getElementById("basic-navbar-nav").classList.contains("show")) {
      navToggle.current?.click();
    }
  }

  return (
    <>
      <Navbar style={{ background: "var(--nav-bg)", transition: "background-color 0.3s ease" }} expand="lg" className="sticky-top" data-bs-theme={mounted && theme === 'light' ? 'light' : 'dark'}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/assets/images/main-icon.png"
              alt="brand"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle ref={navToggle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <span className="nav-link">
                <Link className={pathname === "/" ? "active-nav" : ""} onClick={navCollapse} href="/">Home</Link>
              </span>
              <span className="nav-link">
                <Link className={pathname === "/about" ? "active-nav" : ""} onClick={navCollapse} href="/about">About</Link>
              </span>
              <span className="nav-link">
                <Link className={pathname === "/experience" ? "active-nav" : ""} onClick={navCollapse} href="/experience">Experience</Link>
              </span>
              <span className="nav-link">
                <Link className={pathname === "/projects" ? "active-nav" : ""} onClick={navCollapse} href="/projects">Projects</Link>
              </span>
              <span className="nav-link">
                <Link className={pathname === "/skills" ? "active-nav" : ""} onClick={navCollapse} href="/skills">Skills</Link>
              </span>
              <span className="nav-link">
                <Link className={pathname === "/resume" ? "active-nav" : ""} onClick={navCollapse} href="/resume">Resume</Link>
              </span>
            </Nav>
            
            {/* Theme Toggle Button */}
            {mounted && (
              <Button 
                variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} 
                className="ms-auto d-flex align-items-center justify-content-center rounded-circle p-2 border-0" 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle Theme"
                style={{ width: '40px', height: '40px' }}
              >
                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
