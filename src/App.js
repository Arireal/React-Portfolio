import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ReactCategory from "./ReactCategory"; 
import FSCategory from "./FSCategory";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  );
};

const AppContent = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation(); // Get current route

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Only show Header and Footer if NOT on /react page */}
      {location.pathname !== "/react" && <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Skills darkMode={darkMode} />
              <Projects darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </>
          }
        />
        <Route path="/react" element={<ReactCategory darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/fullstack" element={<FSCategory darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />

      </Routes>

      {location.pathname !== "/react" && <Footer darkMode={darkMode} />}
    </div>
  );
};

export default App;
