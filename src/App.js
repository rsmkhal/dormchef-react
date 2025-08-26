import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import "./App.css";
import Recipes from "./Recipes";
import About from "./About";
import Contact from "./Contact";

function Splash() {
  return (
    <main className="splash">
      <h1>Easy, Cheap & Healthy Recipes for Students</h1>
      <p>Discover delicious meals you can make in your dorm room, on a budget!</p>
      <Link to="/recipes" className="btn-primary">See Recipes</Link>
    </main>
  );
}

function TitleSetter() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles = {
      "/": "Home: DormChef",
      "/recipes": "Recipes: DormChef",
      "/about": "About: DormChef",
      "/contact": "Contact: DormChef",
    };
    document.title = titles[pathname] || "DormChef";
  }, [pathname]);
  return null;
}

function App() {
  const [fontSize, setFontSize] = useState(100);
  const increaseFont = () => setFontSize(s => Math.min(200, s + 10));
  const decreaseFont = () => setFontSize(s => Math.max(70, s - 10));

  return (
    <Router>
      <TitleSetter />
      <div className="App" style={{ fontSize: `${fontSize}%` }}>
        <nav aria-label="Primary">
          <Link to="/" className="logo">DormChef</Link>
          <ul className="navbar">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/recipes">Recipes</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            <li className="font-size-controls">
              <div role="group" aria-label="Font size controls">
                <button type="button" onClick={decreaseFont} aria-label="Decrease font size">A-</button>
                <button type="button" onClick={increaseFont} aria-label="Increase font size">A+</button>
              </div>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
