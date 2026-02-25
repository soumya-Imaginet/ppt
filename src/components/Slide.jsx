import React from "react";
import TemplateTitle from "./templates/TemplateTitle";
import TemplateGrid from "./templates/TemplateGrid";
import TemplateDiagram from "./templates/TemplateDiagram";
import TemplateHybrid from "./templates/TemplateHybrid";
import SvgTemplate from "./templates/SvgTemplate";
import SlideAnimatedArchitecture from "./templates/SlideAnimatedArchitecture";
import SlideBrainDiagram from "./templates/SlideBrainDiagram";
import TemplateTeaser from "./templates/TemplateTeaser";

const Slide = ({ data, active, prev, next, visibleFragments, onCardClick }) => {
  const isDiagramOnly = data.type === "diagram";
  const isTeaser = data.type === "teaser";
  const slideClass = `slide ${active ? "active" : ""} ${prev ? "prev" : ""} ${next ? "next" : ""} ${isDiagramOnly ? "slide-diagram-only" : ""} ${isTeaser ? "slide-teaser-only" : ""}`;

  const renderContent = () => {
    switch (data.type) {
      case "teaser":
        return <TemplateTeaser data={data} />;
      case "title":
        return <TemplateTitle data={data} />;
      case "grid":
        return (
          <TemplateGrid
            data={data}
            visibleFragments={visibleFragments}
            onCardClick={onCardClick}
          />
        );
      case "diagram":
        return <TemplateDiagram data={data} />;
      case "svg-brain":
        return <SlideBrainDiagram data={data} />;
      case "animated-arch":
        return (
          <SlideAnimatedArchitecture
            data={data}
            visibleFragments={visibleFragments}
            onCardClick={onCardClick}
          />
        );
      case "hybrid":
        return (
          <TemplateHybrid
            data={data}
            visibleFragments={visibleFragments}
            onCardClick={onCardClick}
          />
        );
      case "svg":
        return (
          <SvgTemplate
            data={data}
            visibleFragments={visibleFragments}
            onCardClick={onCardClick}
          />
        );
      default:
        return <div>Unknown Slide Type: {data.type}</div>;
    }
  };

  return (
    <div className={slideClass} id={`slide-${data.id}`}>
      {renderContent()}
    </div>
  );
};

export default Slide;
