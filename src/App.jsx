import { useState, useEffect, useCallback } from "react";
import "./index.css";
import { slideData } from "./data/slides";
import Slide from "./components/Slide";
import { generatePPT } from "./utils/pptExport";

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [visibleFragments, setVisibleFragments] = useState([]);

  const currentSlide = slideData[currentSlideIndex];

  const getSlideFragments = useCallback((slide) => {
    let frags = [];
    if (slide.items) frags = frags.concat(slide.items.map((i) => i.id));
    if (slide.diagrams) frags = frags.concat(slide.diagrams.map((d) => d.id));
    if (slide.diagram && !slide.diagrams) frags.push(slide.id + "-diagram");
    if (slide.type === "diagram" && !slide.diagram)
      frags.push(slide.id + "-diagram");
    return frags;
  }, []);

  const nextStep = useCallback(() => {
    const allFrags = getSlideFragments(currentSlide);
    const unrevealed = allFrags.filter((f) => !visibleFragments.includes(f));

    if (unrevealed.length > 0) {
      setVisibleFragments((prev) => [...prev, unrevealed[0]]);
    } else if (currentSlideIndex < slideData.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
      setVisibleFragments([]);
    }
  }, [currentSlide, currentSlideIndex, visibleFragments, getSlideFragments]);

  const prevStep = useCallback(() => {
    if (visibleFragments.length > 0) {
      setVisibleFragments((prev) => prev.slice(0, -1));
    } else if (currentSlideIndex > 0) {
      const prevSlide = slideData[currentSlideIndex - 1];
      setCurrentSlideIndex((prev) => prev - 1);
      setVisibleFragments(getSlideFragments(prevSlide));
    }
  }, [currentSlideIndex, visibleFragments, getSlideFragments]);

  const handleCardClick = useCallback(
    (cardId) => {
      const allFrags = getSlideFragments(currentSlide);
      const idx = allFrags.indexOf(cardId);
      if (idx !== -1) {
        setVisibleFragments(allFrags.slice(0, idx + 1));
      }
    },
    [currentSlide, getSlideFragments],
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter")
        nextStep();
      if (e.key === "ArrowLeft") prevStep();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextStep, prevStep]);

  return (
    <>
      <div id="morphing-bg-element"></div>
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      <div className="presentation-container">
        {slideData.map((data, index) => (
          <Slide
            key={data.id}
            data={data}
            active={index === currentSlideIndex}
            prev={index < currentSlideIndex}
            next={index > currentSlideIndex}
            visibleFragments={
              index === currentSlideIndex ? visibleFragments : []
            }
            onCardClick={handleCardClick}
          />
        ))}

        <div className="controls">
          <button className="btn" onClick={prevStep}>
            BACK
          </button>
          <button className="btn" onClick={nextStep}>
            NEXT
          </button>
        </div>

        <button id="ppt-download-btn" onClick={generatePPT}>
          💾 Export Editable PPTX
        </button>

        <div className="slide-number">
          <span id="slide-num">
            {currentSlideIndex + 1} / {slideData.length}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
