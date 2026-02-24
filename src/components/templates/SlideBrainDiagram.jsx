import React from "react";

const SlideBrainDiagram = ({ data }) => {
  return (
    <>
      <h2>{data.title}</h2>
      {data.subtitle && <p className="subtitle">{data.subtitle}</p>}

      <div className="diagram-stage" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="stage-art visible">
          <svg
            viewBox="0 0 500 300"
            className="arch-anim"
            style={{ width: "95%", height: "95%" }}
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
            </defs>

            {/* === LEFT SIDE: Biological Brain === */}
            <text
              x="120"
              y="25"
              fill="var(--accent-cyan)"
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
            >
              Biological Brain
            </text>

            {/* Cerebrum - large top region */}
            <path
              d="M 40,140 C 40,60 80,35 130,35 C 180,35 210,60 210,100 C 210,130 200,150 180,160"
              fill="rgba(0, 242, 255, 0.08)"
              stroke="var(--accent-cyan)"
              strokeWidth="2"
              filter="url(#glow-cyan)"
              className="layer-pulse"
            />
            <text
              x="120"
              y="80"
              fill="var(--accent-cyan)"
              fontSize="12"
              fontWeight="600"
              textAnchor="middle"
            >
              Cerebrum
            </text>
            <text
              x="120"
              y="96"
              fill="var(--text-secondary)"
              fontSize="8"
              textAnchor="middle"
            >
              Thought & Learning
            </text>

            {/* Cerebellum - back lower */}
            <path
              d="M 170,160 C 200,150 215,170 210,200 C 205,225 180,230 160,220 C 145,213 140,190 150,170"
              fill="rgba(188, 19, 254, 0.08)"
              stroke="var(--accent-purple)"
              strokeWidth="2"
              filter="url(#glow-magenta)"
              className="layer-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <text
              x="185"
              y="195"
              fill="var(--accent-purple)"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
            >
              Cerebellum
            </text>
            <text
              x="185"
              y="207"
              fill="var(--text-secondary)"
              fontSize="7"
              textAnchor="middle"
            >
              Coordination
            </text>

            {/* Brain Stem */}
            <path
              d="M 130,170 C 125,195 120,220 115,260 C 113,270 118,275 125,275 C 132,275 137,270 135,260 C 140,240 145,210 150,170"
              fill="rgba(57, 255, 20, 0.08)"
              stroke="var(--accent-green)"
              strokeWidth="2"
              filter="url(#glow-green)"
              className="layer-pulse"
              style={{ animationDelay: "1s" }}
            />
            <text
              x="125"
              y="250"
              fill="var(--accent-green)"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
            >
              Brain Stem
            </text>
            <text
              x="125"
              y="262"
              fill="var(--text-secondary)"
              fontSize="7"
              textAnchor="middle"
            >
              Life Functions
            </text>

            {/* Neural synapses animation */}
            {[
              { cx: 90, cy: 70, delay: 0 },
              { cx: 150, cy: 55, delay: 0.3 },
              { cx: 110, cy: 100, delay: 0.6 },
              { cx: 160, cy: 90, delay: 0.9 },
              { cx: 80, cy: 120, delay: 1.2 },
              { cx: 140, cy: 130, delay: 0.4 },
            ].map((s, i) => (
              <circle
                key={`syn-${i}`}
                cx={s.cx}
                cy={s.cy}
                r="3"
                fill="var(--accent-cyan)"
                opacity="0.6"
                className="node-blink"
                style={{ animationDelay: `${s.delay}s` }}
              />
            ))}

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
              y="25"
              fill="var(--accent-magenta)"
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
            >
              Artificial NN
            </text>

            {/* Input layer */}
            {[60, 110, 160, 210].map((cy, i) => (
              <circle
                key={`ai-in-${i}`}
                cx="310"
                cy={cy}
                r="8"
                fill="none"
                stroke="var(--accent-orange)"
                strokeWidth="1.5"
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
            {[80, 130, 180].map((cy, i) => (
              <circle
                key={`ai-h-${i}`}
                cx="380"
                cy={cy}
                r="8"
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth="1.5"
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
            {[110, 160].map((cy, i) => (
              <circle
                key={`ai-out-${i}`}
                cx="450"
                cy={cy}
                r="8"
                fill="none"
                stroke="var(--accent-green)"
                strokeWidth="1.5"
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
            {[60, 110, 160, 210].map((y1) =>
              [80, 130, 180].map((y2, j) => (
                <line
                  key={`c-ih-${y1}-${y2}`}
                  x1="318"
                  y1={y1}
                  x2="372"
                  y2={y2}
                  stroke="var(--accent-blue)"
                  strokeWidth="0.5"
                  opacity="0.3"
                  className="edge-flow"
                  style={{ animationDelay: `${j * 0.15}s` }}
                />
              )),
            )}

            {/* Connections hidden→output */}
            {[80, 130, 180].map((y1) =>
              [110, 160].map((y2, j) => (
                <line
                  key={`c-ho-${y1}-${y2}`}
                  x1="388"
                  y1={y1}
                  x2="442"
                  y2={y2}
                  stroke="var(--accent-blue)"
                  strokeWidth="0.5"
                  opacity="0.3"
                  className="edge-flow"
                  style={{ animationDelay: `${0.4 + j * 0.15}s` }}
                />
              )),
            )}

            {/* Data flow particles */}
            <circle
              r="3"
              fill="var(--accent-magenta)"
              className="data-particle"
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path="M 310,110 L 380,130 L 450,110"
              />
            </circle>
            <circle r="3" fill="var(--accent-cyan)" className="data-particle">
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                path="M 310,160 L 380,80 L 450,160"
              />
            </circle>

            {/* Bottom labels */}
            <text
              x="120"
              y="295"
              fill="var(--text-secondary)"
              fontSize="9"
              textAnchor="middle"
            >
              ~86 billion neurons
            </text>
            <text
              x="380"
              y="268"
              fill="var(--text-secondary)"
              fontSize="9"
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
