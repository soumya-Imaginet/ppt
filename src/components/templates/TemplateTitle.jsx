import React from "react";

const TemplateTitle = ({ data }) => {
  return (
    <>
      <h1 style={{ maxWidth: "900px" }}>
        {data.title.includes("Modern") ? (
          <>
            Neural Networks in the{" "}
            <span style={{ color: "var(--accent-green)" }}>Modern</span>{" "}
            Software Tech Stack
          </>
        ) : (
          data.title
        )}
      </h1>

      {data.title === "Thank You" ? (
        <div
          className="diagram-stage"
          style={{ border: "none", background: "transparent" }}
        >
          <div className="stage-art visible">
            <svg viewBox="0 0 100 60">
              <text x="42" y="45" fill="var(--accent-magenta)" fontSize="40">
                ?
              </text>
            </svg>
          </div>
        </div>
      ) : (
        data.subtitle && <p className="subtitle stagger-1">{data.subtitle}</p>
      )}

      {data.author && (
        <div style={{ marginTop: "2rem" }} className="stagger-2">
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--accent-cyan)",
              fontWeight: "600",
            }}
          >
            Presented by: {data.author}
          </p>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
            Company: {data.company}
          </p>
        </div>
      )}

      {data.id === 1 && (
        <div className="floating-illustration">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <path
              className="s1-path"
              d="M10 50 L30 20 L70 30 L90 60 L60 80 Z"
              fill="none"
              stroke="var(--accent-blue)"
              strokeWidth="1"
            />
            <circle
              className="s1-node"
              style={{ "--i": 1 }}
              cx="10"
              cy="50"
              r="2"
              fill="var(--text-primary)"
            />
            <circle
              className="s1-node"
              style={{ "--i": 2 }}
              cx="30"
              cy="20"
              r="2"
              fill="var(--text-primary)"
            />
            <circle
              className="s1-node"
              style={{ "--i": 3 }}
              cx="70"
              cy="30"
              r="2"
              fill="var(--text-primary)"
            />
            <circle
              className="s1-node"
              style={{ "--i": 4 }}
              cx="90"
              cy="60"
              r="2"
              fill="var(--text-primary)"
            />
            <circle
              className="s1-node"
              style={{ "--i": 5 }}
              cx="60"
              cy="80"
              r="2"
              fill="var(--text-primary)"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default TemplateTitle;
