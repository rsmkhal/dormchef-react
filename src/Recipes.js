import React, { useState, useRef } from "react";
import ImagePopup from "./ImagePopup";
import RecipePopup from "./RecipePopup";

function Recipes() {
  const [popup, setPopup] = useState(null);
  const [detail, setDetail] = useState(null);

  const allRecipesRef = useRef(null);

  const getImgSrc = (filename) => process.env.PUBLIC_URL + "/images/" + filename;

  const scrollToAllRecipes = () => {
    allRecipesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Card keyboard handler: only fire when the CARD itself is focused
  const handleCardKey = (e, openDetailData) => {
    if (e.target !== e.currentTarget) return; // ignore events from child controls
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDetail(openDetailData);
    }
  };

  const handleImageKey = (e, src, alt) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setPopup({ src, alt });
    }
  };

  return (
    <main>
      <h1>Recipes</h1>

      {/* Featured section */}
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
            onClick={() =>
              setPopup({
                src: getImgSrc("chickenparm.jpg"),
                alt: "Chicken Parmesan",
              })
            }
            onKeyDown={(e) =>
              handleImageKey(e, getImgSrc("chickenparm.jpg"), "Chicken Parmesan")
            }
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
            textAlign: "left",
          }}
        >
          See all recipes ↓
        </button>
      </section>

      {/* All recipes */}
      <section ref={allRecipesRef} id="all-recipes" className="recipes-list">
        <h2>Full menu</h2>

        <div className="filters">
          <button>Quick</button>
          <button>Vegetarian</button>
          <button>High Protein</button>
        </div>

        <div className="recipe-cards">
          {/* ===== CARD: Burger ===== */}
          <div
            className="recipe-card"
            role="button"
            aria-haspopup="dialog"
            aria-label="Open recipe details: Homemade Beef Burger"
            tabIndex={0}
            onClick={() =>
              setDetail({
                title: "Homemade Beef Burger",
                ingredients: [
                  "Ground beef",
                  "Salt & pepper",
                  "Bun",
                  "Cheese",
                  "Lettuce",
                  "Tomato",
                ],
                instructions: [
                  "Season beef and form a patty.",
                  "Pan-sear 3–4 min per side; add cheese to melt.",
                  "Toast bun; assemble with toppings.",
                ],
              })
            }
            onKeyDown={(e) =>
              handleCardKey(e, {
                title: "Homemade Beef Burger",
                ingredients: [
                  "Ground beef",
                  "Salt & pepper",
                  "Bun",
                  "Cheese",
                  "Lettuce",
                  "Tomato",
                ],
                instructions: [
                  "Season beef and form a patty.",
                  "Pan-sear 3–4 min per side; add cheese to melt.",
                  "Toast bun; assemble with toppings.",
                ],
              })
            }
          >
            {/* Image as a real button so it's tabbable and opens the image popup */}
            <button
              type="button"
              className="img-zoom-btn"
              aria-haspopup="dialog"
              aria-label="Enlarge image: Beef Burger"
              onClick={(e) => {
                e.stopPropagation(); // don't open card detail
                setPopup({
                  src: getImgSrc("burger.jpg"),
                  alt: "Beef Burger",
                });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  setPopup({
                    src: getImgSrc("burger.jpg"),
                    alt: "Beef Burger",
                  });
                }
              }}
            >
              <img
                src={getImgSrc("burger.jpg")}
                alt="Beef Burger"
                className="about-photo enlargeable"
              />
            </button>
            <p>Homemade Beef Burger</p>
          </div>

          {/* ===== CARD: Pancakes ===== */}
          <div
            className="recipe-card"
            role="button"
            aria-haspopup="dialog"
            aria-label="Open recipe details: Strawberry Caramel Pancakes"
            tabIndex={0}
            onClick={() =>
              setDetail({
                title: "Strawberry Caramel Pancakes",
                ingredients: [
                  "Pancake mix",
                  "Milk/Water",
                  "Butter",
                  "Strawberries",
                  "Caramel sauce",
                ],
                instructions: [
                  "Mix batter per package.",
                  "Cook on medium heat until bubbles form; flip.",
                  "Top with sliced strawberries and caramel.",
                ],
              })
            }
            onKeyDown={(e) =>
              handleCardKey(e, {
                title: "Strawberry Caramel Pancakes",
                ingredients: [
                  "Pancake mix",
                  "Milk/Water",
                  "Butter",
                  "Strawberries",
                  "Caramel sauce",
                ],
                instructions: [
                  "Mix batter per package.",
                  "Cook on medium heat until bubbles form; flip.",
                  "Top with sliced strawberries and caramel.",
                ],
              })
            }
          >
            <button
              type="button"
              className="img-zoom-btn"
              aria-haspopup="dialog"
              aria-label="Enlarge image: Pancakes with strawberry and caramel"
              onClick={(e) => {
                e.stopPropagation();
                setPopup({
                  src: getImgSrc("pancakes.jpg"),
                  alt: "Pancakes with strawberry and caramel",
                });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  setPopup({
                    src: getImgSrc("pancakes.jpg"),
                    alt: "Pancakes with strawberry and caramel",
                  });
                }
              }}
            >
              <img
                src={getImgSrc("pancakes.jpg")}
                alt="Pancakes with strawberry and caramel"
                className="about-photo enlargeable"
              />
            </button>
            <p>Strawberry Caramel Pancakes</p>
          </div>

          {/* ===== CARD: Steak ===== */}
          <div
            className="recipe-card"
            role="button"
            aria-haspopup="dialog"
            aria-label="Open recipe details: T-Bone Steak and Pepper Sauce"
            tabIndex={0}
            onClick={() =>
              setDetail({
                title: "T-Bone Steak and Pepper Sauce",
                ingredients: [
                  "T-bone steak",
                  "Salt & pepper",
                  "Butter",
                  "Garlic",
                  "Black pepper",
                  "Cream (optional)",
                ],
                instructions: [
                  "Salt steak; bring to room temp.",
                  "Sear in butter 2–4 min/side; rest.",
                  "Deglaze with pepper + splash of cream for sauce.",
                ],
              })
            }
            onKeyDown={(e) =>
              handleCardKey(e, {
                title: "T-Bone Steak and Pepper Sauce",
                ingredients: [
                  "T-bone steak",
                  "Salt & pepper",
                  "Butter",
                  "Garlic",
                  "Black pepper",
                  "Cream (optional)",
                ],
                instructions: [
                  "Salt steak; bring to room temp.",
                  "Sear in butter 2–4 min/side; rest.",
                  "Deglaze with pepper + splash of cream for sauce.",
                ],
              })
            }
          >
            <button
              type="button"
              className="img-zoom-btn"
              aria-haspopup="dialog"
              aria-label="Enlarge image: Steak and vegetables"
              onClick={(e) => {
                e.stopPropagation();
                setPopup({
                  src: getImgSrc("steak.jpg"),
                  alt: "Steak and vegetables",
                });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  setPopup({
                    src: getImgSrc("steak.jpg"),
                    alt: "Steak and vegetables",
                  });
                }
              }}
            >
              <img
                src={getImgSrc("steak.jpg")}
                alt="Steak and vegetables"
                className="about-photo enlargeable"
              />
            </button>
            <p>T-Bone Steak and Pepper Sauce</p>
          </div>
        </div>
      </section>

      {/* img zoom popup */}
      {popup && (
        <ImagePopup
          src={popup.src}
          alt={popup.alt}
          onClose={() => setPopup(null)}
        />
      )}

      {/* recipe detail popup */}
      {detail && (
        <RecipePopup
          title={detail.title}
          ingredients={detail.ingredients}
          instructions={detail.instructions}
          onClose={() => setDetail(null)}
        />
      )}
    </main>
  );
}

export default Recipes;
