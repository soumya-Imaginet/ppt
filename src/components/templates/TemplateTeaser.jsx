import React from "react";

const TemplateTeaser = ({ data }) => {
  return (
    <div className="template-teaser full-screen">
      <div className="teaser-css-background">
        <div className="teaser-orb orb-1"></div>
        <div className="teaser-orb orb-2"></div>
        <div className="teaser-orb orb-3"></div>
        <div className="teaser-grid"></div>
        <div className="teaser-vignette-overlay"></div>
      </div>

      <div className="teaser-content">
        <div className="teaser-overlay">
          <div
            className="logo-section"
            style={{
              marginTop: "-2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="logo-glass-panel">
              <img
                src="assets/ImagiNET Ventures Logo (1).png"
                alt="ImagiNET Ventures Logo"
                className="exact-imaginet-logo"
              />
            </div>
          </div>

          <div className="shift-branding">
            <h1 className="shift-main-title">SHIFT</h1>
            <div className="teaser-divider"></div>
            <h2 className="episode-tag">{data.subtitle}</h2>
          </div>
        </div>
      </div>

      <div className="teaser-footer">
        <span className="tech-code">IMAGINET_SHIFT // SESSION_07_ACTIVE</span>
        <span className="tech-code-right">RES_4K_STABLE</span>
      </div>
    </div>
  );
};

export default TemplateTeaser;
