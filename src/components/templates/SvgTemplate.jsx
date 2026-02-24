import React from "react";

/* ── Helper: each diagram ID gets a dedicated rich SVG ─────────── */
const diagrams = {
  /* ═══ Slide 8: How Neural Networks Learn ═══ */
  "s6-diagram": () => (
    <svg viewBox="0 0 500 260">
      {/* Network nodes */}
      <g>
        {/* Input */}
        {[60, 130, 200].map((y, i) => (
          <circle
            key={`in-${i}`}
            cx="60"
            cy={y}
            r="14"
            fill="rgba(0,242,255,0.15)"
            stroke="var(--accent-cyan)"
            strokeWidth="1.5"
            className="node-blink"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        <text
          x="60"
          y="235"
          fill="var(--accent-cyan)"
          fontSize="10"
          textAnchor="middle"
        >
          Input
        </text>

        {/* Hidden 1 */}
        {[80, 130, 180].map((y, i) => (
          <circle
            key={`h1-${i}`}
            cx="170"
            cy={y}
            r="14"
            fill="rgba(99,102,241,0.15)"
            stroke="var(--accent-blue)"
            strokeWidth="1.5"
            className="node-blink"
            style={{ animationDelay: `${0.4 + i * 0.2}s` }}
          />
        ))}
        <text
          x="170"
          y="235"
          fill="var(--accent-blue)"
          fontSize="10"
          textAnchor="middle"
        >
          Hidden
        </text>

        {/* Output */}
        {[100, 160].map((y, i) => (
          <circle
            key={`out-${i}`}
            cx="280"
            cy={y}
            r="14"
            fill="rgba(57,255,20,0.15)"
            stroke="var(--accent-green)"
            strokeWidth="1.5"
            className="node-blink"
            style={{ animationDelay: `${0.8 + i * 0.2}s` }}
          />
        ))}
        <text
          x="280"
          y="235"
          fill="var(--accent-green)"
          fontSize="10"
          textAnchor="middle"
        >
          Output
        </text>
      </g>

      {/* Connections */}
      {[60, 130, 200].map((y1) =>
        [80, 130, 180].map((y2, j) => (
          <line
            key={`c1-${y1}-${y2}`}
            x1="74"
            y1={y1}
            x2="156"
            y2={y2}
            stroke="var(--accent-blue)"
            strokeWidth="0.6"
            opacity="0.25"
            className="edge-flow"
            style={{ animationDelay: `${j * 0.1}s` }}
          />
        )),
      )}
      {[80, 130, 180].map((y1) =>
        [100, 160].map((y2, j) => (
          <line
            key={`c2-${y1}-${y2}`}
            x1="184"
            y1={y1}
            x2="266"
            y2={y2}
            stroke="var(--accent-blue)"
            strokeWidth="0.6"
            opacity="0.25"
            className="edge-flow"
            style={{ animationDelay: `${0.3 + j * 0.1}s` }}
          />
        )),
      )}

      {/* Forward pass arrow */}
      <g>
        <path
          d="M 50,30 L 290,30"
          stroke="var(--accent-cyan)"
          strokeWidth="2"
          markerEnd="url(#arrow-cyan)"
          className="relu-draw"
        />
        <text
          x="170"
          y="22"
          fill="var(--accent-cyan)"
          fontSize="11"
          textAnchor="middle"
          fontWeight="600"
        >
          Forward Pass →
        </text>
      </g>

      {/* Loss function */}
      <g>
        <rect
          x="320"
          y="70"
          width="160"
          height="100"
          rx="10"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <text
          x="400"
          y="90"
          fill="var(--accent-orange)"
          fontSize="11"
          textAnchor="middle"
          fontWeight="600"
        >
          Loss Function
        </text>
        {/* Loss curve */}
        <path
          d="M 340,155 C 360,100 380,130 400,110 C 420,95 440,105 460,95"
          fill="none"
          stroke="var(--accent-orange)"
          strokeWidth="2"
          className="sigmoid-draw"
        />
        <line
          x1="340"
          y1="155"
          x2="460"
          y2="155"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
        />
        <text x="340" y="165" fill="var(--text-secondary)" fontSize="8">
          Epoch
        </text>
        <text
          x="330"
          y="100"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="end"
        >
          Loss
        </text>
      </g>

      {/* Backpropagation arrow */}
      <path
        d="M 290,250 L 50,250"
        stroke="var(--accent-magenta)"
        strokeWidth="2"
        strokeDasharray="6,3"
        className="relu-draw"
        style={{ animationDelay: "1s" }}
      />
      <text
        x="170"
        y="248"
        fill="var(--accent-magenta)"
        fontSize="11"
        textAnchor="middle"
        fontWeight="600"
      >
        ← Backpropagation (Gradient Descent)
      </text>

      {/* Data particles */}
      <circle r="4" fill="var(--accent-cyan)" className="data-particle">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path="M 60,130 L 170,130 L 280,130"
        />
      </circle>
      <circle
        r="4"
        fill="var(--accent-magenta)"
        className="data-particle"
        opacity="0.8"
      >
        <animateMotion
          dur="2.5s"
          repeatCount="indefinite"
          path="M 280,100 L 170,80 L 60,60"
        />
      </circle>

      <defs>
        <marker
          id="arrow-cyan"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M 0,0 L 8,4 L 0,8" fill="var(--accent-cyan)" />
        </marker>
      </defs>
    </svg>
  ),

  /* ═══ Slide 9: Deterministic vs Probabilistic ═══ */
  "s7-diagram": () => (
    <svg viewBox="0 0 500 220">
      {/* LEFT: Deterministic */}
      <g>
        <text
          x="120"
          y="20"
          fill="var(--accent-blue)"
          fontSize="13"
          textAnchor="middle"
          fontWeight="700"
        >
          Deterministic
        </text>
        {/* Decision tree */}
        <circle
          cx="120"
          cy="50"
          r="12"
          fill="rgba(99,102,241,0.15)"
          stroke="var(--accent-blue)"
          strokeWidth="1.5"
        />
        <text
          x="120"
          y="54"
          fill="var(--accent-blue)"
          fontSize="8"
          textAnchor="middle"
        >
          ?
        </text>
        <line
          x1="110"
          y1="62"
          x2="70"
          y2="95"
          stroke="var(--accent-blue)"
          strokeWidth="1"
        />
        <line
          x1="130"
          y1="62"
          x2="170"
          y2="95"
          stroke="var(--accent-blue)"
          strokeWidth="1"
        />
        {/* Yes */}
        <rect
          x="45"
          y="95"
          width="50"
          height="25"
          rx="5"
          fill="rgba(57,255,20,0.12)"
          stroke="var(--accent-green)"
          strokeWidth="1.5"
        />
        <text
          x="70"
          y="112"
          fill="var(--accent-green)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          YES
        </text>
        <text x="85" y="90" fill="var(--accent-green)" fontSize="8">
          ✓
        </text>
        {/* No */}
        <rect
          x="145"
          y="95"
          width="50"
          height="25"
          rx="5"
          fill="rgba(255,65,54,0.12)"
          stroke="#ff4136"
          strokeWidth="1.5"
        />
        <text
          x="170"
          y="112"
          fill="#ff4136"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          NO
        </text>
        <text x="155" y="90" fill="#ff4136" fontSize="8">
          ✗
        </text>
        {/* Code box */}
        <rect
          x="50"
          y="140"
          width="140"
          height="55"
          rx="6"
          fill="rgba(0,0,0,0.3)"
          stroke="rgba(255,255,255,0.1)"
        />
        <text
          x="62"
          y="157"
          fill="var(--accent-orange)"
          fontSize="9"
          fontFamily="monospace"
        >
          if (score &gt; 50)
        </text>
        <text
          x="62"
          y="170"
          fill="var(--accent-green)"
          fontSize="9"
          fontFamily="monospace"
        >
          {" "}
          → "PASS"
        </text>
        <text x="62" y="183" fill="#ff4136" fontSize="9" fontFamily="monospace">
          else → "FAIL"
        </text>
      </g>

      {/* VS divider */}
      <line
        x1="250"
        y1="15"
        x2="250"
        y2="210"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        strokeDasharray="4"
      />
      <text
        x="250"
        y="120"
        fill="var(--accent-orange)"
        fontSize="12"
        textAnchor="middle"
        fontWeight="700"
      >
        VS
      </text>

      {/* RIGHT: Probabilistic */}
      <g>
        <text
          x="380"
          y="20"
          fill="var(--accent-magenta)"
          fontSize="13"
          textAnchor="middle"
          fontWeight="700"
        >
          Probabilistic
        </text>
        {/* Probability bars */}
        <rect
          x="310"
          y="45"
          width="140"
          height="70"
          rx="8"
          fill="rgba(0,0,0,0.3)"
          stroke="rgba(255,255,255,0.1)"
        />
        <text x="320" y="62" fill="var(--text-secondary)" fontSize="9">
          Spam:
        </text>
        <rect
          x="365"
          y="52"
          width="75"
          height="12"
          rx="3"
          fill="rgba(188,19,254,0.3)"
          stroke="var(--accent-magenta)"
          strokeWidth="1"
          className="weight-pulse"
        />
        <text
          x="400"
          y="62"
          fill="var(--accent-magenta)"
          fontSize="9"
          fontWeight="600"
        >
          92%
        </text>
        <text x="320" y="82" fill="var(--text-secondary)" fontSize="9">
          Not Spam:
        </text>
        <rect
          x="365"
          y="72"
          width="7"
          height="12"
          rx="3"
          fill="rgba(0,242,255,0.3)"
          stroke="var(--accent-cyan)"
          strokeWidth="1"
        />
        <text x="380" y="82" fill="var(--accent-cyan)" fontSize="9">
          8%
        </text>
        <text x="320" y="102" fill="var(--text-secondary)" fontSize="9">
          Confidence:
        </text>
        <text
          x="400"
          y="102"
          fill="var(--accent-green)"
          fontSize="10"
          fontWeight="600"
        >
          High ✓
        </text>

        {/* Gaussian bell curve */}
        <path
          d="M 310,200 C 330,200 340,195 350,180 C 360,160 370,140 380,130 C 390,140 400,160 410,180 C 420,195 430,200 450,200"
          fill="rgba(188,19,254,0.1)"
          stroke="var(--accent-magenta)"
          strokeWidth="2"
          className="sigmoid-draw"
        />
        <line
          x1="310"
          y1="200"
          x2="450"
          y2="200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
        />
        <text
          x="380"
          y="215"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          Distribution
        </text>
      </g>
    </svg>
  ),

  /* ═══ Slide 12: Real-World Use Cases ═══ */
  "s9-diagram": () => (
    <svg viewBox="0 0 500 220">
      {/* Vision */}
      <g className="layer-pulse">
        <rect
          x="20"
          y="20"
          width="130"
          height="85"
          rx="10"
          fill="rgba(0,242,255,0.06)"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        {/* Eye icon */}
        <ellipse
          cx="85"
          cy="50"
          rx="25"
          ry="15"
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
        />
        <circle
          cx="85"
          cy="50"
          r="7"
          fill="var(--accent-cyan)"
          opacity="0.4"
          className="node-blink"
        />
        <circle cx="85" cy="50" r="3" fill="var(--accent-cyan)" />
        <text
          x="85"
          y="82"
          fill="var(--accent-cyan)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          Computer Vision
        </text>
        <text
          x="85"
          y="96"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          Image Recognition
        </text>
      </g>

      {/* NLP */}
      <g className="layer-pulse" style={{ animationDelay: "0.3s" }}>
        <rect
          x="185"
          y="20"
          width="130"
          height="85"
          rx="10"
          fill="rgba(188,19,254,0.06)"
          stroke="var(--accent-magenta)"
          strokeWidth="1.5"
        />
        {/* Chat bubble */}
        <rect
          x="220"
          y="35"
          width="60"
          height="30"
          rx="8"
          fill="none"
          stroke="var(--accent-magenta)"
          strokeWidth="1.5"
        />
        <path
          d="M 235,65 L 230,75 L 245,65"
          fill="none"
          stroke="var(--accent-magenta)"
          strokeWidth="1.5"
        />
        <line
          x1="230"
          y1="45"
          x2="268"
          y2="45"
          stroke="var(--accent-magenta)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="230"
          y1="52"
          x2="260"
          y2="52"
          stroke="var(--accent-magenta)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="230"
          y1="59"
          x2="250"
          y2="59"
          stroke="var(--accent-magenta)"
          strokeWidth="1"
          opacity="0.5"
        />
        <text
          x="250"
          y="90"
          fill="var(--accent-magenta)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          NLP / Chatbots
        </text>
        <text
          x="250"
          y="100"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          Sentiment Analysis
        </text>
      </g>

      {/* Fraud detection */}
      <g className="layer-pulse" style={{ animationDelay: "0.6s" }}>
        <rect
          x="350"
          y="20"
          width="130"
          height="85"
          rx="10"
          fill="rgba(255,165,0,0.06)"
          stroke="var(--accent-orange)"
          strokeWidth="1.5"
        />
        {/* Shield icon */}
        <path
          d="M 415,35 L 435,42 L 435,60 C 435,72 426,80 415,85 C 404,80 395,72 395,60 L 395,42 Z"
          fill="none"
          stroke="var(--accent-orange)"
          strokeWidth="1.5"
        />
        <text
          x="415"
          y="65"
          fill="var(--accent-orange)"
          fontSize="14"
          textAnchor="middle"
        >
          ✓
        </text>
        <text
          x="415"
          y="98"
          fill="var(--accent-orange)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          Fraud Detection
        </text>
      </g>

      {/* Recommendation */}
      <g className="layer-pulse" style={{ animationDelay: "0.9s" }}>
        <rect
          x="100"
          y="130"
          width="130"
          height="75"
          rx="10"
          fill="rgba(57,255,20,0.06)"
          stroke="var(--accent-green)"
          strokeWidth="1.5"
        />
        {/* Star + heart */}
        <text
          x="165"
          y="162"
          fill="var(--accent-green)"
          fontSize="20"
          textAnchor="middle"
        >
          ★
        </text>
        <text
          x="165"
          y="186"
          fill="var(--accent-green)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          Recommendations
        </text>
        <text
          x="165"
          y="198"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          Personalized Content
        </text>
      </g>

      {/* Prediction */}
      <g className="layer-pulse" style={{ animationDelay: "1.2s" }}>
        <rect
          x="270"
          y="130"
          width="130"
          height="75"
          rx="10"
          fill="rgba(99,102,241,0.06)"
          stroke="var(--accent-blue)"
          strokeWidth="1.5"
        />
        {/* Trend line */}
        <path
          d="M 290,185 L 310,175 L 330,180 L 350,160 L 370,150 L 380,145"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="2"
          className="relu-draw"
        />
        <text
          x="335"
          y="195"
          fill="var(--accent-blue)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          Predictive Analytics
        </text>
      </g>

      {/* Connection particles */}
      <circle r="3" fill="var(--accent-cyan)" className="data-particle">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M 85,105 L 165,130 L 250,105 L 335,130 L 415,105"
        />
      </circle>
    </svg>
  ),

  /* ═══ Slide 13: Web & App Development ═══ */
  "s10-diagram": () => (
    <svg viewBox="0 0 500 220">
      {/* Dashboard mockup */}
      <rect
        x="100"
        y="10"
        width="300"
        height="195"
        rx="10"
        fill="rgba(0,0,0,0.4)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.5"
      />
      {/* Title bar */}
      <rect
        x="100"
        y="10"
        width="300"
        height="25"
        rx="10"
        fill="rgba(255,255,255,0.05)"
      />
      <circle cx="116" cy="22" r="4" fill="#ff4136" />
      <circle cx="130" cy="22" r="4" fill="var(--accent-orange)" />
      <circle cx="144" cy="22" r="4" fill="var(--accent-green)" />
      <text
        x="250"
        y="27"
        fill="var(--text-secondary)"
        fontSize="8"
        textAnchor="middle"
      >
        AI Dashboard
      </text>

      {/* Sidebar */}
      <rect
        x="100"
        y="35"
        width="60"
        height="170"
        fill="rgba(255,255,255,0.03)"
      />
      {[50, 70, 90, 110, 130].map((y, i) => (
        <rect
          key={`sb-${i}`}
          x="110"
          y={y}
          width="40"
          height="8"
          rx="2"
          fill={i === 0 ? "var(--accent-cyan)" : "rgba(255,255,255,0.08)"}
          className={i === 0 ? "weight-pulse" : ""}
        />
      ))}

      {/* Main content - AI recommendation widget */}
      <rect
        x="175"
        y="45"
        width="105"
        height="60"
        rx="6"
        fill="rgba(0,242,255,0.06)"
        stroke="var(--accent-cyan)"
        strokeWidth="1"
        className="layer-pulse"
      />
      <text
        x="227"
        y="60"
        fill="var(--accent-cyan)"
        fontSize="7"
        textAnchor="middle"
        fontWeight="600"
      >
        AI Recommendations
      </text>
      {[70, 80, 90].map((y, i) => (
        <rect
          key={`rec-${i}`}
          x="182"
          y={y}
          width={70 - i * 10}
          height="5"
          rx="2"
          fill="rgba(0,242,255,0.2)"
          className="weight-pulse"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}

      {/* Behavior prediction widget */}
      <rect
        x="290"
        y="45"
        width="100"
        height="60"
        rx="6"
        fill="rgba(188,19,254,0.06)"
        stroke="var(--accent-magenta)"
        strokeWidth="1"
        className="layer-pulse"
        style={{ animationDelay: "0.4s" }}
      />
      <text
        x="340"
        y="60"
        fill="var(--accent-magenta)"
        fontSize="7"
        textAnchor="middle"
        fontWeight="600"
      >
        User Behavior
      </text>
      <path
        d="M 300,95 L 315,85 L 330,90 L 345,70 L 360,75 L 380,65"
        fill="none"
        stroke="var(--accent-magenta)"
        strokeWidth="1.5"
        className="sigmoid-draw"
      />

      {/* Dynamic pricing widget */}
      <rect
        x="175"
        y="115"
        width="215"
        height="55"
        rx="6"
        fill="rgba(57,255,20,0.06)"
        stroke="var(--accent-green)"
        strokeWidth="1"
        className="layer-pulse"
        style={{ animationDelay: "0.8s" }}
      />
      <text
        x="282"
        y="130"
        fill="var(--accent-green)"
        fontSize="7"
        textAnchor="middle"
        fontWeight="600"
      >
        Dynamic Pricing Engine
      </text>
      {/* Price bars */}
      {[195, 225, 255, 285, 315, 345].map((x, i) => (
        <rect
          key={`bar-${i}`}
          x={x}
          y={160 - [20, 30, 25, 35, 28, 40][i]}
          width="18"
          height={[20, 30, 25, 35, 28, 40][i]}
          rx="2"
          fill="rgba(57,255,20,0.2)"
          stroke="var(--accent-green)"
          strokeWidth="0.5"
          className="weight-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}

      {/* AI badge */}
      <rect
        x="20"
        y="80"
        width="60"
        height="60"
        rx="30"
        fill="rgba(0,242,255,0.08)"
        stroke="var(--accent-cyan)"
        strokeWidth="1.5"
        className="layer-pulse"
      />
      <text
        x="50"
        y="105"
        fill="var(--accent-cyan)"
        fontSize="10"
        textAnchor="middle"
        fontWeight="700"
      >
        AI
      </text>
      <text
        x="50"
        y="118"
        fill="var(--text-secondary)"
        fontSize="7"
        textAnchor="middle"
      >
        Powered
      </text>

      {/* Connection from AI to dashboard */}
      <line
        x1="80"
        y1="110"
        x2="100"
        y2="110"
        stroke="var(--accent-cyan)"
        strokeWidth="1"
        strokeDasharray="3"
        className="edge-flow"
      />
    </svg>
  ),

  /* ═══ Slide 14: Tools & Ecosystem ═══ */
  "s11-diagram": () => (
    <svg viewBox="0 0 500 220">
      {/* TensorFlow */}
      <g className="layer-pulse">
        <rect
          x="30"
          y="30"
          width="120"
          height="70"
          rx="10"
          fill="rgba(255,165,0,0.08)"
          stroke="var(--accent-orange)"
          strokeWidth="1.5"
        />
        <text
          x="90"
          y="60"
          fill="var(--accent-orange)"
          fontSize="14"
          textAnchor="middle"
          fontWeight="700"
        >
          TensorFlow
        </text>
        <text
          x="90"
          y="78"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          Google · Python
        </text>
        <text
          x="90"
          y="90"
          fill="var(--text-secondary)"
          fontSize="7"
          textAnchor="middle"
        >
          Production-grade ML
        </text>
      </g>

      {/* PyTorch */}
      <g className="layer-pulse" style={{ animationDelay: "0.3s" }}>
        <rect
          x="190"
          y="30"
          width="120"
          height="70"
          rx="10"
          fill="rgba(99,102,241,0.08)"
          stroke="var(--accent-blue)"
          strokeWidth="1.5"
        />
        <text
          x="250"
          y="60"
          fill="var(--accent-blue)"
          fontSize="14"
          textAnchor="middle"
          fontWeight="700"
        >
          PyTorch
        </text>
        <text
          x="250"
          y="78"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          Meta · Research
        </text>
        <text
          x="250"
          y="90"
          fill="var(--text-secondary)"
          fontSize="7"
          textAnchor="middle"
        >
          Dynamic computation
        </text>
      </g>

      {/* Keras */}
      <g className="layer-pulse" style={{ animationDelay: "0.6s" }}>
        <rect
          x="350"
          y="30"
          width="120"
          height="70"
          rx="10"
          fill="rgba(255,65,54,0.08)"
          stroke="#ff4136"
          strokeWidth="1.5"
        />
        <text
          x="410"
          y="60"
          fill="#ff4136"
          fontSize="14"
          textAnchor="middle"
          fontWeight="700"
        >
          Keras
        </text>
        <text
          x="410"
          y="78"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          High-level API
        </text>
        <text
          x="410"
          y="90"
          fill="var(--text-secondary)"
          fontSize="7"
          textAnchor="middle"
        >
          Rapid prototyping
        </text>
      </g>

      {/* Deployment row */}
      <text
        x="250"
        y="130"
        fill="var(--accent-green)"
        fontSize="11"
        textAnchor="middle"
        fontWeight="700"
      >
        Deployment Targets
      </text>

      {/* REST API */}
      <g className="layer-pulse" style={{ animationDelay: "0.9s" }}>
        <rect
          x="30"
          y="145"
          width="120"
          height="55"
          rx="10"
          fill="rgba(0,242,255,0.06)"
          stroke="var(--accent-cyan)"
          strokeWidth="1"
        />
        <text
          x="90"
          y="167"
          fill="var(--accent-cyan)"
          fontSize="11"
          textAnchor="middle"
          fontWeight="600"
        >
          REST APIs
        </text>
        <text
          x="90"
          y="182"
          fill="var(--text-secondary)"
          fontSize="8"
          textAnchor="middle"
        >
          Flask · FastAPI
        </text>
      </g>

      {/* Cloud */}
      <g className="layer-pulse" style={{ animationDelay: "1.2s" }}>
        <rect
          x="190"
          y="145"
          width="120"
          height="55"
          rx="10"
          fill="rgba(188,19,254,0.06)"
          stroke="var(--accent-magenta)"
          strokeWidth="1"
        />
        <path
          d="M 225,168 C 225,158 235,155 240,158 C 242,150 255,148 260,155 C 268,152 278,158 275,168 Z"
          fill="none"
          stroke="var(--accent-magenta)"
          strokeWidth="1.5"
        />
        <text
          x="250"
          y="185"
          fill="var(--accent-magenta)"
          fontSize="9"
          textAnchor="middle"
        >
          Cloud AI
        </text>
      </g>

      {/* Edge */}
      <g className="layer-pulse" style={{ animationDelay: "1.5s" }}>
        <rect
          x="350"
          y="145"
          width="120"
          height="55"
          rx="10"
          fill="rgba(57,255,20,0.06)"
          stroke="var(--accent-green)"
          strokeWidth="1"
        />
        {/* Chip icon */}
        <rect
          x="395"
          y="155"
          width="30"
          height="20"
          rx="3"
          fill="none"
          stroke="var(--accent-green)"
          strokeWidth="1"
        />
        {[398, 406, 414, 422].map((x, i) => (
          <line
            key={`pin-${i}`}
            x1={x}
            y1="155"
            x2={x}
            y2="150"
            stroke="var(--accent-green)"
            strokeWidth="1"
          />
        ))}
        <text
          x="410"
          y="190"
          fill="var(--accent-green)"
          fontSize="9"
          textAnchor="middle"
        >
          Edge Devices
        </text>
      </g>

      {/* Connection lines */}
      {[90, 250, 410].map((x, i) => (
        <line
          key={`conn-${i}`}
          x1={x}
          y1="100"
          x2={x}
          y2="145"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          strokeDasharray="3"
          className="edge-flow"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  ),

  /* ═══ Slide 15: Production Challenges ═══ */
  "s12-diagram": () => (
    <svg viewBox="0 0 500 220">
      {/* Cost gauge */}
      <g>
        <text
          x="130"
          y="25"
          fill="var(--accent-orange)"
          fontSize="12"
          textAnchor="middle"
          fontWeight="700"
        >
          Compute Costs
        </text>
        <path
          d="M 60,130 A 70 70 0 0 1 200,130"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 60,130 A 70 70 0 0 1 180,75"
          fill="none"
          stroke="var(--accent-orange)"
          strokeWidth="8"
          strokeLinecap="round"
          className="sigmoid-draw"
        />
        {/* Needle */}
        <line
          x1="130"
          y1="130"
          x2="170"
          y2="80"
          stroke="var(--accent-orange)"
          strokeWidth="2"
          className="bias-shift"
        />
        <circle cx="130" cy="130" r="5" fill="var(--accent-orange)" />
        <text x="60" y="150" fill="var(--text-secondary)" fontSize="8">
          Low
        </text>
        <text x="190" y="150" fill="#ff4136" fontSize="8">
          High
        </text>
        <text
          x="130"
          y="165"
          fill="var(--accent-orange)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          GPU · TPU · RAM
        </text>
      </g>

      {/* Data bar */}
      <g>
        <text
          x="130"
          y="185"
          fill="var(--accent-cyan)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          Data Requirements
        </text>
        <rect
          x="50"
          y="192"
          width="160"
          height="10"
          rx="5"
          fill="rgba(255,255,255,0.05)"
        />
        <rect
          x="50"
          y="192"
          width="130"
          height="10"
          rx="5"
          fill="rgba(0,242,255,0.3)"
          stroke="var(--accent-cyan)"
          strokeWidth="1"
          className="weight-pulse"
        />
        <text x="185" y="200" fill="var(--accent-cyan)" fontSize="8">
          81%
        </text>
      </g>

      {/* Bias warning */}
      <g>
        <text
          x="370"
          y="25"
          fill="#ff4136"
          fontSize="12"
          textAnchor="middle"
          fontWeight="700"
        >
          Model Bias
        </text>
        <path
          d="M 370,45 L 420,135 L 320,135 Z"
          fill="rgba(255,65,54,0.08)"
          stroke="#ff4136"
          strokeWidth="2"
          className="layer-pulse"
        />
        <text
          x="370"
          y="110"
          fill="#ff4136"
          fontSize="24"
          textAnchor="middle"
          fontWeight="700"
        >
          !
        </text>
        <text
          x="370"
          y="155"
          fill="var(--text-secondary)"
          fontSize="9"
          textAnchor="middle"
        >
          Unfair predictions
        </text>
      </g>

      {/* Black box */}
      <g>
        <text
          x="370"
          y="175"
          fill="var(--accent-magenta)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
        >
          Interpretability
        </text>
        <rect
          x="330"
          y="183"
          width="80"
          height="25"
          rx="5"
          fill="rgba(0,0,0,0.5)"
          stroke="var(--accent-magenta)"
          strokeWidth="1.5"
        />
        <text
          x="370"
          y="200"
          fill="var(--accent-magenta)"
          fontSize="9"
          textAnchor="middle"
        >
          Black Box ?
        </text>
      </g>
    </svg>
  ),

  /* ═══ Slide 16: Best Practices ═══ */
  "s13-diagram": () => (
    <svg viewBox="0 0 500 200">
      {/* Pipeline */}
      {[
        {
          x: 30,
          label: "Data",
          sub: "Clean & Label",
          color: "var(--accent-cyan)",
          icon: "📊",
        },
        {
          x: 140,
          label: "Train",
          sub: "Version Models",
          color: "var(--accent-blue)",
          icon: "⚙️",
        },
        {
          x: 250,
          label: "Test",
          sub: "Validate Acc.",
          color: "var(--accent-green)",
          icon: "✓",
        },
        {
          x: 360,
          label: "Deploy",
          sub: "Monitor & Log",
          color: "var(--accent-magenta)",
          icon: "🚀",
        },
      ].map((step, i) => (
        <g
          key={`step-${i}`}
          className="layer-pulse"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <rect
            x={step.x}
            y="30"
            width="100"
            height="80"
            rx="10"
            fill={`${step.color}11`}
            stroke={step.color}
            strokeWidth="1.5"
          />
          <text
            x={step.x + 50}
            y="60"
            fill={step.color}
            fontSize="22"
            textAnchor="middle"
          >
            {step.icon}
          </text>
          <text
            x={step.x + 50}
            y="82"
            fill={step.color}
            fontSize="11"
            textAnchor="middle"
            fontWeight="700"
          >
            {step.label}
          </text>
          <text
            x={step.x + 50}
            y="100"
            fill="var(--text-secondary)"
            fontSize="8"
            textAnchor="middle"
          >
            {step.sub}
          </text>
          {/* Arrow */}
          {i < 3 && (
            <g>
              <line
                x1={step.x + 100}
                y1="70"
                x2={step.x + 140}
                y2="70"
                stroke={step.color}
                strokeWidth="1.5"
                className="edge-flow"
              />
              <polygon
                points={`${step.x + 137},65 ${step.x + 145},70 ${step.x + 137},75`}
                fill={step.color}
                opacity="0.7"
              />
            </g>
          )}
        </g>
      ))}

      {/* Feedback loop */}
      <path
        d="M 410,130 C 450,150 450,170 410,180 L 80,180 C 40,175 40,155 80,145"
        fill="none"
        stroke="var(--accent-orange)"
        strokeWidth="1.5"
        strokeDasharray="5"
        className="relu-draw"
        style={{ animationDelay: "1.5s" }}
      />
      <text
        x="250"
        y="195"
        fill="var(--accent-orange)"
        fontSize="9"
        textAnchor="middle"
        fontWeight="600"
      >
        ↻ Continuous Monitoring & Retraining Loop
      </text>

      {/* Particle */}
      <circle r="4" fill="var(--accent-cyan)" className="data-particle">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M 80,70 L 190,70 L 300,70 L 410,70 L 410,180 L 80,180 L 80,70"
        />
      </circle>
    </svg>
  ),

  /* ═══ Slide 17: ImagiNET Ventures ═══ */
  "s14-diagram": () => (
    <svg viewBox="0 0 500 200">
      {/* Company hub */}
      <circle
        cx="250"
        cy="100"
        r="50"
        fill="rgba(0,242,255,0.06)"
        stroke="var(--accent-cyan)"
        strokeWidth="2"
        className="layer-pulse"
      />
      <text
        x="250"
        y="92"
        fill="var(--accent-cyan)"
        fontSize="11"
        textAnchor="middle"
        fontWeight="700"
      >
        ImagiNET
      </text>
      <text
        x="250"
        y="107"
        fill="var(--accent-cyan)"
        fontSize="9"
        textAnchor="middle"
      >
        Ventures
      </text>
      <text
        x="250"
        y="120"
        fill="var(--accent-magenta)"
        fontSize="7"
        textAnchor="middle"
      >
        × AI
      </text>

      {/* Orbiting elements */}
      {[
        { angle: 0, label: "Smart Apps", color: "var(--accent-green)" },
        { angle: 60, label: "ML Models", color: "var(--accent-blue)" },
        { angle: 120, label: "Data Insights", color: "var(--accent-orange)" },
        { angle: 180, label: "Automation", color: "var(--accent-magenta)" },
        { angle: 240, label: "Prediction", color: "var(--accent-cyan)" },
        { angle: 300, label: "Innovation", color: "#ff4136" },
      ].map((item, i) => {
        const rad = (item.angle * Math.PI) / 180;
        const cx = 250 + Math.cos(rad) * 120;
        const cy = 100 + Math.sin(rad) * 75;
        return (
          <g
            key={`orb-${i}`}
            className="layer-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <circle
              cx={cx}
              cy={cy}
              r="28"
              fill={`${item.color}11`}
              stroke={item.color}
              strokeWidth="1.5"
            />
            <text
              x={cx}
              y={cy + 4}
              fill={item.color}
              fontSize="8"
              textAnchor="middle"
              fontWeight="600"
            >
              {item.label}
            </text>
            <line
              x1={250 + Math.cos(rad) * 52}
              y1={100 + Math.sin(rad) * 32}
              x2={cx - Math.cos(rad) * 28}
              y2={cy - Math.sin(rad) * 18}
              stroke={item.color}
              strokeWidth="0.8"
              strokeDasharray="3"
              opacity="0.4"
              className="edge-flow"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          </g>
        );
      })}

      {/* Orbiting particle */}
      <circle r="4" fill="var(--accent-cyan)" className="data-particle">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M 370,100 C 370,25 130,25 130,100 C 130,175 370,175 370,100"
        />
      </circle>
    </svg>
  ),

  /* ═══ Slide 20: Why AGI Matters ═══ */
  "s16-diagram": () => (
    <svg viewBox="0 0 500 220">
      {/* Self-improving loop */}
      <circle
        cx="250"
        cy="110"
        r="70"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="30"
      />
      <circle
        cx="250"
        cy="110"
        r="70"
        fill="none"
        stroke="var(--accent-blue)"
        strokeWidth="3"
        strokeDasharray="120 320"
        className="layer-pulse"
      />
      <circle
        cx="250"
        cy="110"
        r="70"
        fill="none"
        stroke="var(--accent-cyan)"
        strokeWidth="3"
        strokeDasharray="120 320"
        strokeDashoffset="-150"
        className="layer-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="250"
        cy="110"
        r="70"
        fill="none"
        stroke="var(--accent-magenta)"
        strokeWidth="3"
        strokeDasharray="120 320"
        strokeDashoffset="-300"
        className="layer-pulse"
        style={{ animationDelay: "1s" }}
      />

      <text
        x="250"
        y="100"
        fill="var(--accent-cyan)"
        fontSize="12"
        textAnchor="middle"
        fontWeight="700"
      >
        Self-Improving
      </text>
      <text
        x="250"
        y="118"
        fill="var(--accent-magenta)"
        fontSize="10"
        textAnchor="middle"
      >
        Autonomous
      </text>
      <text
        x="250"
        y="132"
        fill="var(--text-secondary)"
        fontSize="8"
        textAnchor="middle"
      >
        Systems
      </text>

      {/* Labels around */}
      <text
        x="250"
        y="25"
        fill="var(--accent-blue)"
        fontSize="10"
        textAnchor="middle"
        fontWeight="600"
      >
        Learn
      </text>
      <text
        x="380"
        y="115"
        fill="var(--accent-cyan)"
        fontSize="10"
        textAnchor="middle"
        fontWeight="600"
      >
        Adapt
      </text>
      <text
        x="250"
        y="210"
        fill="var(--accent-magenta)"
        fontSize="10"
        textAnchor="middle"
        fontWeight="600"
      >
        Evolve
      </text>
      <text
        x="120"
        y="115"
        fill="var(--accent-green)"
        fontSize="10"
        textAnchor="middle"
        fontWeight="600"
      >
        Optimize
      </text>

      {/* Orbiting particle */}
      <circle r="5" fill="var(--accent-cyan)" className="data-particle">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M 250,40 C 320,40 320,180 250,180 C 180,180 180,40 250,40"
        />
      </circle>
    </svg>
  ),

  /* ═══ Slide 21: The Future ═══ */
  "s17-diagram": () => (
    <svg viewBox="0 0 500 200">
      {/* Timeline */}
      <line
        x1="50"
        y1="100"
        x2="450"
        y2="100"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
      />

      {[
        {
          x: 100,
          label: "Today",
          sub: "Rule-Based",
          color: "var(--accent-blue)",
        },
        {
          x: 210,
          label: "Near Future",
          sub: "AI-Assisted",
          color: "var(--accent-cyan)",
        },
        {
          x: 320,
          label: "2030+",
          sub: "AI-First",
          color: "var(--accent-magenta)",
        },
        {
          x: 430,
          label: "Beyond",
          sub: "Self-Healing",
          color: "var(--accent-green)",
        },
      ].map((pt, i) => (
        <g
          key={`tl-${i}`}
          className="layer-pulse"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <circle cx={pt.x} cy="100" r="8" fill={pt.color} opacity="0.3" />
          <circle
            cx={pt.x}
            cy="100"
            r="4"
            fill={pt.color}
            className="node-blink"
          />
          <text
            x={pt.x}
            y="80"
            fill={pt.color}
            fontSize="10"
            textAnchor="middle"
            fontWeight="700"
          >
            {pt.label}
          </text>
          <text
            x={pt.x}
            y="125"
            fill="var(--text-secondary)"
            fontSize="8"
            textAnchor="middle"
          >
            {pt.sub}
          </text>
        </g>
      ))}

      {/* Progress glow */}
      <line
        x1="50"
        y1="100"
        x2="320"
        y2="100"
        stroke="var(--accent-cyan)"
        strokeWidth="2"
        className="relu-draw"
      />

      {/* Future box */}
      <rect
        x="150"
        y="145"
        width="200"
        height="40"
        rx="8"
        fill="rgba(0,242,255,0.05)"
        stroke="var(--accent-cyan)"
        strokeWidth="1"
        className="layer-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <text
        x="250"
        y="168"
        fill="var(--accent-cyan)"
        fontSize="9"
        textAnchor="middle"
        fontWeight="600"
      >
        Fully Adaptive Architectures
      </text>

      {/* Traveling particle */}
      <circle r="4" fill="var(--accent-cyan)" className="data-particle">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M 100,100 L 210,100 L 320,100 L 430,100"
        />
      </circle>
    </svg>
  ),

  /* ═══ Slide 22: Key Takeaways ═══ */
  "s18-diagram": () => (
    <svg viewBox="0 0 500 220">
      {/* Center brain/chip */}
      <circle
        cx="250"
        cy="110"
        r="45"
        fill="rgba(0,242,255,0.06)"
        stroke="var(--accent-cyan)"
        strokeWidth="2"
        className="layer-pulse"
      />
      <text
        x="250"
        y="105"
        fill="var(--accent-cyan)"
        fontSize="28"
        textAnchor="middle"
      >
        🧠
      </text>
      <text
        x="250"
        y="130"
        fill="var(--accent-cyan)"
        fontSize="8"
        textAnchor="middle"
        fontWeight="600"
      >
        AI Advantage
      </text>

      {/* Radiating takeaways */}
      {[
        {
          angle: -60,
          label: "Competitive",
          sub: "Edge",
          color: "var(--accent-green)",
        },
        {
          angle: 0,
          label: "Adaptive",
          sub: "Systems",
          color: "var(--accent-blue)",
        },
        {
          angle: 60,
          label: "Scale",
          sub: "Unlimited",
          color: "var(--accent-magenta)",
        },
        {
          angle: 120,
          label: "Data-Driven",
          sub: "Decisions",
          color: "var(--accent-orange)",
        },
        { angle: 180, label: "Innovation", sub: "First", color: "#ff4136" },
        {
          angle: 240,
          label: "Future",
          sub: "Ready",
          color: "var(--accent-cyan)",
        },
      ].map((item, i) => {
        const rad = (item.angle * Math.PI) / 180;
        const cx = 250 + Math.cos(rad) * 130;
        const cy = 110 + Math.sin(rad) * 80;
        return (
          <g
            key={`tk-${i}`}
            className="layer-pulse"
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            <line
              x1={250 + Math.cos(rad) * 47}
              y1={110 + Math.sin(rad) * 47}
              x2={cx - Math.cos(rad) * 25}
              y2={cy - Math.sin(rad) * 15}
              stroke={item.color}
              strokeWidth="1"
              strokeDasharray="3"
              opacity="0.4"
              className="edge-flow"
            />
            <circle
              cx={cx}
              cy={cy}
              r="25"
              fill={`${item.color}11`}
              stroke={item.color}
              strokeWidth="1.5"
            />
            <text
              x={cx}
              y={cy - 2}
              fill={item.color}
              fontSize="8"
              textAnchor="middle"
              fontWeight="700"
            >
              {item.label}
            </text>
            <text
              x={cx}
              y={cy + 10}
              fill="var(--text-secondary)"
              fontSize="7"
              textAnchor="middle"
            >
              {item.sub}
            </text>
          </g>
        );
      })}
    </svg>
  ),
};

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
            const DiagramComponent = diagrams[diag.id];
            return (
              <div
                key={diag.id}
                className={`stage-art reveal-item ${isVisible ? "visible" : ""}`}
                id={diag.id}
              >
                {diag.type === "svg" && DiagramComponent && (
                  <DiagramComponent />
                )}
                {diag.type === "svg" && !DiagramComponent && (
                  <svg viewBox="0 0 100 60">
                    <text
                      x="50"
                      y="30"
                      fill="var(--text-secondary)"
                      fontSize="6"
                      textAnchor="middle"
                    >
                      {diag.id}
                    </text>
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
