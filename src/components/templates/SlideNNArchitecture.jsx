import React from "react";

const SlideNNArchitecture = ({ data }) => {
  const inputNodes = [1, 2, 3, 4, 5];
  const hidden1Nodes = [1, 2, 3, 4, 5, 6];
  const hidden2Nodes = [1, 2, 3, 4, 5, 6];
  const outputNodes = [1, 2];

  const nodeRadius = 10;
  const padding = 60;
  const height = 400;
  const width = 800;

  const getPos = (nodes, layerIdx, nodeIdx) => {
    const x = padding + layerIdx * ((width - 2 * padding) / 3);
    const yStep = (height - 2 * padding) / (nodes.length - 1 || 1);
    const y = padding + nodeIdx * yStep;
    return { x, y };
  };

  const renderConnections = (layer1, layer2, idx1, idx2) => {
    return layer1.map((_, i) =>
      layer2.map((_, j) => {
        const p1 = getPos(layer1, idx1, i);
        const p2 = getPos(layer2, idx2, j);
        const randThickness = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.4 + 0.1;
        return (
          <line
            key={`conn-${idx1}-${idx2}-${i}-${j}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="var(--accent-blue)"
            strokeWidth={randThickness}
            opacity={opacity}
          />
        );
      }),
    );
  };

  return (
    <>
      <h2>{data.title}</h2>
      <p style={{ marginBottom: "2rem" }}>{data.subtitle}</p>

      <div
        className="architecture-container"
        style={{
          width: "100%",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          style={{ width: "100%", maxHeight: "500px" }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-secondary)" />
            </marker>
          </defs>

          {/* Connection Groups */}
          <g>
            {renderConnections(inputNodes, hidden1Nodes, 0, 1)}
            {renderConnections(hidden1Nodes, hidden2Nodes, 1, 2)}
            {renderConnections(hidden2Nodes, outputNodes, 2, 3)}
          </g>

          {/* Layer Labels */}
          <g
            style={{
              fontSize: "14px",
              fontWeight: "600",
              fill: "var(--text-secondary)",
            }}
          >
            <text
              x={getPos(inputNodes, 0, 0).x}
              y={25}
              textAnchor="middle"
              fill="var(--accent-orange)"
            >
              Input Layer
            </text>
            <text
              x={getPos(hidden1Nodes, 1, 0).x}
              y={25}
              textAnchor="middle"
              fill="var(--accent-cyan)"
            >
              Hidden Layer 1
            </text>
            <text
              x={getPos(hidden2Nodes, 2, 0).x}
              y={25}
              textAnchor="middle"
              fill="var(--accent-cyan)"
            >
              Hidden Layer 2
            </text>
            <text
              x={getPos(outputNodes, 3, 0).x}
              y={25}
              textAnchor="middle"
              fill="var(--accent-green)"
            >
              Output Layer
            </text>
          </g>

          {/* Helper Text for Architecture */}
          <g
            style={{
              fontSize: "12px",
              fill: "var(--text-secondary)",
              fontStyle: "italic",
            }}
          >
            <text
              x={getPos(inputNodes, 0, inputNodes.length - 1).x}
              y={height - 10}
              textAnchor="middle"
            >
              Raw Data
            </text>
            <text
              x={
                (getPos(hidden1Nodes, 1, 0).x + getPos(hidden2Nodes, 2, 0).x) /
                2
              }
              y={height - 10}
              textAnchor="middle"
            >
              Hierarchical Feature Extraction
            </text>
            <text
              x={getPos(outputNodes, 3, outputNodes.length - 1).x}
              y={height - 10}
              textAnchor="middle"
            >
              Prediction
            </text>
          </g>

          {/* Node Animations */}
          <g>
            {/* Input Nodes */}
            {inputNodes.map((_, i) => (
              <circle
                key={`in-${i}`}
                cx={getPos(inputNodes, 0, i).x}
                cy={getPos(inputNodes, 0, i).y}
                r={nodeRadius}
                fill="var(--accent-orange)"
                filter="url(#glow)"
              />
            ))}
            {/* Hidden Nodes 1 */}
            {hidden1Nodes.map((_, i) => (
              <circle
                key={`h1-${i}`}
                cx={getPos(hidden1Nodes, 1, i).x}
                cy={getPos(hidden1Nodes, 1, i).y}
                r={nodeRadius}
                fill="var(--accent-cyan)"
                filter="url(#glow)"
              />
            ))}
            {/* Hidden Nodes 2 */}
            {hidden2Nodes.map((_, i) => (
              <circle
                key={`h2-${i}`}
                cx={getPos(hidden2Nodes, 2, i).x}
                cy={getPos(hidden2Nodes, 2, i).y}
                r={nodeRadius}
                fill="var(--accent-cyan)"
                filter="url(#glow)"
              />
            ))}
            {/* Output Nodes */}
            {outputNodes.map((_, i) => (
              <circle
                key={`out-${i}`}
                cx={getPos(outputNodes, 3, i).x}
                cy={getPos(outputNodes, 3, i).y}
                r={nodeRadius}
                fill="var(--accent-green)"
                filter="url(#glow)"
              />
            ))}
          </g>

          {/* Data Pulse Animations */}
          {[...Array(12)].map((_, i) => {
            const inIdx = Math.floor(Math.random() * inputNodes.length);
            const h1Idx = Math.floor(Math.random() * hidden1Nodes.length);
            const h2Idx = Math.floor(Math.random() * hidden2Nodes.length);
            const outIdx = Math.floor(Math.random() * outputNodes.length);

            const p0 = getPos(inputNodes, 0, inIdx);
            const p1 = getPos(hidden1Nodes, 1, h1Idx);
            const p2 = getPos(hidden2Nodes, 2, h2Idx);
            const p3 = getPos(outputNodes, 3, outIdx);

            const path = `M ${p0.x},${p0.y} L ${p1.x},${p1.y} L ${p2.x},${p2.y} L ${p3.x},${p3.y}`;

            return (
              <circle key={`pulse-${i}`} r="3" fill="white" opacity="0.8">
                <animateMotion
                  dur={`${1.5 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                  path={path}
                  begin={`${i * 0.4}s`}
                />
              </circle>
            );
          })}
        </svg>
      </div>

      <div className="key-takeaway" style={{ marginTop: "2rem" }}>
        <h3>Key Concept: Hierarchy</h3>
        <p>
          Each layer builds on the previous one. Inputs see pixels, hidden
          layers see shapes, deeper layers see eyes/noses, and output sees a
          "Face".
        </p>
      </div>
    </>
  );
};

export default SlideNNArchitecture;
