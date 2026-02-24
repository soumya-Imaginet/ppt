import PptxGenJS from "pptxgenjs";

export async function generatePPT() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";

  const c = {
    bg: "05070A",
    cardBg: "161b22",
    tPri: "F0F6FC",
    tSec: "8B949E",
    cyan: "00F2FF",
    blue: "58A6FF",
    mag: "FF00FF",
    purp: "BC13FE",
    grn: "39FF14",
    org: "FF6700",
  };

  const newSlide = () => {
    const s = pptx.addSlide();
    s.background = { color: c.bg };
    return s;
  };

  const addH = (s, t, sub) => {
    s.addText(t, {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 0.8,
      fontSize: 32,
      color: c.cyan,
      bold: true,
      fontFace: "Outfit",
    });
    if (sub)
      s.addText(sub, {
        x: 0.5,
        y: 1.2,
        w: 9,
        h: 0.5,
        fontSize: 16,
        color: c.tSec,
        fontFace: "Outfit",
      });
  };

  const addCard = (s, opts) => {
    const { x, y, w, h, title, text } = opts;
    s.addShape("rect", {
      x,
      y,
      w,
      h,
      fill: { color: c.cardBg },
      line: { color: "FFFFFF", transparency: 90 },
    });
    s.addText(title, {
      x: x + 0.1,
      y: y + 0.1,
      w: w - 0.2,
      h: 0.3,
      fontSize: 14,
      color: c.cyan,
      bold: true,
    });
    s.addText(text, {
      x: x + 0.1,
      y: y + 0.4,
      w: w - 0.2,
      h: h - 0.5,
      fontSize: 11,
      color: c.tSec,
    });
  };

  // Re-using the content from the original script
  const slideContent = [
    {
      title: "Neural Networks in the Modern Software Tech Stack",
      subtitle: "Building Intelligent Software Systems",
      type: "title",
    },
    {
      title: "Evolution & AI Shift in Software",
      subtitle: "From Static Logic to Adaptive Systems",
      type: "text",
      content:
        "Combining deterministic logic with adaptive, data-driven intelligence across the software lifecycle.",
    },
    {
      title: "Software Evolution Path",
      subtitle: "The shift from Software 1.0 to Software 2.0",
      type: "image",
      image: "assets/software_evolution_diagram_1771910148064.png",
    },
    {
      title: "What Is a Neural Network?",
      subtitle: "Inspired by the human brain",
      type: "text",
      content:
        "Artificial: Math units in layers. Biological: Cerebrum (thought), Cerebellum (movement), Brain Stem (life functions).",
    },
    {
      title: "Core Architecture",
      subtitle: "Input, Hidden, and Output layers",
      type: "image",
      image: "assets/nn_architecture_1771910102813.png",
    },
    {
      title: "How Neural Networks Learn",
      subtitle: "Forward Pass & Backpropagation",
      type: "text",
      content: "Input -> Output -> Loss -> Adjust Weights -> Repeat.",
    },
    {
      title: "Deterministic vs Probabilistic Systems",
      subtitle: "Static vs Confidence-based",
      type: "text",
      content: "Shift from binary decisions to probability-based outcomes.",
    },
    {
      title: "Where AI Fits in the Tech Stack",
      subtitle: "Modern Architecture Integration",
      type: "image",
      image: "assets/ai_tech_stack_integration_1771910185479.png",
    },
    {
      title: "Real-World Use Cases",
      subtitle: "From Recommendations to Fraud Detection",
      type: "text",
      content: "Powering modern AI-driven products across industries.",
    },
    {
      title: "Web & App Development",
      subtitle: "Intelligent UX and Automation",
      type: "text",
      content: "Personalized dashboards and behavior prediction.",
    },
    {
      title: "Tools & Framework Ecosystem",
      subtitle: "TensorFlow, PyTorch, Cloud Services",
      type: "text",
      content: "Leveraging modern tools for development and deployment.",
    },
    {
      title: "Challenges in Production",
      subtitle: "Data, Cost, Bias, and Interpretability",
      type: "text",
      content: "Complexities in maintaining production AI systems.",
    },
    {
      title: "Best Practices",
      subtitle: "Validation, Versioning, and Monitoring",
      type: "text",
      content: "AI is not 'set and forget'.",
    },
    {
      title: "ImagiNET Ventures x AI",
      subtitle: "Building Intelligent Client Solutions",
      type: "text",
      content: "Adaptive, scalable, and future-ready offerings.",
    },
    {
      title: "Towards AGI",
      subtitle: "From Narrow AI to Multi-Domain Intelligence",
      type: "image",
      image: "assets/narrow_ai_vs_agi_1771910121238.png",
    },
    {
      title: "Why AGI Matters",
      subtitle: "Autonomous Applications and Self-Improvement",
      type: "text",
      content: "Transformation of software development workflows.",
    },
    {
      title: "The Future",
      subtitle: "AI-First Architecture and Adaptive Apps",
      type: "text",
      content: "Shifting to learned intelligence.",
    },
    {
      title: "Key Takeaways",
      subtitle: "Competitive Advantage with AI",
      type: "text",
      content: "Neural networks as foundational building blocks.",
    },
    { title: "Thank You", subtitle: "Questions?", type: "title" },
  ];

  slideContent.forEach((data, index) => {
    const s = newSlide();
    if (data.type === "title") {
      s.addText(data.title, {
        x: 0.5,
        y: 2,
        w: 9,
        fontSize: 44,
        color: index === 0 ? "FFFFFF" : c.mag,
        bold: true,
        align: "center",
        fontFace: "Outfit",
      });
      s.addText(data.subtitle, {
        x: 0.5,
        y: 3.5,
        w: 9,
        fontSize: 24,
        color: c.cyan,
        align: "center",
        fontFace: "Outfit",
      });
    } else {
      addH(s, data.title, data.subtitle);
      if (data.type === "image") {
        s.addImage({
          path: data.image,
          x: 1,
          y: 2,
          w: 8,
          h: 4.5,
        });
      } else {
        addCard(s, {
          x: 1,
          y: 2,
          w: 8,
          h: 2,
          title: "Details",
          text: data.content,
        });
      }
    }
  });

  pptx.writeFile({ fileName: `Neural_Networks_Full_Presentation.pptx` });
}
