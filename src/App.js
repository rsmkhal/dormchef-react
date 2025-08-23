import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Recipes from './Recipes';
import About from './About';
import Contact from './Contact';

function Splash() {
  return (
    <main className="splash">
      <h1>Easy, Cheap & Healthy Recipes for Students</h1>
      <p>Discover delicious meals you can make in your dorm room, on a budget!</p>
      <Link to="/recipes" className="btn-primary">See Recipes</Link>
    </main>
  );
}

function App() {
  const [fontSize, setFontSize] = useState(100);

  const increaseFont = () => {
    if (fontSize < 200) setFontSize(fontSize + 10);
  };

  const decreaseFont = () => {
    if (fontSize > 70) setFontSize(fontSize - 10);
  };

  return (
    <Router>
      <div className="App" style={{ fontSize: `${fontSize}%` }}>
        <nav>
          <Link to="/" className="logo">DormChef</Link>
          <ul className="navbar">
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <div className="font-size-controls" aria-label="Font size controls">
            <button onClick={decreaseFont} aria-label="Decrease font size">A-</button>
            <button onClick={increaseFont} aria-label="Increase font size">A+</button>
          </div>
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