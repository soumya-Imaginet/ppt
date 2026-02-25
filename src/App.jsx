import { useState, useEffect, useCallback } from "react";
import "./index.css";
import { slideData } from "./data/slides";
import Slide from "./components/Slide";

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [visibleFragments, setVisibleFragments] = useState([]);
  const [activeBtn, setActiveBtn] = useState(null);

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
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        setActiveBtn("next");
        setTimeout(() => setActiveBtn(null), 150);
        nextStep();
      }
      if (e.key === "ArrowLeft") {
        setActiveBtn("prev");
        setTimeout(() => setActiveBtn(null), 150);
        prevStep();
      }
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
          <button
            className={`btn nav-btn ${activeBtn === "prev" ? "active-key" : ""}`}
            onClick={prevStep}
            aria-label="Back"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={`btn nav-btn ${activeBtn === "next" ? "active-key" : ""}`}
            onClick={nextStep}
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="slides-footer">
          &copy; {new Date().getFullYear()} All Rights Reserved. |{" "}
          {new Date().toLocaleString()}
        </div>
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
