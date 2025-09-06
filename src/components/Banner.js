import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/header-img.png";

export const Banner = ({ visitorName }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = ["Full Stack Web Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    {visitorName 
                      ? <>Hi {visitorName},<br />Welcome to Merin's Portfolio</> 
                      : "Hi user! Welcome to Merin's Portfolio"}
                  </h1>

                  <h2>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer","Full stack Web Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  
                  <p>
                    I’m curious and creative software developer who loves bringing ideas to life through code. 
                    My focus is on building dynamic, responsive, and visually appealing web applications. 
                    I enjoy experimenting with new technologies, improving workflows, and learning continuously. 
                    When I’m not coding, you’ll find me exploring design trends or finding inspiration for my next project.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
