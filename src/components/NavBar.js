import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ReactGA from "react-ga4";
import { BrowserRouter as Router } from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg';
import Preloader from "./Preloader"; // make sure this path is correct

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  const handleResumeClick = (e) => {
    e.preventDefault(); // prevent immediate navigation
    ReactGA.event({ category: "Resume", action: "Clicked Resume Button" });
    setShowPreloader(true);

    setTimeout(() => {
      setShowPreloader(false);
      window.open(`${process.env.PUBLIC_URL}/Merin_SoftwareDeveloper_Resume.pdf`, "_blank");
    }, 1500); // show preloader for 1.5 seconds
  };

  return (
    <Router>
      {showPreloader && <Preloader />}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/"><h2 style={{ color: 'white' }}>Merin Benny</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

              <Nav.Link
                href={`${process.env.PUBLIC_URL}/Merin_SoftwareDeveloper_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link"
                onClick={handleResumeClick}
              >
                Resume
              </Nav.Link>

              <Nav.Link href="mailto:merinsimmy@gmail.com" className="navbar-link" target="_blank">Gmail</Nav.Link>
              <Nav.Link href="https://github.com/merinbenny" className="navbar-link" target="_blank">Github</Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="connect-wrapper">
                <button className="vvd"><span>Let’s Connect</span></button>
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/merin-benny-358b921a0" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                </div>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
