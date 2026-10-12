import { LabExperiment } from '../types';

export const labExperimentsData: LabExperiment[] = [
  {
    id: "drone-telemetry-waypoint-sim",
    title: "Autonomous Drone Waypoint & Telemetry Simulator",
    category: "Drone Simulation",
    objective: "Simulate flight trajectory paths, waypoint navigation math, ground speed vectors, and battery drain models in a software environment.",
    description: "An interactive computational exploration into drone navigation kinematics. The simulation models multi-point GPS coordinates, calculates great-circle or Cartesian waypoint distances, computes real-time heading angles, and simulates battery power consumption based on ascent velocity and wind resistance.",
    tools: ["Python", "NumPy", "Mathematical Kinematics", "Canvas / Vector Rendering", "State Simulation"],
    status: "Interactive Simulator",
    image: "/src/assets/images/drone_telemetry_simulation_1791766951874.jpg",
    hasInteractiveDemo: true,
    interactiveDemoType: "drone-sim",
    findingsOrOutcomes: "Demonstrated accurate Euclidean & Haversine distance computations, heading calculation within ±0.5°, and simulated battery depletion curves matching standard 4S LiPo discharge profiles.",
    lessonsLearned: "Flight mission stability depends heavily on smoothing waypoint transitions and modeling non-linear battery degradation rather than assuming uniform linear draw.",
    explorationNotice: "Simulation Experiment: Implemented mathematically in software. Physical drone hardware flight testing is a planned future phase."
  },
  {
    id: "agri-decision-engine",
    title: "Sahelian Agro-Climatic Decision Support Engine",
    category: "Artificial Intelligence",
    objective: "Model soil nutrient profiles (N, P, K, pH) and rainfall variance to generate deterministic risk scores and planting advisories for Gambian agriculture.",
    description: "An agronomic rules engine and predictive advisory tool designed to evaluate soil chemistry compatibility for staple West African crops (Groundnut, Maize, Rice, Cassava, and Chia). Analyzes simulated soil and weather inputs to output crop suitability indices and climate risk warnings.",
    tools: ["Python", "Data Preprocessing", "Agronomic Heuristics", "Statistical Modeling"],
    status: "Interactive Simulator",
    image: "/src/assets/images/ai_agriculture_decision_support_1791766940178.jpg",
    hasInteractiveDemo: true,
    interactiveDemoType: "agri-decision",
    findingsOrOutcomes: "Successfully codified tolerance matrices for 5 key crops across 4 Gambian soil zones, correctly penalizing water-intensive varieties during delayed rainy seasons.",
    lessonsLearned: "Agricultural decision systems must provide transparent, explainable recommendations rather than opaque black-box outputs so local farmers and extension workers can trust the advice.",
    explorationNotice: "Decision Support Prototype: Designed as an advisory tool to aid decision-making, not a substitute for on-the-ground agronomist inspection."
  },
  {
    id: "leaf-disease-cv-pipeline",
    title: "Computer Vision Crop Health Inspection (Exploratory)",
    category: "Computer Vision",
    objective: "Investigate convolutional image preprocessing, color thresholding, and morphological filtering for early detection of crop leaf lesions.",
    description: "Exploration into image segmentation techniques for identifying early chlorosis and blight spots on agricultural leaves. Evaluates preprocessing pipelines including RGB to HSV color conversion, Gaussian blurring, Otsu thresholding, and contour extraction for lesion area calculation.",
    tools: ["Python", "OpenCV Concepts", "NumPy", "Image Processing Pipelines"],
    status: "Exploration & Research",
    image: "/src/assets/images/chialink_agritech_platform_1791766929479.jpg",
    hasInteractiveDemo: false,
    findingsOrOutcomes: "Color-space transformation to HSV significantly improves lesion contour separation compared to raw RGB thresholding under variable outdoor sun glare.",
    lessonsLearned: "Real-world mobile phone camera images suffer from erratic lighting and shadow cast by plant canopies, requiring adaptive thresholding or normalization before classification.",
    explorationNotice: "Active Research Area: Algorithmic prototyping on sample datasets. Not yet deployed as an automated field diagnostic system."
  },
  {
    id: "robotics-kinematics-exploration",
    title: "Robotics & Sensor Telemetry Integration (Study & Prototyping)",
    category: "Robotics & Automation",
    objective: "Understand sensor polling frequencies, I2C/SPI bus communications, and inertial measurement unit (IMU) telemetry processing.",
    description: "A foundational exploration of how microcontrollers and companion computers interface with accelerometers, gyroscopes, and distance sensors. Focuses on sensor fusion concepts such as complementary filtering to eliminate drift in orientation tracking.",
    tools: ["Python", "C++ Fundamentals", "IMU Data Simulation", "Complementary Filtering"],
    status: "Exploration & Research",
    hasInteractiveDemo: false,
    findingsOrOutcomes: "Complementary filter implementations provide a lightweight, computationally efficient alternative to Kalman filters for real-time tilt angle estimation in low-power environments.",
    lessonsLearned: "Sensor noise and high vibrational harmonics from motors create significant signal jitter that must be dampened with low-pass algorithmic filtering.",
    explorationNotice: "Study & Foundations Area: Exploring embedded software concepts and telemetry handling as preparation for physical robotic builds."
  }
];
