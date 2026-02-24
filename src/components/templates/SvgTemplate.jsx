import React from "react";

const SvgTemplate = ({ data, visibleFragments, onCardClick }) => {
  return (
    <>
      <h2>{data.title}</h2>
      {data.subtitle && <p className="subtitle">{data.subtitle}</p>}

      {data.items && (
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
      )}

      <div className="diagram-stage">
        {data.diagrams &&
          data.diagrams.map((diag) => {
            const isVisible = visibleFragments.includes(diag.id);
            return (
              <div
                key={diag.id}
                className={`stage-art reveal-item ${isVisible ? "visible" : ""}`}
                id={diag.id}
              >
                {diag.type === "svg" && (
                  <svg viewBox="0 0 100 60">
                    {diag.id === "s6-diagram" && (
                      <>
                        <path
                          d="M 20 20 L 80 20"
                          stroke="var(--accent-cyan)"
                          strokeWidth="2"
                        />
                        <path
                          d="M 80 40 L 20 40"
                          stroke="var(--accent-magenta)"
                          strokeWidth="2"
                          strokeDasharray="4"
                        />
                        <text
                          x="40"
                          y="15"
                          fill="var(--accent-cyan)"
                          fontSize="4"
                        >
                          Forward Pass
                        </text>
                        <text
                          x="40"
                          y="50"
                          fill="var(--accent-magenta)"
                          fontSize="4"
                        >
                          Backpropagation
                        </text>
                      </>
                    )}
                    {diag.id === "s7-diagram" && (
                      <>
                        <rect
                          x="10"
                          y="20"
                          width="30"
                          height="20"
                          fill="none"
                          stroke="var(--accent-blue)"
                          rx="2"
                        />
                        <text
                          x="15"
                          y="32"
                          fill="var(--text-primary)"
                          fontSize="4"
                        >
                          IF/ELSE
                        </text>
                        <path
                          d="M 60 50 Q 80 10 100 50"
                          fill="var(--accent-magenta)"
                          opacity="0.3"
                        />
                        <text
                          x="70"
                          y="30"
                          fill="var(--text-secondary)"
                          fontSize="4"
                        >
                          92% Match
                        </text>
                      </>
                    )}
                    {diag.id === "s9-diagram" && (
                      <>
                        <circle
                          cx="30"
                          cy="30"
                          r="10"
                          fill="none"
                          stroke="var(--accent-cyan)"
                        />
                        <circle
                          cx="70"
                          cy="30"
                          r="10"
                          fill="none"
                          stroke="var(--accent-magenta)"
                        />
                        <path
                          d="M 40 30 L 60 30"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <text x="22" y="55" fill="white" fontSize="4">
                          Intelligent Pattern Analysis
                        </text>
                      </>
                    )}
                    {diag.id === "s10-diagram" && (
                      <>
                        <rect
                          x="20"
                          y="10"
                          width="60"
                          height="40"
                          fill="rgba(255,255,255,0.05)"
                          stroke="white"
                          rx="4"
                        />
                        <rect
                          x="25"
                          y="15"
                          width="20"
                          height="10"
                          fill="var(--accent-blue)"
                          rx="2"
                        />
                        <text
                          x="50"
                          y="35"
                          fill="var(--accent-green)"
                          fontSize="4"
                        >
                          AI-Driven UI
                        </text>
                      </>
                    )}
                    {diag.id === "s11-diagram" && (
                      <>
                        <text
                          x="5"
                          y="20"
                          fill="var(--accent-orange)"
                          fontSize="8"
                        >
                          TENSORFLOW
                        </text>
                        <text
                          x="55"
                          y="45"
                          fill="var(--accent-blue)"
                          fontSize="8"
                        >
                          PYTORCH
                        </text>
                      </>
                    )}
                    {diag.id === "s12-diagram" && (
                      <>
                        <path
                          d="M 20 50 L 50 10 L 80 50 Z"
                          fill="none"
                          stroke="red"
                          strokeWidth="2"
                        />
                        <text x="46" y="42" fill="red" fontSize="12">
                          !
                        </text>
                        <text x="35" y="55" fill="red" fontSize="4">
                          Bias & Complexity
                        </text>
                      </>
                    )}
                    {diag.id === "s13-diagram" && (
                      <>
                        <circle
                          cx="50"
                          cy="30"
                          r="20"
                          fill="none"
                          stroke="var(--accent-green)"
                          strokeDasharray="2,2"
                        />
                        <path
                          d="M 40 30 L 48 38 L 65 25"
                          fill="none"
                          stroke="var(--accent-green)"
                          strokeWidth="4"
                        />
                        <text
                          x="40"
                          y="55"
                          fill="var(--accent-green)"
                          fontSize="4"
                        >
                          Scalable Loops
                        </text>
                      </>
                    )}
                    {diag.id === "s14-diagram" && (
                      <>
                        <text
                          x="10"
                          y="30"
                          fill="var(--accent-cyan)"
                          fontSize="8"
                          fontWeight="bold"
                        >
                          IMAGINET VENTURES
                        </text>
                        <text
                          x="15"
                          y="45"
                          fill="var(--accent-magenta)"
                          fontSize="4"
                        >
                          Intelligence Accelerated
                        </text>
                      </>
                    )}
                    {diag.id === "s16-diagram" && (
                      <>
                        <path
                          d="M 20 30 A 30 30 0 1 1 80 30"
                          fill="none"
                          stroke="var(--accent-blue)"
                        />
                        <text x="40" y="35" fill="white" fontSize="4">
                          Self-Optimization
                        </text>
                      </>
                    )}
                    {diag.id === "s17-diagram" && (
                      <>
                        <rect
                          x="25"
                          y="15"
                          width="50"
                          height="30"
                          fill="rgba(0,255,255,0.1)"
                          stroke="var(--accent-cyan)"
                          rx="4"
                        />
                        <text x="35" y="32" fill="white" fontSize="4">
                          AI-Native Software
                        </text>
                      </>
                    )}
                    {diag.id === "s18-diagram" && (
                      <>
                        <circle
                          cx="50"
                          cy="30"
                          r="15"
                          fill="var(--accent-magenta)"
                          opacity="0.4"
                        />
                        <text x="42" y="32" fill="white" fontSize="6">
                          STRATEGY
                        </text>
                      </>
                    )}
                  </svg>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SvgTemplate;
