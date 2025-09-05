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
ReactGA.initialize("G-NB7HFN60FK"); // replace with your GA Measurement ID

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track pageview whenever the app loads
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  if (loading) return <Preloader />;

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
