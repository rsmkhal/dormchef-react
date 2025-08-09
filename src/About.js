import React, { useState } from "react";
import ImagePopup from "./ImagePopup";

function About() {
  const [popup, setPopup] = useState(null);

  const handleImageKey = (e, src, alt) => {
    if (e.key === "Enter" || e.key === " ") setPopup({ src, alt });
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
          src="/images/chef-founder.jpg"
          alt="Photo of founder"
          className="about-photo enlargeable"
          tabIndex={0}
          onClick={() => setPopup({ src: "/images/chef-founder.jpg", alt: "Photo of founder" })}
          onKeyDown={e => handleImageKey(e, "/images/chef-founder.jpg", "Photo of founder")}
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