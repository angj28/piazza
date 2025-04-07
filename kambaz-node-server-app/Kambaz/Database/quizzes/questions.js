export default [
  // Multiple Choice Questions for Rocket Propulsion Quiz
  {
    _id: "QS101",
    quizId: "Q101",
    title: "Newton's Third Law",
    questionType: "multiple-choice",
    points: 25,
    questionText:
      "Which of Newton's laws is most directly related to how rockets generate thrust?",
    choices: [
      { id: "A", text: "First Law (Law of Inertia)", isCorrect: false },
      { id: "B", text: "Second Law (F = ma)", isCorrect: false },
      { id: "C", text: "Third Law (Action and Reaction)", isCorrect: true },
      { id: "D", text: "Law of Universal Gravitation", isCorrect: false },
    ],
    orderInQuiz: 0,
    createdAt: "2025-05-01T14:25:18.000Z",
    updatedAt: "2025-05-01T14:25:18.000Z",
  },
  {
    _id: "QS102",
    quizId: "Q101",
    title: "Rocket Equation",
    questionType: "multiple-choice",
    points: 25,
    questionText:
      "The Tsiolkovsky rocket equation relates which of the following parameters?",
    choices: [
      { id: "A", text: "Thrust and temperature", isCorrect: false },
      { id: "B", text: "Mass ratio and exhaust velocity", isCorrect: true },
      { id: "C", text: "Fuel density and burn rate", isCorrect: false },
      {
        id: "D",
        text: "Chamber pressure and nozzle diameter",
        isCorrect: false,
      },
    ],
    orderInQuiz: 1,
    createdAt: "2025-05-01T14:26:33.000Z",
    updatedAt: "2025-05-01T14:26:33.000Z",
  },
  {
    _id: "QS103",
    quizId: "Q101",
    title: "Engine Types",
    questionType: "true-false",
    points: 25,
    questionText:
      "Solid rocket motors can be throttled or shut down after ignition.",
    isTrue: false, // The correct answer is "False"
    orderInQuiz: 2,
    createdAt: "2025-05-01T14:27:45.000Z",
    updatedAt: "2025-05-01T14:27:45.000Z",
  },
  {
    _id: "QS104",
    quizId: "Q101",
    title: "Specific Impulse",
    questionType: "fill-in-blank",
    points: 25,
    questionText:
      "The efficiency of a rocket engine is commonly measured using a parameter called __________.",
    correctAnswers: ["specific impulse", "Isp", "specific-impulse"],
    caseSensitive: false,
    orderInQuiz: 3,
    createdAt: "2025-05-01T14:29:02.000Z",
    updatedAt: "2025-05-01T14:29:02.000Z",
  },

  // Multiple Choice Questions for Combustion Processes Quiz
  {
    _id: "QS201",
    quizId: "Q102",
    title: "Combustion Chamber",
    questionType: "multiple-choice",
    points: 10,
    questionText:
      "What is the primary function of a rocket engine's combustion chamber?",
    choices: [
      { id: "A", text: "To cool the engine components", isCorrect: false },
      { id: "B", text: "To mix and ignite the propellants", isCorrect: true },
      {
        id: "C",
        text: "To store the propellants before ignition",
        isCorrect: false,
      },
      {
        id: "D",
        text: "To filter contaminants from the propellants",
        isCorrect: false,
      },
    ],
    orderInQuiz: 0,
    createdAt: "2025-05-05T09:15:11.000Z",
    updatedAt: "2025-05-05T09:15:11.000Z",
  },
  {
    _id: "QS202",
    quizId: "Q102",
    title: "Propellant Types",
    questionType: "multiple-choice",
    points: 10,
    questionText:
      "Which of the following is NOT a common propellant combination used in liquid rocket engines?",
    choices: [
      { id: "A", text: "Liquid oxygen and kerosene", isCorrect: false },
      { id: "B", text: "Liquid oxygen and liquid hydrogen", isCorrect: false },
      { id: "C", text: "Nitrogen tetroxide and hydrazine", isCorrect: false },
      { id: "D", text: "Liquid methane and liquid nitrogen", isCorrect: true },
    ],
    orderInQuiz: 1,
    createdAt: "2025-05-05T09:16:22.000Z",
    updatedAt: "2025-05-05T09:16:22.000Z",
  },
  {
    _id: "QS203",
    quizId: "Q102",
    title: "Combustion Pressure",
    questionType: "true-false",
    points: 15,
    questionText:
      "Higher combustion chamber pressure generally results in better engine performance.",
    isTrue: true, // The correct answer is "True"
    orderInQuiz: 2,
    createdAt: "2025-05-05T09:17:35.000Z",
    updatedAt: "2025-05-05T09:17:35.000Z",
  },
  {
    _id: "QS204",
    quizId: "Q102",
    title: "Combustion Efficiency",
    questionType: "fill-in-blank",
    points: 15,
    questionText:
      "The ratio of actual energy released to the theoretical maximum energy available from the propellants is known as combustion __________.",
    correctAnswers: ["efficiency", "effectiveness"],
    caseSensitive: false,
    orderInQuiz: 3,
    createdAt: "2025-05-05T09:18:47.000Z",
    updatedAt: "2025-05-05T09:18:47.000Z",
  },

  // Multiple Choice Questions for Aerodynamic Principles Quiz
  {
    _id: "QS301",
    quizId: "Q201",
    title: "Boundary Layer",
    questionType: "multiple-choice",
    points: 15,
    questionText: "What is the boundary layer in aerodynamics?",
    choices: [
      {
        id: "A",
        text: "The layer of air between two aircraft flying in formation",
        isCorrect: false,
      },
      {
        id: "B",
        text: "The thin layer of air adjacent to a surface where viscous effects are significant",
        isCorrect: true,
      },
      {
        id: "C",
        text: "The limit of how high an aircraft can fly in the atmosphere",
        isCorrect: false,
      },
      {
        id: "D",
        text: "The division between laminar and turbulent flow",
        isCorrect: false,
      },
    ],
    orderInQuiz: 0,
    createdAt: "2025-05-07T16:48:30.000Z",
    updatedAt: "2025-05-07T16:48:30.000Z",
  },
  {
    _id: "QS302",
    quizId: "Q201",
    title: "Lift Generation",
    questionType: "multiple-choice",
    points: 15,
    questionText:
      "According to modern aerodynamic theory, what primarily generates lift on an airfoil?",
    choices: [
      {
        id: "A",
        text: "Equal transit time of air over and under the wing",
        isCorrect: false,
      },
      {
        id: "B",
        text: "Pressure difference resulting from airflow curvature around the airfoil",
        isCorrect: true,
      },
      {
        id: "C",
        text: "Friction between the air and the wing surface",
        isCorrect: false,
      },
      {
        id: "D",
        text: "The weight of the air displaced by the wing",
        isCorrect: false,
      },
    ],
    orderInQuiz: 1,
    createdAt: "2025-05-07T16:50:22.000Z",
    updatedAt: "2025-05-07T16:50:22.000Z",
  },
  {
    _id: "QS303",
    quizId: "Q201",
    title: "Supersonic Flow",
    questionType: "true-false",
    points: 15,
    questionText:
      "Shock waves only form at exactly Mach 1 (the speed of sound).",
    isTrue: false, // The correct answer is "False"
    orderInQuiz: 2,
    createdAt: "2025-05-07T16:51:48.000Z",
    updatedAt: "2025-05-07T16:51:48.000Z",
  },
  {
    _id: "QS304",
    quizId: "Q201",
    title: "Reynolds Number",
    questionType: "fill-in-blank",
    points: 15,
    questionText:
      "The dimensionless number that represents the ratio of inertial forces to viscous forces in a fluid is called the __________ number.",
    correctAnswers: ["Reynolds", "Reynolds'"],
    caseSensitive: false,
    orderInQuiz: 3,
    createdAt: "2025-05-07T16:53:12.000Z",
    updatedAt: "2025-05-07T16:53:12.000Z",
  },
  {
    _id: "QS305",
    quizId: "Q201",
    title: "Drag Types",
    questionType: "multiple-choice",
    points: 15,
    questionText:
      "Which type of drag increases most significantly as an aircraft approaches the speed of sound?",
    choices: [
      { id: "A", text: "Skin friction drag", isCorrect: false },
      { id: "B", text: "Induced drag", isCorrect: false },
      { id: "C", text: "Wave drag", isCorrect: true },
      { id: "D", text: "Parasitic drag", isCorrect: false },
    ],
    orderInQuiz: 4,
    createdAt: "2025-05-07T16:54:55.000Z",
    updatedAt: "2025-05-07T16:54:55.000Z",
  },

  // Questions for Spacecraft Design Principles Practice Quiz
  {
    _id: "QS401",
    quizId: "Q301",
    title: "Spacecraft Structure",
    questionType: "multiple-choice",
    points: 0, // Practice quiz, no points
    questionText:
      "What is typically the largest contributor to a spacecraft's mass budget?",
    choices: [
      { id: "A", text: "Propulsion system", isCorrect: false },
      { id: "B", text: "Power system", isCorrect: false },
      { id: "C", text: "Structure", isCorrect: true },
      { id: "D", text: "Payload", isCorrect: false },
    ],
    orderInQuiz: 0,
    createdAt: "2025-04-28T10:20:05.000Z",
    updatedAt: "2025-04-28T10:20:05.000Z",
  },
  {
    _id: "QS402",
    quizId: "Q301",
    title: "Thermal Control",
    questionType: "true-false",
    points: 0, // Practice quiz, no points
    questionText:
      "All spacecraft require active thermal control systems to maintain appropriate temperatures.",
    isTrue: false, // The correct answer is "False"
    orderInQuiz: 1,
    createdAt: "2025-04-28T10:21:33.000Z",
    updatedAt: "2025-04-28T10:21:33.000Z",
  },
  {
    _id: "QS403",
    quizId: "Q301",
    title: "Attitude Control",
    questionType: "fill-in-blank",
    points: 0, // Practice quiz, no points
    questionText:
      "The system responsible for controlling a spacecraft's orientation in space is called the __________ control system.",
    correctAnswers: ["attitude", "orientation"],
    caseSensitive: false,
    orderInQuiz: 2,
    createdAt: "2025-04-28T10:22:45.000Z",
    updatedAt: "2025-04-28T10:22:45.000Z",
  },
];
