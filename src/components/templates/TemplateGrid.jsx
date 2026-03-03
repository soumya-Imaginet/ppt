import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TemplateGrid = ({ data, visibleFragments, onCardClick }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {data.title}
      </motion.h2>
      {data.subtitle && (
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {data.subtitle}
        </motion.p>
      )}

      <div className="visual-grid">
        {data.items.map((item, index) => {
          const isVisible = visibleFragments.includes(item.id);
          const isActive =
            visibleFragments[visibleFragments.length - 1] === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.9, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                translateY: -10,
                transition: { duration: 0.2 },
              }}
              className={`visual-card reveal-item ${isVisible ? "visible" : ""} ${isActive ? "active" : ""}`}
              id={item.id}
              onClick={() => onCardClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <AnimatePresence mode="wait">
                {item.image && (
                  <motion.div
                    className="card-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src={item.image} alt={item.title} />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.h4
                animate={
                  isActive
                    ? { color: "var(--accent-magenta)" }
                    : { color: "var(--accent-cyan)" }
                }
              >
                {item.title}
              </motion.h4>
              <motion.p animate={isActive ? { opacity: 1 } : { opacity: 0.7 }}>
                {item.text}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default TemplateGrid;
