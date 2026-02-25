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
          <>Neural Networks in the Modern Software Tech Stack</>
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

          {/* NEXT-GEN NEURAL SINGULARITY ILLUSTRATION */}
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
                viewBox="0 0 800 450"
                style={{ width: "100%", height: "100%", overflow: "visible" }}
              >
                <defs>
                  <filter
                    id="hyperGlow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>
                  <linearGradient
                    id="coreGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="var(--accent-cyan)" />
                    <stop offset="100%" stopColor="var(--accent-blue)" />
                  </linearGradient>
                </defs>

                {/* Ambient Particle Field */}
                {[...Array(30)].map((_, i) => (
                  <circle
                    key={`p-${i}`}
                    cx={Math.random() * 800}
                    cy={Math.random() * 450}
                    r={Math.random() * 1.5}
                    fill={
                      i % 2 === 0
                        ? "var(--accent-cyan)"
                        : "var(--accent-magenta)"
                    }
                    className="particle-next-gen"
                    style={{ animationDelay: `${Math.random() * 5}s` }}
                    opacity="0.2"
                  />
                ))}

                {/* Main Singularity Core Group */}
                <g transform="translate(400, 225)">
                  {/* Massive energy rings */}
                  <g className="orbital-ring">
                    <circle
                      r="180"
                      fill="none"
                      stroke="var(--accent-cyan)"
                      strokeWidth="0.5"
                      opacity="0.1"
                      strokeDasharray="100 20"
                    />
                    <circle
                      r="190"
                      fill="none"
                      stroke="var(--accent-cyan)"
                      strokeWidth="1"
                      opacity="0.05"
                    />
                  </g>
                  <g className="orbital-ring-reverse">
                    <circle
                      r="160"
                      fill="none"
                      stroke="var(--accent-magenta)"
                      strokeWidth="0.5"
                      opacity="0.1"
                      strokeDasharray="50 10"
                    />
                  </g>

                  {/* Synaptic Light Firings (Firing from center) */}
                  {[...Array(6)].map((_, i) => (
                    <path
                      key={`fire-${i}`}
                      d={`M 0,0 Q ${Math.cos((i * 60 * Math.PI) / 180) * 100},${Math.sin((i * 60 * Math.PI) / 180) * 100} ${Math.cos((i * 60 * Math.PI) / 180) * 300},${Math.sin((i * 60 * Math.PI) / 180) * 300}`}
                      fill="none"
                      stroke="var(--accent-cyan)"
                      strokeWidth="0.5"
                      className="synapse-path"
                      style={{ animationDelay: `${i * 1.2}s` }}
                    />
                  ))}

                  {/* Orbital Text Data */}
                  <g className="orbital-ring">
                    <path
                      id="coreTextPath"
                      d="M -150,0 A 150,150 0 1,1 150,0 A 150,150 0 1,1 -150,0"
                      fill="none"
                    />
                    <text
                      fill="var(--accent-cyan)"
                      fontSize="8"
                      opacity="0.3"
                      style={{ fontFamily: "monospace", letterSpacing: "2px" }}
                    >
                      <textPath href="#coreTextPath">
                        NEURAL NETWORKS • ADAPTIVE SOFTWARE • ARTIFICIAL
                        INTELLIGENCE • NEXT-GEN TECH •{" "}
                      </textPath>
                    </text>
                  </g>

                  {/* Consolidated Topic Nodes */}
                  {[
                    { angle: -45, r: 210, label: "SOFTWARE 2.0" },
                    { angle: 135, r: 210, label: "DEEP LEARNING" },
                    { angle: 225, r: 210, label: "AI TECH STACK" },
                  ].map((node, i) => (
                    <g
                      key={`topic-${i}`}
                      transform={`translate(${Math.cos((node.angle * Math.PI) / 180) * node.r}, ${Math.sin((node.angle * Math.PI) / 180) * node.r})`}
                    >
                      <circle
                        r="5"
                        fill="var(--accent-cyan)"
                        filter="url(#hyperGlow)"
                      />
                      <text
                        y="20"
                        fill="var(--accent-cyan)"
                        fontSize="9"
                        fontWeight="700"
                        textAnchor="middle"
                        style={{
                          letterSpacing: "1px",
                          textShadow: "0 0 5px var(--accent-cyan)",
                        }}
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}

                  {/* THE CENTRAL SINGULARITY */}
                  <g className="singularity-core">
                    {/* Glowing background elements */}
                    <g filter="url(#hyperGlow)">
                      <circle
                        r="70"
                        fill="rgba(0, 229, 255, 0.05)"
                        stroke="var(--accent-cyan)"
                        strokeWidth="0.5"
                      />
                      <circle r="50" fill="url(#coreGrad)" opacity="0.9" />
                    </g>

                    {/* Geometric "Crystal" fragments */}
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                      <polygon
                        key={angle}
                        points="0,-40 5,0 0,40 -5,0"
                        fill="#fff"
                        opacity="0.3"
                        transform={`rotate(${angle})`}
                      />
                    ))}

                    {/* High-visibility Q&A text */}
                    <text
                      x="0"
                      y="12"
                      fill="#fff"
                      fontSize="36"
                      fontWeight="900"
                      textAnchor="middle"
                      style={{
                        letterSpacing: "4px",
                        textShadow:
                          "0 4px 15px rgba(0,0,0,0.9), 0 0 10px rgba(0, 242, 255, 0.3)",
                        pointerEvents: "none",
                      }}
                    >
                      Q&A
                    </text>
                  </g>
                </g>

                {/* Moving scanline */}
                <rect
                  width="800"
                  height="1"
                  fill="var(--accent-cyan)"
                  opacity="0.1"
                  className="scanline-effect"
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
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginTop: "0.6rem",
            }}
          >
            {new Date().toLocaleString()}
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
