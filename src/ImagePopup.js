import React from "react";

function ImagePopup({ src, alt, onClose }) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="image-popup-overlay"
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
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          borderRadius: "12px",
          boxShadow: "0 4px 24px #0008",
          background: "#fff"
        }}
      />
    </div>
  );
}

export default ImagePopup;