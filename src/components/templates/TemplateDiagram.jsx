import React from "react";

const TemplateDiagram = ({ data }) => {
  return (
    <>
      <h2>{data.title}</h2>
      {data.subtitle && <p className="subtitle">{data.subtitle}</p>}
      <div className="diagram-stage">
        <div className="stage-art visible" id={`${data.id}-diagram`}>
          <img src={data.image || data.diagram} alt={data.title} />
        </div>
      </div>
    </>
  );
};

export default TemplateDiagram;
