import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import './App.css';

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
  const [visitorName, setVisitorName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check localStorage for returning visitors
  useEffect(() => {
    const savedName = localStorage.getItem("visitorName");
    if (savedName) {
      setVisitorName(savedName);
      setNameSubmitted(true);
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);

  // Track pageview
  useEffect(() => {
    if (nameSubmitted) {
      ReactGA.send("pageview");
    }
  }, [nameSubmitted]);

  // Submit name to Google Sheet
 const submitName = () => {
  if (!visitorName) return alert("Please enter your name!");

  fetch(
    "https://script.google.com/macros/s/AKfycbzVX_g5ggYlcwgnGIvu7CXI8fWvZ6B8VBkoo1Y8Ku6ZK0aI7u2vJAGD7UXsV8i52T5C/exec?name=" +
      encodeURIComponent(visitorName),
    {
      method: "POST", // still POST, but param is passed in query string
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Response from Google Apps Script:", data);
      localStorage.setItem("visitorName", visitorName);
      setNameSubmitted(true);
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      // still go to preloader even if error
      localStorage.setItem("visitorName", visitorName);
      setNameSubmitted(true);
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    });
};


  // Step 1: Ask for name
  if (!nameSubmitted) {
    return (
      <div style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center",
        zIndex: 9999,
      }}>
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
        }}>
          <h3>Welcome! Please enter your name:</h3>
          <input
            type="text"
            value={visitorName}
            onChange={(e) => setVisitorName(e.target.value)}
            placeholder="Your Name"
            style={{ margin: "10px 0", padding: "5px", width: "80%" }}
          />
          <br />
          <button className="btn btn-primary" onClick={submitName}>
            Submit
          </button>
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
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
