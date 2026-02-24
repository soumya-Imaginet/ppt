import React from "react";

const TemplateGrid = ({ data, visibleFragments, onCardClick }) => {
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
    </>
  );
};

export default TemplateGrid;
