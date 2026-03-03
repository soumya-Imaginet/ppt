import React from "react";

const SlideBrainDiagram = ({ data }) => {
  return (
    <>
      <h2>{data.title}</h2>
      {data.subtitle && <p className="subtitle">{data.subtitle}</p>}

      <div className="diagram-stage" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="stage-art visible">
          <svg
            viewBox="0 0 500 320"
            className="arch-anim"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Brain outline - side view */}
            <defs>
              <filter
                id="glow-cyan"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter
                id="glow-magenta"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter
                id="glow-green"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="var(--text-secondary)"
                />
              </marker>
            </defs>

            {/* === LEFT SIDE: Biological Brain === */}
            {/* === LEFT SIDE: Biological Neuron === */}
            <text
              x="120"
              y="20"
              fill="var(--accent-cyan)"
              fontSize="16"
              fontWeight="800"
              textAnchor="middle"
            >
              Biological Neuron
            </text>

            <g className="biological-neuron">
              {/* Dendrites */}
              <g stroke="var(--accent-cyan)" strokeWidth="2" opacity="0.6">
                <path d="M 45,140 L 20,110 M 15,115 L 20,110 L 25,100" />
                <path d="M 45,150 L 15,150 M 10,145 L 15,150 L 10,155" />
                <path d="M 45,160 L 20,190 M 15,185 L 20,190 L 25,200" />
                <path d="M 60,135 L 45,100 M 40,95 L 45,100 L 55,95" />
                <path d="M 90,135 L 105,100 M 110,95 L 105,100 L 100,95" />
                <path d="M 60,165 L 45,200 M 40,205 L 45,200 L 55,205" />
                <path d="M 90,165 L 105,200 M 110,205 L 105,200 L 100,205" />
              </g>

              {/* Soma */}
              <path
                d="M 45,150 Q 45,130 75,120 Q 105,130 105,150 Q 105,170 75,180 Q 45,170 45,150"
                fill="rgba(0, 242, 255, 0.12)"
                stroke="var(--accent-cyan)"
                strokeWidth="3"
                filter="url(#glow-cyan)"
                className="layer-pulse"
              />

              {/* Nucleus */}
              <circle
                cx="75"
                cy="150"
                r="8"
                fill="var(--accent-purple)"
                filter="url(#glow-magenta)"
                className="node-blink"
              />

              {/* Axon */}
              <line
                x1="105"
                y1="150"
                x2="210"
                y2="150"
                stroke="var(--accent-cyan)"
                strokeWidth="2"
                opacity="0.8"
              />

              {/* Myelin Sheath */}
              {[120, 145, 170, 195].map((cx, i) => (
                <ellipse
                  key={`myelin-${i}`}
                  cx={cx}
                  cy="150"
                  rx="10"
                  ry="6"
                  fill="rgba(255, 165, 0, 0.1)"
                  stroke="var(--accent-orange)"
                  strokeWidth="1"
                  className="layer-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}

              {/* Terminals */}
              <g stroke="var(--accent-cyan)" strokeWidth="2">
                <path d="M 210,150 L 235,125 Q 240,120 245,125" />
                <circle cx="245" cy="125" r="3" fill="var(--accent-cyan)" />
                <path d="M 210,150 L 245,150" />
                <circle cx="245" cy="150" r="3" fill="var(--accent-cyan)" />
                <path d="M 210,150 L 235,175 Q 240,180 245,175" />
                <circle cx="245" cy="175" r="3" fill="var(--accent-cyan)" />
              </g>

              {/* Labels */}
              <text
                x="20"
                y="70"
                fill="var(--accent-cyan)"
                fontSize="8"
                fontWeight="600"
              >
                1. Dendrites: Accept Inputs
              </text>
              <line
                x1="25"
                y1="75"
                x2="35"
                y2="105"
                stroke="var(--accent-cyan)"
                strokeWidth="0.5"
                opacity="0.5"
              />

              <text
                x="30"
                y="240"
                fill="var(--accent-purple)"
                fontSize="7"
                fontWeight="600"
              >
                Nucleus
              </text>
              <line
                x1="45"
                y1="235"
                x2="70"
                y2="158"
                stroke="var(--accent-purple)"
                strokeWidth="0.5"
                opacity="0.5"
              />

              <text
                x="75"
                y="210"
                fill="var(--accent-cyan)"
                fontSize="8"
                fontWeight="600"
                textAnchor="middle"
              >
                2. Cell Body/Soma: Process the Inputs
              </text>
              <line
                x1="75"
                y1="202"
                x2="75"
                y2="182"
                stroke="var(--accent-cyan)"
                strokeWidth="0.5"
                opacity="0.5"
              />

              <text
                x="175"
                y="100"
                fill="var(--accent-orange)"
                fontSize="8"
                fontWeight="600"
                textAnchor="middle"
              >
                3. Axon: Turn the processed inputs to outputs
              </text>
              <line
                x1="175"
                y1="105"
                x2="160"
                y2="140"
                stroke="var(--accent-orange)"
                strokeWidth="0.5"
                opacity="0.5"
              />

              <text
                x="245"
                y="240"
                fill="var(--accent-cyan)"
                fontSize="7"
                fontWeight="600"
                textAnchor="end"
              >
                4. Axon terminal buttons:
              </text>
              <text
                x="248"
                y="250"
                fill="var(--accent-cyan)"
                fontSize="6"
                fontWeight="600"
                textAnchor="end"
              >
                The electrochemical signal transfer point
              </text>
              <line
                x1="245"
                y1="230"
                x2="240"
                y2="175"
                stroke="var(--accent-cyan)"
                strokeWidth="0.5"
                opacity="0.5"
              />

              <g>
                <path
                  d="M 120,175 Q 160,185 200,175"
                  fill="none"
                  stroke="var(--text-secondary)"
                  strokeWidth="1"
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x="160"
                  y="195"
                  fill="var(--text-secondary)"
                  fontSize="7"
                  textAnchor="middle"
                >
                  Direction of signal
                </text>
              </g>
            </g>

            {/* === ARROW === */}
            <g className="edge-flow" style={{ animationDelay: "0s" }}>
              <line
                x1="230"
                y1="150"
                x2="270"
                y2="150"
                stroke="var(--accent-orange)"
                strokeWidth="2"
              />
              <polygon
                points="270,145 280,150 270,155"
                fill="var(--accent-orange)"
              />
            </g>
            <text
              x="255"
              y="140"
              fill="var(--accent-orange)"
              fontSize="9"
              textAnchor="middle"
              fontWeight="600"
            >
              Inspires
            </text>

            {/* === RIGHT SIDE: Artificial Neural Network === */}
            <text
              x="380"
              y="20"
              fill="var(--accent-magenta)"
              fontSize="16"
              fontWeight="800"
              textAnchor="middle"
            >
              Artificial NN
            </text>

            {/* Input layer */}
            {[50, 110, 170, 230].map((cy, i) => (
              <circle
                key={`ai-in-${i}`}
                cx="310"
                cy={cy}
                r="10"
                fill="none"
                stroke="var(--accent-orange)"
                strokeWidth="2"
                className="node-blink"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
            <text
              x="310"
              y="240"
              fill="var(--accent-orange)"
              fontSize="9"
              textAnchor="middle"
            >
              Input
            </text>

            {/* Hidden layer */}
            {[80, 140, 200].map((cy, i) => (
              <circle
                key={`ai-h-${i}`}
                cx="380"
                cy={cy}
                r="10"
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth="2"
                className="node-blink"
                style={{ animationDelay: `${0.4 + i * 0.2}s` }}
              />
            ))}
            <text
              x="380"
              y="240"
              fill="var(--accent-cyan)"
              fontSize="9"
              textAnchor="middle"
            >
              Hidden
            </text>

            {/* Output layer */}
            {[110, 170].map((cy, i) => (
              <circle
                key={`ai-out-${i}`}
                cx="450"
                cy={cy}
                r="10"
                fill="none"
                stroke="var(--accent-green)"
                strokeWidth="2"
                className="node-blink"
                style={{ animationDelay: `${0.8 + i * 0.2}s` }}
              />
            ))}
            <text
              x="450"
              y="240"
              fill="var(--accent-green)"
              fontSize="9"
              textAnchor="middle"
            >
              Output
            </text>

            {/* Connections input→hidden */}
            {[50, 110, 170, 230].map((y1) =>
              [80, 140, 200].map((y2, j) => (
                <line
                  key={`c-ih-${y1}-${y2}`}
                  x1="320"
                  y1={y1}
                  x2="370"
                  y2={y2}
                  stroke="var(--accent-blue)"
                  strokeWidth="1"
                  opacity="0.4"
                  className="edge-flow"
                  style={{ animationDelay: `${j * 0.15}s` }}
                />
              )),
            )}

            {/* Connections hidden→output */}
            {[80, 140, 200].map((y1) =>
              [110, 170].map((y2, j) => (
                <line
                  key={`c-ho-${y1}-${y2}`}
                  x1="390"
                  y1={y1}
                  x2="440"
                  y2={y2}
                  stroke="var(--accent-blue)"
                  strokeWidth="1"
                  opacity="0.4"
                  className="edge-flow"
                  style={{ animationDelay: `${0.4 + j * 0.15}s` }}
                />
              )),
            )}

            {/* Data flow particles */}
            <circle
              r="4"
              fill="var(--accent-magenta)"
              className="data-particle"
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path="M 310,110 L 380,140 L 450,110"
              />
            </circle>
            <circle r="4" fill="var(--accent-cyan)" className="data-particle">
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                path="M 310,170 L 380,80 L 450,170"
              />
            </circle>

            {/* Bottom labels */}
            <text
              x="120"
              y="310"
              fill="var(--text-secondary)"
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
            >
              Complex Biological Processor
            </text>
            <text
              x="380"
              y="285"
              fill="var(--text-secondary)"
              fontSize="11"
              fontWeight="600"
              textAnchor="middle"
            >
              Mathematical model
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SlideBrainDiagram;
