import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router
} from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
             <h2 style={{ color: 'white' }}>Merin Benny</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
               {/* Download Resume Button */}
  <Nav.Link href="/Merin_Resume_fsd.pdf" target="_blank" rel="noopener noreferrer" className="navbar-link">
    Resume
  </Nav.Link>
              {/* Gmail link added here */}
              <Nav.Link href="mailto:merin31032000@gmail.com" className="navbar-link" target="_blank">Gmail</Nav.Link>
           
            <Nav.Link href="https://github.com/merinbenny" className="navbar-link" target="_blank">Github</Nav.Link>
             </Nav>

            <span className="navbar-text">
              <div className="connect-wrapper">
                <button className="vvd"><span>Let’s Connect</span></button>
                <div className="social-icon">
                  <a href="https://www.instagram.com/_merinbenny/" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
                  <a href="https://www.linkedin.com/in/merin-benny-358b921a0" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                </div>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
