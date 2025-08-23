import React, { useState, useRef } from "react";
import ImagePopup from "./ImagePopup";

function Recipes() {
  const [popup, setPopup] = useState(null);
  const allRecipesRef = useRef(null);

  // Helper for keyboard accessibility
  const handleImageKey = (e, src, alt) => {
    if (e.key === "Enter" || e.key === " ") setPopup({ src, alt });
  };

  // Helper to get the correct image path
  const getImgSrc = (filename) => process.env.PUBLIC_URL + "/images/" + filename;

  const scrollToAllRecipes = () => {
    allRecipesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <h1>Recipes</h1>
      <section className="highlight">
        <h2>
          CHICKEN PARM <span className="subtitle">Recipe of the Week</span>
        </h2>
        <div className="highlight-content">
          <img
            src={getImgSrc("chickenparm.jpg")}
            alt="Chicken Parmesan"
            className="about-photo enlargeable"
            tabIndex={0}
            onClick={() => setPopup({ src: getImgSrc("chickenparm.jpg"), alt: "Chicken Parmesan" })}
            onKeyDown={e => handleImageKey(e, getImgSrc("chickenparm.jpg"), "Chicken Parmesan")}
          />
          <div>
            <p>
              This week's featured recipe is a classic Chicken Parm that's easy
              to make in any dorm kitchen.
            </p>
            <div className="ingredients-instructions">
              <div>
                <h3>Ingredients</h3>
                <ul>
                  <li>Chicken breast</li>
                  <li>Marinara sauce</li>
                  <li>Mozzarella cheese</li>
                </ul>
              </div>
              <div>
                <h3>Instructions</h3>
                <ol>
                  <li>Cook chicken</li>
                  <li>Add sauce &amp; cheese</li>
                  <li>Bake until golden</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <button
          className="see-all-link"
          onClick={scrollToAllRecipes}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            padding: 0,
            font: "inherit",
            textAlign: "left"
          }}
        >
          See all recipes ↓
        </button>
      </section>
      <section ref={allRecipesRef} id="all-recipes" className="recipes-list">
        <h2>Full menu</h2>
        <div className="filters">
          <button>Quick</button>
          <button>Vegetarian</button>
          <button>High Protein</button>
        </div>
        <div className="recipe-cards">
          <div className="recipe-card">
            <img
              src={getImgSrc("burger.jpg")}
              alt="Beef Burger"
              className="about-photo enlargeable"
              tabIndex={0}
              onClick={() => setPopup({ src: getImgSrc("burger.jpg"), alt: "Beef Burger" })}
              onKeyDown={e => handleImageKey(e, getImgSrc("burger.jpg"), "Beef Burger")}
            />
            <p>Homemade Beef Burger</p>
          </div>
          <div className="recipe-card">
            <img
              src={getImgSrc("pancakes.jpg")}
              alt="Pancakes with strawberry and caramel"
              className="about-photo enlargeable"
              tabIndex={0}
              onClick={() => setPopup({ src: getImgSrc("pancakes.jpg"), alt: "Pancakes with strawberry and caramel" })}
              onKeyDown={e => handleImageKey(e, getImgSrc("pancakes.jpg"), "Pancakes with strawberry and caramel")}
            />
            <p>Strawberry Caramel Pancakes</p>
          </div>
          <div className="recipe-card">
            <img
              src={getImgSrc("steak.jpg")}
              alt="Steak and vegetables"
              className="about-photo enlargeable"
              tabIndex={0}
              onClick={() => setPopup({ src: getImgSrc("steak.jpg"), alt: "Steak and vegetables" })}
              onKeyDown={e => handleImageKey(e, getImgSrc("steak.jpg"), "Steak and vegetables")}
            />
            <p>T-Bone Steak and Pepper Sauce</p>
          </div>
        </div>
      </section>
      {popup && (
        <ImagePopup
          src={popup.src}
          alt={popup.alt}
          onClose={() => setPopup(null)}
        />
      )}
    </main>
  );
}

export default Recipes;