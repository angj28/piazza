export default [
  {
    answerId: "ANS101",
    postId: "P101",
    authorId: "345", // Natasha Romanoff (TA)
    content:
      "Great question, Bruce. Acoustic instability is driven by pressure waves within the combustion chamber that can couple with the natural acoustic modes of the chamber. This creates resonance that amplifies the instability. Hydrodynamic instability, on the other hand, relates to the fluid dynamic behavior of the propellants, such as Kelvin-Helmholtz instabilities at the interface between fuel and oxidizer streams. I'd recommend reviewing the simulation we did in Lab 2, which demonstrates both types clearly.",
    timestamp: "2025-02-10T15:40:22.000Z",
  },
  {
    answerId: "ANS102",
    postId: "P103",
    authorId: "789", // Aragorn (TA)
    content:
      "Thor, for high-velocity flows where compressibility becomes significant, you need to use the modified version of Bernoulli's equation that accounts for density changes. Look at chapter 7.3 in the textbook where they introduce the compressible flow equations. For your assignment, you'll want to use the isentropic flow relations when the Mach number exceeds approximately 0.3. Let me know if you need further clarification.",
    timestamp: "2025-02-13T17:30:45.000Z",
  },
  {
    answerId: "ANS103",
    postId: "P104",
    authorId: "123", // Tony Stark (faculty)
    content:
      "Bruce, negative specific impulse values typically indicate an error in how you're accounting for the pressure terms. Double-check your reference pressure – it should be the ambient pressure at the altitude specified in the problem. Also, verify that you're using consistent units throughout your calculation. If you're still having trouble, bring your work to my office hours tomorrow and we can walk through it.",
    timestamp: "2025-02-15T12:15:07.000Z",
  },
  {
    answerId: "ANS104",
    postId: "P107",
    authorId: "234", // Bruce Wayne (student)
    content:
      "Legolas, I'd be interested in joining a study group. I've been working through those chapters as well and found some of the boundary layer problems particularly challenging. Perhaps we could meet in the engineering library this Thursday evening?",
    timestamp: "2025-02-18T20:05:33.000Z",
  },
  {
    answerId: "ANS105",
    postId: "P107",
    authorId: "123", // Tony Stark (student in this course)
    content:
      "While study groups are excellent for collaboration, make sure you're all working through the problems independently first. The quiz will focus heavily on drag calculations and boundary layer analysis, so those should be priority areas for your review.",
    timestamp: "2025-02-19T08:22:18.000Z",
  },
  {
    answerId: "ANS106",
    postId: "P109",
    authorId: "678", // Frodo Baggins (faculty)
    content:
      "Bruce, for this assignment, you should definitely use finite element analysis. The complexity of the structural component requires numerical methods to properly evaluate stress distributions. Make sure to document your mesh sensitivity analysis and boundary condition assumptions in your report.",
    timestamp: "2025-02-22T11:40:15.000Z",
  },
];
