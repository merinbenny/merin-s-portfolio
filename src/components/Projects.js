import 'animate.css';

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
    {
      title: "Student Profile Viewer",
      description: "Full Stack Project",
      imgUrl: projImg1,
      link:"https://github.com/merinbenny/StudentsProfileView"
    },
    {
      title: "OVC Operations Protal",
      description: "Based on Java, Springboot and Angular",
      imgUrl: projImg2,
      link:"https://github.com/merinbenny/OVC-operation"
    },
    {
      title: "Bookpedia",
      description: "Online Bookstore Web application",
      imgUrl: projImg3,
      link:"https://github.com/merinbenny/BookStore"
    },
    {
    title:"HappyPaws",
    description:"Final year project",
    imgUrl:projImg4,
    link:"https://github.com/merinbenny/happypaws"

    },
    {
      title:"Currency Converter",
      description:"Project done as part of Udemy C# Masterclass",
      imgUrl:projImg5,
      link:"https://github.com/merinbenny/CurrencyConverter_Static"
    },
    {
      title:"Console Quiz Program",
      description:"Built a C# console-based quiz application with multiple-choice questions and score tracking",
      imgUrl:projImg6,
      link:"https://github.com/merinbenny/C-Sharp"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I enjoy building and developing projects that combine creativity, technology, and practical problem-solving.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Comming Soon</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Comming Soon</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Loading my new projects :</p>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
