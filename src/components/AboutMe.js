import 'animate.css';
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import aboutImg from "../assets/img/BD019326-BE9A-4768-83A6-44DC1EADED0E-removebg-preview.png"; // replace with your actual image

export const AboutMe = () => {
  return (
    <section className="about" id="about"style={{ padding: "80px 0" }}>
      <Container>
        <Row className="align-items-center">

          {/* Left: Image */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={aboutImg}
                  alt="Merin Benny"
                  style={{ maxWidth: "50%", borderRadius: "20px" }}
                />
              }
            </TrackVisibility>
          </Col>

          {/* Right: Text */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2><br>
                  </br>
                  <p>
                    Hello! I’m Merin Benny, based in Toronto, Ontario. I am a passionate Full Stack Developer 
                    with hands-on experience in building responsive and dynamic web applications.
                  </p>
                  <p>
                    I specialize in front-end and back-end development, including technologies like 
                    React, Node.js, Express, and SQL/NoSQL databases. I enjoy solving complex problems 
                    and delivering clean, maintainable code.
                  </p>
                  <p>
                    When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                    and connecting with like-minded developers. My goal is to build web solutions that provide 
                    a seamless user experience and make an impact.
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
