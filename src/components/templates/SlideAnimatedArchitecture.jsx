import React from "react";

const SlideAnimatedArchitecture = ({ data, visibleFragments, onCardClick }) => {
  const layersActive = visibleFragments.includes("s5-card-1");
  const paramsActive = visibleFragments.includes("s5-card-2");
  const lastVisible = visibleFragments[visibleFragments.length - 1];

  return (
    <>
      <h2>{data.title}</h2>
      {data.subtitle && <p className="subtitle">{data.subtitle}</p>}

      <div className="visual-grid">
        {data.items.map((item) => {
          const isVisible = visibleFragments.includes(item.id);
          const isActive = lastVisible === item.id;
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

      {/* Animated Diagram Stage */}
      <div className="diagram-stage" style={{ background: "rgba(0,0,0,0.3)" }}>
        {/* Layers Animation - visible when "Layers" card is active */}
        <div
          className={`stage-art ${layersActive && lastVisible === "s5-card-1" ? "visible" : ""}`}
        >
          <svg viewBox="0 0 400 200" className="arch-anim">
            {/* Input Layer */}
            <g className="layer-group">
              <rect
                x="30"
                y="20"
                width="80"
                height="160"
                rx="8"
                fill="none"
                stroke="var(--accent-orange)"
                strokeWidth="2"
                className={layersActive ? "layer-pulse" : ""}
              />
              <text
                x="70"
                y="12"
                fill="var(--accent-orange)"
                fontSize="11"
                textAnchor="middle"
                fontWeight="600"
              >
                Input
              </text>
              {[40, 70, 100, 130, 160].map((cy, i) => (
                <circle
                  key={`in-${i}`}
                  cx="70"
                  cy={cy}
                  r="8"
                  fill="var(--accent-orange)"
                  opacity="0.7"
                  className={layersActive ? "node-blink" : ""}
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </g>

            {/* Hidden Layer 1 */}
            <g className="layer-group">
              <rect
                x="160"
                y="30"
                width="80"
                height="140"
                rx="8"
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth="2"
                className={layersActive ? "layer-pulse" : ""}
                style={{ animationDelay: "0.3s" }}
              />
              <text
                x="200"
                y="22"
                fill="var(--accent-cyan)"
                fontSize="11"
                textAnchor="middle"
                fontWeight="600"
              >
                Hidden
              </text>
              {[50, 80, 110, 140].map((cy, i) => (
                <circle
                  key={`h1-${i}`}
                  cx="200"
                  cy={cy}
                  r="8"
                  fill="var(--accent-cyan)"
                  opacity="0.7"
                  className={layersActive ? "node-blink" : ""}
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                />
              ))}
            </g>

            {/* Output Layer */}
            <g className="layer-group">
              <rect
                x="290"
                y="55"
                width="80"
                height="90"
                rx="8"
                fill="none"
                stroke="var(--accent-green)"
                strokeWidth="2"
                className={layersActive ? "layer-pulse" : ""}
                style={{ animationDelay: "0.6s" }}
              />
              <text
                x="330"
                y="47"
                fill="var(--accent-green)"
                fontSize="11"
                textAnchor="middle"
                fontWeight="600"
              >
                Output
              </text>
              {[75, 105, 135].map((cy, i) => (
                <circle
                  key={`out-${i}`}
                  cx="330"
                  cy={cy}
                  r="8"
                  fill="var(--accent-green)"
                  opacity="0.7"
                  className={layersActive ? "node-blink" : ""}
                  style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                />
              ))}
            </g>

            {/* Connection lines */}
            {[40, 70, 100, 130, 160].map((y1) =>
              [50, 80, 110, 140].map((y2, j) => (
                <line
                  key={`c1-${y1}-${y2}`}
                  x1="78"
                  y1={y1}
                  x2="192"
                  y2={y2}
                  stroke="var(--accent-blue)"
                  strokeWidth="0.5"
                  opacity="0.3"
                  className={layersActive ? "edge-flow" : ""}
                  style={{ animationDelay: `${j * 0.1}s` }}
                />
              )),
            )}
            {[50, 80, 110, 140].map((y1) =>
              [75, 105, 135].map((y2, j) => (
                <line
                  key={`c2-${y1}-${y2}`}
                  x1="208"
                  y1={y1}
                  x2="322"
                  y2={y2}
                  stroke="var(--accent-blue)"
                  strokeWidth="0.5"
                  opacity="0.3"
                  className={layersActive ? "edge-flow" : ""}
                  style={{ animationDelay: `${0.4 + j * 0.1}s` }}
                />
              )),
            )}

            {/* Data flow particles */}
            {layersActive && (
              <>
                <circle
                  r="3"
                  fill="var(--accent-magenta)"
                  className="data-particle"
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path="M 70,70 L 200,80 L 330,105"
                  />
                </circle>
                <circle
                  r="3"
                  fill="var(--accent-cyan)"
                  className="data-particle"
                  style={{ animationDelay: "0.7s" }}
                >
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    path="M 70,130 L 200,110 L 330,75"
                  />
                </circle>
                <circle
                  r="2"
                  fill="var(--accent-green)"
                  className="data-particle"
                  style={{ animationDelay: "1.4s" }}
                >
                  <animateMotion
                    dur="1.8s"
                    repeatCount="indefinite"
                    path="M 70,100 L 200,50 L 330,135"
                  />
                </circle>
              </>
            )}
          </svg>
        </div>

        {/* Parameters Animation - visible when "Parameters" card is active */}
        <div
          className={`stage-art ${paramsActive && lastVisible === "s5-card-2" ? "visible" : ""}`}
        >
          <svg viewBox="0 0 400 200" className="arch-anim">
            {/* Weight visualization */}
            <g>
              <text
                x="10"
                y="20"
                fill="var(--accent-cyan)"
                fontSize="12"
                fontWeight="600"
              >
                Weights
              </text>
              {/* Varying weight lines */}
              {[1, 2, 3, 4, 5].map((w, i) => (
                <g key={`w-${i}`}>
                  <line
                    x1="30"
                    y1={40 + i * 22}
                    x2="160"
                    y2={40 + i * 22}
                    stroke="var(--accent-blue)"
                    strokeWidth={w}
                    opacity="0.6"
                    className={paramsActive ? "weight-pulse" : ""}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                  <text
                    x="170"
                    y={44 + i * 22}
                    fill="var(--text-secondary)"
                    fontSize="9"
                  >
                    w = {(Math.random() * 2 - 1).toFixed(2)}
                  </text>
                </g>
              ))}
            </g>

            {/* Bias visualization */}
            <g>
              <text
                x="240"
                y="20"
                fill="var(--accent-magenta)"
                fontSize="12"
                fontWeight="600"
              >
                Bias
              </text>
              <rect
                x="240"
                y="30"
                width="40"
                height="25"
                rx="4"
                fill="none"
                stroke="var(--accent-magenta)"
                strokeWidth="1.5"
                className={paramsActive ? "bias-shift" : ""}
              />
              <text x="248" y="47" fill="var(--accent-magenta)" fontSize="10">
                +b
              </text>
              <line
                x1="260"
                y1="55"
                x2="260"
                y2="80"
                stroke="var(--accent-magenta)"
                strokeWidth="1"
                strokeDasharray="3"
              />
              <text x="248" y="92" fill="var(--text-secondary)" fontSize="9">
                Shifts the
              </text>
              <text x="248" y="104" fill="var(--text-secondary)" fontSize="9">
                activation
              </text>
            </g>

            {/* Activation Function */}
            <g>
              <text
                x="10"
                y="160"
                fill="var(--accent-green)"
                fontSize="12"
                fontWeight="600"
              >
                Activation: ReLU
              </text>
              <polyline
                points="30,195 90,195 90,170 150,150"
                fill="none"
                stroke="var(--accent-green)"
                strokeWidth="2.5"
                className={paramsActive ? "relu-draw" : ""}
              />
              <line
                x1="30"
                y1="195"
                x2="150"
                y2="195"
                stroke="var(--text-secondary)"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="90"
                y1="145"
                x2="90"
                y2="200"
                stroke="var(--text-secondary)"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <text x="92" y="198" fill="var(--text-secondary)" fontSize="8">
                0
              </text>
            </g>

            {/* Sigmoid */}
            <g>
              <text
                x="240"
                y="135"
                fill="var(--accent-orange)"
                fontSize="12"
                fontWeight="600"
              >
                Sigmoid
              </text>
              <path
                d="M 240,195 C 260,195 280,195 290,185 C 300,175 310,160 330,150 C 350,145 370,145 380,145"
                fill="none"
                stroke="var(--accent-orange)"
                strokeWidth="2.5"
                className={paramsActive ? "sigmoid-draw" : ""}
              />
              <line
                x1="240"
                y1="170"
                x2="380"
                y2="170"
                stroke="var(--text-secondary)"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <text x="350" y="140" fill="var(--text-secondary)" fontSize="8">
                1.0
              </text>
              <text x="245" y="198" fill="var(--text-secondary)" fontSize="8">
                0.0
              </text>
            </g>
          </svg>
        </div>

        {/* Default state - both hidden, show a subtle prompt */}
        {!layersActive && !paramsActive && (
          <div className="stage-art visible" style={{ opacity: 0.3 }}>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              ← Click a card to see the breakdown
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SlideAnimatedArchitecture;
