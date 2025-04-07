export default [
  // Bruce Wayne's responses to Rocket Propulsion Quiz
  {
    _id: "RS101",
    attemptId: "AT101",
    questionId: "QS101",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "C", // Correct answer
    answerText: null, // For fill-in-blank
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-14T10:35:20.000Z",
    updatedAt: "2025-05-14T10:35:20.000Z",
  },
  {
    _id: "RS102",
    attemptId: "AT101",
    questionId: "QS102",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-14T10:39:12.000Z",
    updatedAt: "2025-05-14T10:39:12.000Z",
  },
  {
    _id: "RS103",
    attemptId: "AT101",
    questionId: "QS103",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "true", // Incorrect answer (should be false)
    answerText: null,
    isCorrect: false,
    pointsEarned: 0,
    createdAt: "2025-05-14T10:43:45.000Z",
    updatedAt: "2025-05-14T10:43:45.000Z",
  },
  {
    _id: "RS104",
    attemptId: "AT101",
    questionId: "QS104",
    userId: "234", // Bruce Wayne
    selectedChoiceId: null,
    answerText: "specific impulse", // Correct answer
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-14T10:47:33.000Z",
    updatedAt: "2025-05-14T10:47:33.000Z",
  },

  // Thor's responses to Rocket Propulsion Quiz
  {
    _id: "RS201",
    attemptId: "AT102",
    questionId: "QS101",
    userId: "456", // Thor
    selectedChoiceId: "C", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-15T14:24:12.000Z",
    updatedAt: "2025-05-15T14:24:12.000Z",
  },
  {
    _id: "RS202",
    attemptId: "AT102",
    questionId: "QS102",
    userId: "456", // Thor
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-15T14:26:45.000Z",
    updatedAt: "2025-05-15T14:26:45.000Z",
  },
  {
    _id: "RS203",
    attemptId: "AT102",
    questionId: "QS103",
    userId: "456", // Thor
    selectedChoiceId: "false", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-15T14:29:30.000Z",
    updatedAt: "2025-05-15T14:29:30.000Z",
  },
  {
    _id: "RS204",
    attemptId: "AT102",
    questionId: "QS104",
    userId: "456", // Thor
    selectedChoiceId: null,
    answerText: "specific impulse", // Correct answer
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-15T14:32:22.000Z",
    updatedAt: "2025-05-15T14:32:22.000Z",
  },

  // Bruce Banner's responses to Rocket Propulsion Quiz
  {
    _id: "RS301",
    attemptId: "AT103",
    questionId: "QS101",
    userId: "567", // Bruce Banner
    selectedChoiceId: "B", // Incorrect answer
    answerText: null,
    isCorrect: false,
    pointsEarned: 0,
    createdAt: "2025-05-13T20:48:36.000Z",
    updatedAt: "2025-05-13T20:48:36.000Z",
  },
  {
    _id: "RS302",
    attemptId: "AT103",
    questionId: "QS102",
    userId: "567", // Bruce Banner
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-13T20:51:22.000Z",
    updatedAt: "2025-05-13T20:51:22.000Z",
  },
  {
    _id: "RS303",
    attemptId: "AT103",
    questionId: "QS103",
    userId: "567", // Bruce Banner
    selectedChoiceId: "false", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-13T20:54:05.000Z",
    updatedAt: "2025-05-13T20:54:05.000Z",
  },
  {
    _id: "RS304",
    attemptId: "AT103",
    questionId: "QS104",
    userId: "567", // Bruce Banner
    selectedChoiceId: null,
    answerText: "thrust", // Incorrect answer
    isCorrect: false,
    pointsEarned: 0,
    createdAt: "2025-05-13T20:57:45.000Z",
    updatedAt: "2025-05-13T20:57:45.000Z",
  },

  // Tony Stark's preview responses to Rocket Propulsion Quiz
  {
    _id: "RS401",
    attemptId: "AT104",
    questionId: "QS101",
    userId: "123", // Tony Stark (faculty)
    selectedChoiceId: "C", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-12T09:13:45.000Z",
    updatedAt: "2025-05-12T09:13:45.000Z",
  },
  {
    _id: "RS402",
    attemptId: "AT104",
    questionId: "QS102",
    userId: "123", // Tony Stark (faculty)
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-12T09:16:30.000Z",
    updatedAt: "2025-05-12T09:16:30.000Z",
  },
  {
    _id: "RS403",
    attemptId: "AT104",
    questionId: "QS103",
    userId: "123", // Tony Stark (faculty)
    selectedChoiceId: "false", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-12T09:19:15.000Z",
    updatedAt: "2025-05-12T09:19:15.000Z",
  },
  {
    _id: "RS404",
    attemptId: "AT104",
    questionId: "QS104",
    userId: "123", // Tony Stark (faculty)
    selectedChoiceId: null,
    answerText: "specific impulse", // Correct answer
    isCorrect: true,
    pointsEarned: 25,
    createdAt: "2025-05-12T09:24:50.000Z",
    updatedAt: "2025-05-12T09:24:50.000Z",
  },

  // Bruce Wayne's responses to Aerodynamic Principles Quiz
  {
    _id: "RS501",
    attemptId: "AT201",
    questionId: "QS301",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-16T13:07:22.000Z",
    updatedAt: "2025-05-16T13:07:22.000Z",
  },
  {
    _id: "RS502",
    attemptId: "AT201",
    questionId: "QS302",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-16T13:12:15.000Z",
    updatedAt: "2025-05-16T13:12:15.000Z",
  },
  {
    _id: "RS503",
    attemptId: "AT201",
    questionId: "QS303",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "true", // Incorrect answer
    answerText: null,
    isCorrect: false,
    pointsEarned: 0,
    createdAt: "2025-05-16T13:17:38.000Z",
    updatedAt: "2025-05-16T13:17:38.000Z",
  },
  {
    _id: "RS504",
    attemptId: "AT201",
    questionId: "QS304",
    userId: "234", // Bruce Wayne
    selectedChoiceId: null,
    answerText: "Reynolds", // Correct answer
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-16T13:22:50.000Z",
    updatedAt: "2025-05-16T13:22:50.000Z",
  },
  {
    _id: "RS505",
    attemptId: "AT201",
    questionId: "QS305",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "C", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-16T13:27:35.000Z",
    updatedAt: "2025-05-16T13:27:35.000Z",
  },

  // Legolas's responses to Aerodynamic Principles Quiz
  {
    _id: "RS601",
    attemptId: "AT202",
    questionId: "QS301",
    userId: "890", // Legolas
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-17T16:37:22.000Z",
    updatedAt: "2025-05-17T16:37:22.000Z",
  },
  {
    _id: "RS602",
    attemptId: "AT202",
    questionId: "QS302",
    userId: "890", // Legolas
    selectedChoiceId: "B", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-17T16:41:33.000Z",
    updatedAt: "2025-05-17T16:41:33.000Z",
  },
  {
    _id: "RS603",
    attemptId: "AT202",
    questionId: "QS303",
    userId: "890", // Legolas
    selectedChoiceId: "false", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-17T16:45:18.000Z",
    updatedAt: "2025-05-17T16:45:18.000Z",
  },
  {
    _id: "RS604",
    attemptId: "AT202",
    questionId: "QS304",
    userId: "890", // Legolas
    selectedChoiceId: null,
    answerText: "Reynolds", // Correct answer
    isCorrect: true,
    pointsEarned: 15,
    createdAt: "2025-05-17T16:49:45.000Z",
    updatedAt: "2025-05-17T16:49:45.000Z",
  },
  {
    _id: "RS605",
    attemptId: "AT202",
    questionId: "QS305",
    userId: "890", // Legolas
    selectedChoiceId: "D", // Incorrect answer
    answerText: null,
    isCorrect: false,
    pointsEarned: 0,
    createdAt: "2025-05-17T16:54:12.000Z",
    updatedAt: "2025-05-17T16:54:12.000Z",
  },

  // Bruce Wayne's responses to Spacecraft Design Principles Practice Quiz (1st attempt)
  {
    _id: "RS701",
    attemptId: "AT301",
    questionId: "QS401",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "D", // Incorrect answer
    answerText: null,
    isCorrect: false,
    pointsEarned: 0, // No points, practice quiz
    createdAt: "2025-05-05T19:24:30.000Z",
    updatedAt: "2025-05-05T19:24:30.000Z",
  },
  {
    _id: "RS702",
    attemptId: "AT301",
    questionId: "QS402",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "true", // Incorrect answer
    answerText: null,
    isCorrect: false,
    pointsEarned: 0, // No points, practice quiz
    createdAt: "2025-05-05T19:25:45.000Z",
    updatedAt: "2025-05-05T19:25:45.000Z",
  },
  {
    _id: "RS703",
    attemptId: "AT301",
    questionId: "QS403",
    userId: "234", // Bruce Wayne
    selectedChoiceId: null,
    answerText: "position", // Incorrect answer
    isCorrect: false,
    pointsEarned: 0, // No points, practice quiz
    createdAt: "2025-05-05T19:27:22.000Z",
    updatedAt: "2025-05-05T19:27:22.000Z",
  },

  // Bruce Wayne's responses to Spacecraft Design Principles Practice Quiz (2nd attempt)
  {
    _id: "RS801",
    attemptId: "AT302",
    questionId: "QS401",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "C", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 0, // No points, practice quiz
    createdAt: "2025-05-08T12:12:15.000Z",
    updatedAt: "2025-05-08T12:12:15.000Z",
  },
  {
    _id: "RS802",
    attemptId: "AT302",
    questionId: "QS402",
    userId: "234", // Bruce Wayne
    selectedChoiceId: "false", // Correct answer
    answerText: null,
    isCorrect: true,
    pointsEarned: 0, // No points, practice quiz
    createdAt: "2025-05-08T12:13:40.000Z",
    updatedAt: "2025-05-08T12:13:40.000Z",
  },
  {
    _id: "RS803",
    attemptId: "AT302",
    questionId: "QS403",
    userId: "234", // Bruce Wayne
    selectedChoiceId: null,
    answerText: "attitude", // Correct answer
    isCorrect: true,
    pointsEarned: 0, // No points, practice quiz
    createdAt: "2025-05-08T12:14:55.000Z",
    updatedAt: "2025-05-08T12:14:55.000Z",
  },
];
