export const slideData = [
  {
    id: 0,
    title: "ImagiNET Shift",
    subtitle: "Episode 7",
    type: "teaser",
  },
  {
    id: 1,
    title: "NEURAL NETWORKS IN MODERN SOFTWARE TECH",
    subtitle:
      "Understnad the AI behind the scenes and what is actually getting implemented in software engineering",
    author: "Soumyadeep Chakraborty",
    company: "ImagiNET Ventures",
    type: "title",
  },
  {
    id: 2,
    title: "Evolution & AI Shift in Software",
    type: "grid",
    items: [
      {
        id: "s2-card-1",
        title: "From Static Logic",
        text: "From deterministic rule-based systems to intelligent, data-driven adaptive systems.",
      },
      {
        id: "s2-card-2",
        title: "Modern Requirements",
        text: "Pattern recognition and real-time decision-making.",
      },
      {
        id: "s2-card-3",
        title: "Software 1.0",
        text: "Explicit logic (if-else) for structured, predictable problems.",
      },
      {
        id: "s2-card-4",
        title: "Software 2.0",
        text: "Learning from data to handle extreme complexity and scale.",
      },
    ],
  },
  {
    id: 3,
    title: "Software Evolution Path",
    type: "diagram",
    image: "assets/software_evolution_diagram_1771910148064.png",
  },
  {
    id: 4,
    title: "What Is a Neural Network?",
    subtitle: "A computational model inspired by the human brain.",
    type: "grid",
    items: [
      {
        id: "s4-card-1",
        title: "Nodes & Layers",
        text: "Neurons connected by weighted edges grouped in layers.",
      },
      {
        id: "s4-card-2",
        title: "The Human Brain",
        text: "Cerebrum: Controls thought and learning. Cerebellum: Coordinates movement. Brain Stem: Manages basic life functions.",
      },
      {
        id: "s4-card-3",
        title: "Pattern Recognition",
        text: "Neural networks learn to recognize complex patterns from data, mimicking biological synapses.",
      },
    ],
  },
  {
    id: 5,
    title: "Biological vs Artificial Neural Network",
    subtitle: "Biologically inspired pattern recognition",
    type: "svg-brain",
  },
  {
    id: 6,
    title: "Core Architecture",
    type: "animated-arch",
    items: [
      {
        id: "s5-card-1",
        title: "Layers",
        text: "Input, Hidden, and Output layers extracting hierarchical features.",
      },
      {
        id: "s5-card-2",
        title: "The Brain's Control Knobs",
        text: "Weights (Priority), Bias (Baseline), and Activation (The Final Switch).",
      },
    ],
  },
  {
    id: 7,
    title: "Math of a Neuron: Is this movie worth my time?",
    subtitle: "A story about how a single neuron makes a choice",
    type: "grid",
    items: [
      {
        id: "s7-card-1",
        title: "Weights (Priority)",
        image: "assets/weights_volume.png",
        text: "The IMDB rating is 9.0! We give it a high weight (+10) because a good review is the most important factor.",
      },
      {
        id: "s7-card-2",
        title: "Bias (Your Mood)",
        image: "assets/bias_start.png",
        text: "But you're really sleepy (-7). This is your starting point—you need the movie to be 'Extra Good' to keep you awake.",
      },
      {
        id: "s7-card-3",
        title: "ReLU (The Switch)",
        image: "assets/relu_switch.png",
        text: "If total score is positive, you watch it. If negative, you sleep. It's a simple 'Stay Awake/Go to Bed' decision.",
      },
      {
        id: "s7-card-4",
        title: "Sigmoid (Confidence)",
        image: "assets/sigmoid_meter.png",
        text: "Instead of just Yes/No, it shows 92% confidence. 'I am almost certain I will love this movie.'",
      },
    ],
  },
  {
    id: 8,
    title: "How Data Flows: The Full Architecture",
    subtitle: "A deeper look at the layers and connections in a real network.",
    type: "nn-architecture",
  },
  {
    id: 9,
    title: "The Learning Loop: A Chef's Secret Recipe",
    subtitle: "How AI teaches itself through repeated trials",
    type: "grid",
    items: [
      {
        id: "s9-card-1",
        title: "1. Forward Pass (The Cooking)",
        image: "assets/chef_cook.png",
        text: "The Chef follows the current recipe (math) to create a 'Trial Dish'. It's the AI's first best guess.",
      },
      {
        id: "s9-card-2",
        title: "2. Error Calc (The Critic)",
        image: "assets/chef_critic.png",
        text: "A Critic tastes the food. 'Score: 6/10. Too much salt!' In AI, we measure how far the guess was from the truth.",
      },
      {
        id: "s9-card-3",
        title: "3. Backpropagation (The Fix)",
        image: "assets/weights_knob.png",
        text: "The Chef goes back and adjusts the recipe 'knobs' (Weights) so the next dish is a perfect 10/10.",
      },
    ],
  },
  {
    id: 10,
    title: "Deterministic vs Probabilistic Systems",
    type: "svg",
    items: [
      {
        id: "s7-card-1",
        title: "Binary Logic",
        text: "Traditional: Yes or No, Fixed Output.",
      },
      {
        id: "s7-card-2",
        title: "Confidence Scores",
        text: "Neural: 92% Spam, 8% Not Spam.",
      },
    ],
    diagrams: [{ id: "s7-diagram", type: "svg" }],
  },
  {
    id: 11,
    title: "Where AI Fits in the Tech Stack",
    type: "grid",
    items: [
      {
        id: "s8-card-1",
        title: "Full Stack AI",
        text: "Embedded across UI, API, Data, and Model layers.",
      },
      {
        id: "s8-card-2",
        title: "Frontend Layer",
        text: "AI-powered recommendations, smart search, and personalized UI.",
      },
      {
        id: "s8-card-3",
        title: "Backend Layer",
        text: "Intelligent APIs, automated decision engines, and ML pipelines.",
      },
      {
        id: "s8-card-4",
        title: "Data Layer",
        text: "Feature stores, vector databases, and real-time data streaming.",
      },
    ],
  },
  {
    id: 12,
    title: "AI-Integrated Tech Stack",
    subtitle: "Modern AI-Integrated Tech Stack: Conceptual Diagram",
    type: "diagram",
    image: "assets/ai_tech_stack_integration_1771910185479.png",
  },
  {
    id: 13,
    title: "Real-World Use Cases",
    type: "svg",
    items: [
      {
        id: "s9-card-1",
        title: "Vision & NLP",
        text: "Image recognition, Chatbots, and Sentiment analysis.",
      },
      {
        id: "s9-card-2",
        title: "Prediction",
        text: "Fraud detection and Recommendation engines.",
      },
    ],
    diagrams: [{ id: "s9-diagram", type: "svg" }],
  },
  {
    id: 14,
    title: "Web & App Development",
    type: "svg",
    items: [
      {
        id: "s10-card-1",
        title: "Smart Experiences",
        text: "Personalized dashboards, behavior prediction, and dynamic pricing.",
      },
    ],
    diagrams: [{ id: "s10-diagram", type: "svg" }],
  },
  {
    id: 15,
    title: "Tools & Ecosystem",
    type: "svg",
    items: [
      {
        id: "s11-card-1",
        title: "Frameworks",
        text: "TensorFlow, PyTorch, Keras for development.",
      },
      {
        id: "s11-card-2",
        title: "Deployment",
        text: "REST APIs, Cloud AI services, and Edge devices.",
      },
    ],
    diagrams: [{ id: "s11-diagram", type: "svg" }],
  },
  {
    id: 16,
    title: "Production Challenges",
    type: "svg",
    items: [
      {
        id: "s12-card-1",
        title: "Resources",
        text: "Compute costs and large data requirements.",
      },
      {
        id: "s12-card-2",
        title: "Risks",
        text: "Model bias and lack of interpretability.",
      },
    ],
    diagrams: [{ id: "s12-diagram", type: "svg" }],
  },
  {
    id: 17,
    title: "Best Practices",
    type: "svg",
    items: [
      {
        id: "s13-card-1",
        title: "Maintenance",
        text: "Version control, Clean data, and Monitoring pipelines.",
      },
    ],
    diagrams: [{ id: "s13-diagram", type: "svg" }],
  },
  {
    id: 18,
    title: "ImagiNET Ventures x AI",
    type: "svg",
    items: [
      {
        id: "s14-card-1",
        title: "Innovation",
        text: "Building adaptive, data-driven client solutions.",
      },
    ],
    diagrams: [{ id: "s14-diagram", type: "svg" }],
  },
  {
    id: 19,
    title: "The Next Frontier: AGI",
    subtitle: "What is AGI (Artificial General Intelligence)?",
    type: "grid",
    items: [
      {
        id: "s15-card-1",
        title: "The Full Form: A.G.I.",
        image: "assets/agi_tech.png",
        text: "Artificial General Intelligence. It is AI that can learn and perform ANY intellectual task a human can.",
      },
      {
        id: "s15-card-2",
        title: "Like a Digital Human",
        image: "assets/agi_digital_human.jpg",
        text: "Unlike current AI, AGI doesn't just do one thing (like play chess). It can write poems, code, and drive a car all at once.",
      },
      {
        id: "s15-card-3",
        title: "True Generalization",
        image: "assets/agi_problem_solving.png",
        text: "A machine with common sense, creativity, and the ability to solve problems it has never seen before.",
      },
    ],
  },
  {
    id: 20,
    title: "Narrow AI (Today) vs AGI (Future)",
    subtitle: "Understanding the fundamental shift in intelligence",
    type: "diagram",
    image: "assets/agi_vs_narrow.png",
    text: "Narrow AI (Siri, ChatGPT) is like a Specialist. AGI (The Future) is like an Omni-capable Genius.",
  },
  {
    id: 21,
    title: "Why AGI Changes Everything",
    subtitle: "The leap from automation to autonomy",
    type: "grid",
    items: [
      {
        id: "s16-card-1",
        title: "Solving Global Challenges",
        image: "assets/agi_challenges.png",
        text: "AGI can find cures for diseases and solve climate change by connecting dots across all human knowledge.",
      },
      {
        id: "s16-card-2",
        title: "24/7 Global Innovation",
        image: "assets/agi_innovation.jpg",
        text: "A system that never sleeps, constantly learning, building software, and improving the world across all domains.",
      },
    ],
  },
  {
    id: 22,
    title: "The Future with AGI",
    subtitle: "A world transformed by general intelligence",
    type: "grid",
    items: [
      {
        id: "s17-card-1",
        title: "Personal Polymaths",
        image: "assets/agi_assistant.jpg",
        text: "Everyone will have a personal AGI assistant that can do everything from legal work to advanced scientific research.",
      },
      {
        id: "s17-card-2",
        title: "Self-Evolving Economies",
        image: "assets/agi_economy.jpg",
        text: "Software and systems that write, repair, and upgrade themselves, leading to a massive boost in global productivity.",
      },
    ],
  },
  {
    id: 23,
    title: "Key Takeaways",
    type: "svg",
    items: [
      {
        id: "s18-card-1",
        title: "Summary",
        text: "AI adoption is the ultimate competitive advantage.",
      },
    ],
    diagrams: [{ id: "s18-diagram", type: "svg" }],
  },
  {
    id: 24,
    title: "Thank You",
    subtitle: "Questions?",
    type: "title",
  },
];
