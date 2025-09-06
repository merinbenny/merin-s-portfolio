import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import './App.css';

import bounceIcon from "./assets/img/bounce-icon.png";
import { AboutMe } from "./components/AboutMe";
import { Banner } from "./components/Banner";
import { ContactMe } from './components/ContactMe';
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import Preloader from "./components/Preloader";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

// Initialize Google Analytics
ReactGA.initialize("G-NB7HFN60FK"); 

function App() {
  const [visitorName, setVisitorName] = useState("");   // kept for sharing across components
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHuman, setIsHuman] = useState(false);

  // Track pageview
  useEffect(() => {
    if (nameSubmitted) {
      ReactGA.send("pageview");
    }
  }, [nameSubmitted]);

  // Submit name to Google Sheet
  const submitName = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzVX_g5ggYlcwgnGIvu7CXI8fWvZ6B8VBkoo1Y8Ku6ZK0aI7u2vJAGD7UXsV8i52T5C/exec?name=" +
        encodeURIComponent(visitorName || "Anonymous"),
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from Google Apps Script:", data);
        setNameSubmitted(true);
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setNameSubmitted(true);
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      });
  };

  // Step 1: Ask for checkbox + optional name
  if (!nameSubmitted) {
    return (
      <div className="popup-overlay">
        <div className="popup-box">
          {/* Bouncing larger image */}
          <img 
            src={bounceIcon} 
            alt="bouncing" 
            style={{ width: "200px", marginBottom: "15px" }} 
            className="bouncing-img"
          />

          <div style={{ marginBottom: "15px" }}>
            <input
              type="checkbox"
              checked={isHuman}
              onChange={() => setIsHuman(!isHuman)}
            />{" "}
            <label className="human-label">Are you a human?</label>
          </div>

          {isHuman && (
            <>
              <h3 style={{ color: "black" }}>Welcome!...</h3>
              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="(Optional) Your Name"
                style={{ margin: "10px 0", padding: "8px", width: "90%" }}
              />
              <br />
              <button className="btn btn-primary" onClick={submitName}>
                Continue
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Step 2: Show preloader
  if (loading) return <Preloader />;

  // Step 3: Show portfolio
  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavBar />
      <Banner visitorName={visitorName} />   {/* pass visitorName */}
      <AboutMe visitorName={visitorName} /> {/* you can pass it here too */}
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
