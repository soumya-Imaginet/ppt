import React from "react";

const TemplateHybrid = ({ data, visibleFragments, onCardClick }) => {
  return (
    <>
      <h2>{data.title}</h2>
      {data.subtitle && <p className="subtitle">{data.subtitle}</p>}

      <div className="visual-grid">
        {data.items.map((item) => {
          const isVisible = visibleFragments.includes(item.id);
          const isActive =
            visibleFragments[visibleFragments.length - 1] === item.id;
          return (
            <div
              key={item.id}
              className={`visual-card reveal-item ${isVisible ? "visible" : ""} ${isActive ? "active" : ""}`}
              id={item.id}
              onClick={() => onCardClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="diagram-stage">
        {data.diagrams &&
          data.diagrams.map((diag) => {
            const isVisible = visibleFragments.includes(diag.id);
            // Slide 4 specific: hide s4-diagram-1 when s4-diagram-2 is visible
            const isHiddenByParity =
              diag.id === "s4-diagram-1" &&
              visibleFragments.includes("s4-diagram-2");

            return (
              <div
                key={diag.id}
                className={`stage-art reveal-item ${isVisible ? "visible" : ""}`}
                style={
                  isHiddenByParity ? { opacity: 0, pointerEvents: "none" } : {}
                }
                id={diag.id}
              >
                {diag.type === "svg" && diag.id === "s4-diagram-1" && (
                  <svg viewBox="0 0 100 60">
                    <circle cx="20" cy="30" r="5" fill="var(--accent-cyan)" />
                    <line
                      x1="25"
                      y1="30"
                      x2="75"
                      y2="30"
                      stroke="var(--accent-blue)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="80"
                      cy="30"
                      r="5"
                      fill="var(--accent-magenta)"
                    />
                    <text x="10" y="50" fill="white" fontSize="4">
                      Biologically Inspired Pattern Recognition
                    </text>
                  </svg>
                )}
                {diag.type === "image" && <img src={diag.path} alt="Diagram" />}
              </div>
            );
          })}
        {data.diagram && !data.diagrams && (
          <div
            className={`stage-art reveal-item ${visibleFragments.includes(data.id + "-diagram") ? "visible" : ""}`}
            id={`${data.id}-diagram`}
          >
            <img src={data.diagram} alt="Diagram" />
          </div>
        )}
      </div>
    </>
  );
};

export default TemplateHybrid;
