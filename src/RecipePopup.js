import React from "react";

function RecipePopup({ title, ingredients = [], instructions = [], onClose }) {
  React.useEffect(() => {
    const onKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="recipe-popup-overlay"
      tabIndex={0}
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(0,0,0,0.7)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999
      }}
    >
      {/* stop click from bubbling so only the overlay closes */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          color: "#111",
          width: "min(720px, 90vw)",
          maxHeight: "90vh",
          overflow: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 24px #0008",
          padding: "20px"
        }}
      >
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
          <div>
            <h3>Instructions</h3>
            <ol>
              {instructions.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePopup;
