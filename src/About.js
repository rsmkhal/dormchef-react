import React, { useState } from "react";
import ImagePopup from "./ImagePopup";

function About() {
  const [popup, setPopup] = useState(null);

  const imgSrc = process.env.PUBLIC_URL + "/images/chef-founder.jpg";
  const imgAlt = "Photo of founder";

  const handleImageKey = (e) => {
    if (e.key === "Enter" || e.key === " ") setPopup({ src: imgSrc, alt: imgAlt });
  };

  return (
    <main className="about">
      <h1>About Us</h1>
      <div className="about-content">
        <div>
          <p>
            DormChef was started by students, for students. We believe anyone can cook healthy, affordable meals in a dorm room!
          </p>
          <p>
            Learn more at{" "}
            <a href="https://www.budgetbytes.com/" target="_blank" rel="noopener noreferrer">
              www.budgetbytes.com
            </a>
          </p>
          <p>
            Check out our{" "}
            <a href="https://www.investopedia.com/terms/p/partnership.asp" target="_blank" rel="noopener noreferrer">
              partnerships
            </a>{" "}
            and{" "}
            <a href="https://www.portfolio.com" target="_blank" rel="noopener noreferrer">
              portfolio
            </a>.
          </p>
        </div>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="about-photo enlargeable"
          tabIndex={0}
          onClick={() => setPopup({ src: imgSrc, alt: imgAlt })}
          onKeyDown={handleImageKey}
        />
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