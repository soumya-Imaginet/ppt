import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SlideImageRecognition = ({ data, visibleFragments }) => {
  const [activeStep, setActiveStep] = useState(0);

  // Sync activeStep with visibleFragments
  useEffect(() => {
    if (visibleFragments.length === 0) setActiveStep(0);
    else {
      // Find the highest step number among visible fragments
      const steps = visibleFragments
        .filter((f) => f.startsWith("step-"))
        .map((f) => parseInt(f.replace("step-", "")));
      if (steps.length > 0) {
        setActiveStep(Math.max(...steps));
      }
    }
  }, [visibleFragments]);

  // Digit "3" data for the 28x28 grid (approximate)
  const digit3 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const outputScores = [
    { label: "0", score: 0.05 },
    { label: "1", score: 0.02 },
    { label: "2", score: 0.12 },
    { label: "3", score: 0.98 },
    { label: "4", score: 0.01 },
    { label: "5", score: 0.08 },
    { label: "8", score: 0.15 },
    { label: "9", score: 0.04 },
  ];

  const renderPixelGrid = () => {
    return (
      <div className="pixel-grid-container">
        {digit3.map((row, y) => (
          <div key={`row-${y}`} className="pixel-row">
            {row.map((val, x) => (
              <motion.div
                key={`pixel-${x}-${y}`}
                className="pixel"
                animate={{
                  backgroundColor:
                    val === 1 ? "var(--accent-cyan)" : "transparent",
                  boxShadow: val === 1 ? "0 0 5px var(--accent-cyan)" : "none",
                  opacity: val === 1 ? 0.8 : 0.1,
                }}
                transition={{ delay: (x + y) * 0.01 }}
              />
            ))}
          </div>
        ))}
        {/* Scanning Kernel Animation */}
        {activeStep === 2 && (
          <motion.div
            className="scanning-kernel"
            animate={{
              x: [0, 150, 0, 150, 0, 150],
              y: [0, 0, 40, 40, 80, 80],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </div>
    );
  };

  const renderFeatureMaps = () => {
    return (
      <div className="feature-maps-container">
        {[1, 2, 3].map((id) => (
          <motion.div
            key={`fm-${id}`}
            className="feature-map"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: id * 0.2 }}
          >
            <div className="fm-title">Map {id}</div>
            <div className="fm-grid">
              {/* Symbolic small feature grids */}
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={`fm-p-${id}-${i}`}
                  className="fm-pixel"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderOutputBars = () => {
    return (
      <div className="output-bars-container">
        {outputScores.map((item, i) => (
          <div key={`out-${i}`} className="output-bar-row">
            <div className="bar-label">{item.label}</div>
            <div className="bar-bg">
              <motion.div
                className="bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${item.score * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                style={{
                  backgroundColor:
                    item.label === "3"
                      ? "var(--accent-green)"
                      : "var(--accent-blue)",
                  boxShadow:
                    item.label === "3"
                      ? "0 0 10px var(--accent-green)"
                      : "none",
                }}
              />
            </div>
            <div className="bar-value">{(item.score * 100).toFixed(0)}%</div>
          </div>
        ))}
        {activeStep === 3 && (
          <motion.div
            className="final-prediction-call"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Prediction: <strong>3</strong>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="image-recognition-slide">
      <motion.h2 layout>{data.title}</motion.h2>
      <motion.p className="subtitle" layout>
        {data.subtitle}
      </motion.p>

      <div className="recognition-content">
        <div className="steps-column">
          {data.items.map((item, index) => {
            const stepNum = parseInt(item.id.replace("step-", ""));
            const isVisible = visibleFragments.includes(item.id);
            const isActive = activeStep === stepNum;

            return (
              <motion.div
                key={item.id}
                className={`step-card ${isVisible ? "visible" : ""} ${isActive ? "active" : ""}`}
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
              >
                <div className="step-num">{stepNum}</div>
                <div className="step-text">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="visualization-column">
          <div className="viz-stage">
            <AnimatePresence mode="wait">
              {activeStep === 1 && (
                <motion.div
                  key="v-1"
                  className="viz-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3>Input Image (Pixels)</h3>
                  {renderPixelGrid()}
                </motion.div>
              )}
              {activeStep === 2 && (
                <motion.div
                  key="v-2"
                  className="viz-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3>Feature Extraction (CNN)</h3>
                  <div className="cnn-viz">
                    {renderPixelGrid()}
                    <div className="viz-arrow">→</div>
                    {renderFeatureMaps()}
                  </div>
                </motion.div>
              )}
              {activeStep === 3 && (
                <motion.div
                  key="v-3"
                  className="viz-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3>Classification & Output</h3>
                  {renderOutputBars()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-recognition-slide {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .recognition-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          flex-grow: 1;
          margin-top: 20px;
        }
        .steps-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .step-card {
          display: flex;
          gap: 20px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
          opacity: 0.3;
        }
        .step-card.visible {
          opacity: 0.7;
        }
        .step-card.active {
          opacity: 1;
          background: rgba(0, 229, 255, 0.1);
          border-color: var(--accent-cyan);
          transform: scale(1.02);
        }
        .step-num {
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-cyan);
          opacity: 0.5;
        }
        .step-text h4 {
          margin: 0 0 5px 0;
          color: var(--accent-cyan);
        }
        .step-text p {
          font-size: 1rem;
          margin: 0;
          color: var(--text-secondary);
        }

        .visualization-column {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 30px;
          position: relative;
          overflow: hidden;
        }
        .viz-stage {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .viz-overlay {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        /* Pixel Grid Styles */
        .pixel-grid-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 8px;
        }
        .pixel-row {
          display: flex;
          gap: 2px;
        }
        .pixel {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }
        .scanning-kernel {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 36px;
          height: 36px;
          border: 2px solid var(--accent-magenta);
          background: rgba(245, 0, 87, 0.2);
          box-shadow: 0 0 15px var(--accent-magenta);
          pointer-events: none;
        }

        /* CNN Viz */
        .cnn-viz {
          display: flex;
          align-items: center;
          gap: 30px;
          width: 100%;
          justify-content: center;
        }
        .viz-arrow {
          font-size: 2rem;
          color: var(--text-secondary);
        }
        .feature-maps-container {
          display: flex;
          gap: 15px;
        }
        .feature-map {
          background: rgba(0, 0, 0, 0.3);
          padding: 10px;
          border: 1px solid var(--accent-blue);
          border-radius: 6px;
        }
        .fm-title {
          font-size: 0.7rem;
          color: var(--accent-blue);
          margin-bottom: 5px;
          text-align: center;
        }
        .fm-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2px;
        }
        .fm-pixel {
          width: 15px;
          height: 15px;
          background: var(--accent-blue);
          border-radius: 2px;
        }

        /* Output Bars */
        .output-bars-container {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .output-bar-row {
          display: grid;
          grid-template-columns: 30px 1fr 50px;
          align-items: center;
          gap: 15px;
        }
        .bar-label {
          font-weight: bold;
          color: var(--text-primary);
        }
        .bar-bg {
          height: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 10px;
        }
        .bar-value {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: right;
        }
        .final-prediction-call {
          margin-top: 20px;
          text-align: center;
          font-size: 1.5rem;
          color: var(--accent-green);
          padding: 15px;
          background: rgba(0, 230, 118, 0.1);
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default SlideImageRecognition;
