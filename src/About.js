import React, { useEffect, useState } from "react";
import ImagePopup from "./ImagePopup";

function About() {
  // page title for this route
  useEffect(() => { document.title = "About — DormChef"; }, []);

  const [popup, setPopup] = useState(null);

  const imgSrc = process.env.PUBLIC_URL + "/images/chef-founder.jpg";
  const imgAlt = "DormChef founder in a dorm kitchen";

  return (
    <main className="about" id="main">
      <h1>About Us</h1>

      <div className="about-content">
        <div>
          <p>
            DormChef was started by students, for students. We believe anyone can cook healthy, affordable meals in a dorm room!
          </p>
          <p>
            For budget-friendly recipes, see{" "}
            <a href="https://www.budgetbytes.com/" target="_blank" rel="noopener noreferrer">
              Budget Bytes
            </a>.
          </p>
          <p>
            Learn about our{" "}
            <a href="https://www.investopedia.com/terms/p/partnership.asp" target="_blank" rel="noopener noreferrer">
              partnerships
            </a>{" "}
            and view our{" "}
            <a href="https://www.portfolio.com" target="_blank" rel="noopener noreferrer">
              portfolio
            </a>.
          </p>
        </div>

        {/* mmage-as-button for zoom */}
        <button
          type="button"
          className="img-zoom-btn"
          aria-haspopup="dialog"
          aria-label="Enlarge founder photo"
          onClick={() => setPopup({ src: imgSrc, alt: imgAlt })}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setPopup({ src: imgSrc, alt: imgAlt });
            }
          }}
          style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}
        >
          <img
            src={imgSrc}
            alt="" // decorative to avoid duplicate announcements
            aria-hidden="true"
            className="about-photo enlargeable"
            style={{ display: "block", maxWidth: "100%", borderRadius: 12 }}
          />
        </button>
      </div>

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

export default About;
