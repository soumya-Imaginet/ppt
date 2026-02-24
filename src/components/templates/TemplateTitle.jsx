import React from "react";
import { motion } from "framer-motion";

const aiGradients = [
  "linear-gradient(90deg, #00f2ff, #bc13fe, #2962ff, #7c4dff)",
  "linear-gradient(90deg, #bc13fe, #2962ff, #7c4dff, #00f2ff)",
  "linear-gradient(90deg, #2962ff, #7c4dff, #00f2ff, #bc13fe)",
  "linear-gradient(90deg, #7c4dff, #00f2ff, #bc13fe, #2962ff)",
  "linear-gradient(90deg, #00f2ff, #bc13fe, #2962ff, #7c4dff)",
];

const TemplateTitle = ({ data }) => {
  return (
    <>
      <motion.h1
        style={{
          maxWidth: "900px",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          backgroundSize: "200% auto",
          display: "inline-block",
        }}
        animate={{
          backgroundImage: aiGradients,
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {data.title.includes("Modern") ? (
          <>
            Neural Networks in the Modern Software Tech Stack
          </>
        ) : (
          data.title
        )}
      </motion.h1>

      {data.title === "Thank You" ? (
        <>
          {/* Decorative subtitle */}
          <p
            className="subtitle stagger-1"
            style={{ fontSize: "1.4rem", marginTop: "0.5rem" }}
          >
            For your time and attention
          </p>

          {/* Rich animated illustration */}
          <div
            className="diagram-stage"
            style={{
              border: "none",
              background: "transparent",
              marginTop: "1rem",
            }}
          >
            <div className="stage-art visible">
              <svg
                viewBox="0 0 500 280"
                style={{ width: "100%", height: "100%" }}
              >
                {/* Radiating rings */}
                {[80, 60, 40, 25].map((r, i) => (
                  <circle
                    key={`ring-${i}`}
                    cx="250"
                    cy="120"
                    r={r}
                    fill="none"
                    stroke="var(--accent-cyan)"
                    strokeWidth="0.8"
                    opacity={0.08 + i * 0.04}
                    className="layer-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}

                {/* Glowing center circle */}
                <circle
                  cx="250"
                  cy="120"
                  r="50"
                  fill="rgba(0,242,255,0.04)"
                  stroke="var(--accent-cyan)"
                  strokeWidth="2"
                  className="layer-pulse"
                />

                {/* Q&A icon */}
                <text
                  x="250"
                  y="110"
                  fill="var(--accent-cyan)"
                  fontSize="28"
                  textAnchor="middle"
                  fontWeight="700"
                  style={{ fontFamily: "inherit" }}
                >
                  Q&A
                </text>
                <text
                  x="250"
                  y="135"
                  fill="var(--accent-magenta)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  Let's Discuss
                </text>

                {/* Floating particles */}
                {[
                  {
                    cx: 120,
                    cy: 50,
                    r: 3,
                    color: "var(--accent-cyan)",
                    delay: 0,
                  },
                  {
                    cx: 380,
                    cy: 60,
                    r: 4,
                    color: "var(--accent-magenta)",
                    delay: 0.5,
                  },
                  {
                    cx: 90,
                    cy: 160,
                    r: 3,
                    color: "var(--accent-green)",
                    delay: 1.0,
                  },
                  {
                    cx: 410,
                    cy: 170,
                    r: 3,
                    color: "var(--accent-orange)",
                    delay: 1.5,
                  },
                  {
                    cx: 160,
                    cy: 200,
                    r: 2,
                    color: "var(--accent-blue)",
                    delay: 0.3,
                  },
                  {
                    cx: 340,
                    cy: 190,
                    r: 2,
                    color: "var(--accent-cyan)",
                    delay: 0.8,
                  },
                  {
                    cx: 200,
                    cy: 40,
                    r: 2,
                    color: "var(--accent-magenta)",
                    delay: 1.2,
                  },
                  {
                    cx: 300,
                    cy: 35,
                    r: 2,
                    color: "var(--accent-green)",
                    delay: 0.6,
                  },
                ].map((p, i) => (
                  <circle
                    key={`p-${i}`}
                    cx={p.cx}
                    cy={p.cy}
                    r={p.r}
                    fill={p.color}
                    opacity="0.6"
                    className="node-blink"
                    style={{ animationDelay: `${p.delay}s` }}
                  />
                ))}

                {/* Orbiting particle around Q&A */}
                <circle
                  r="4"
                  fill="var(--accent-cyan)"
                  className="data-particle"
                >
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    path="M 250,40 C 330,40 330,200 250,200 C 170,200 170,40 250,40"
                  />
                </circle>
                <circle
                  r="3"
                  fill="var(--accent-magenta)"
                  className="data-particle"
                >
                  <animateMotion
                    dur="7s"
                    repeatCount="indefinite"
                    path="M 170,120 C 170,50 330,50 330,120 C 330,190 170,190 170,120"
                  />
                </circle>

                {/* Decorative corner accents */}
                <path
                  d="M 60,30 L 60,15 L 75,15"
                  fill="none"
                  stroke="var(--accent-cyan)"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <path
                  d="M 440,30 L 440,15 L 425,15"
                  fill="none"
                  stroke="var(--accent-cyan)"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <path
                  d="M 60,230 L 60,245 L 75,245"
                  fill="none"
                  stroke="var(--accent-magenta)"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <path
                  d="M 440,230 L 440,245 L 425,245"
                  fill="none"
                  stroke="var(--accent-magenta)"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
              </svg>
            </div>
          </div>
        </>
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
