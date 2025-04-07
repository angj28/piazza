export default [
  {
    replyId: "R101",
    discussionId: "D101",
    authorId: "345", // Natasha Romanoff (TA)
    content:
      "That's a good way to think about it, Bruce. Acoustic instabilities are indeed more related to the chamber geometry and how pressure waves propagate within that space. Hydrodynamic instabilities tend to occur at the interfaces between different fluid streams, often near the injector face. Both need to be addressed in engine design, but through different approaches.",
    timestamp: "2025-02-10T16:45:12.000Z",
    updatedAt: "2025-02-10T16:45:12.000Z",
  },
  {
    replyId: "R102",
    discussionId: "D102",
    authorId: "789", // Aragorn (TA)
    content:
      "You'll need to restart your calculations using the compressible flow equations. The standard Bernoulli equation assumes constant density, which breaks down at higher velocities. For this assignment, use the isentropic relations from the beginning since you're analyzing transonic flows. Section 7.4 has a worked example that's very similar to your problem.",
    timestamp: "2025-02-13T19:20:33.000Z",
    updatedAt: "2025-02-13T19:20:33.000Z",
  },
  {
    replyId: "R103",
    discussionId: "D103",
    authorId: "123", // Tony Stark (faculty)
    content:
      "That's likely the issue, Bruce. The pressure drop across the injector affects your chamber pressure calculation, which in turn impacts specific impulse. Double-check equation 4.12 in the textbook - you need to use the effective injection pressure, not the tank pressure. Let me know if that resolves your negative values problem.",
    timestamp: "2025-02-15T14:10:25.000Z",
    updatedAt: "2025-02-15T14:10:25.000Z",
  },
  {
    replyId: "R104",
    discussionId: "D103",
    authorId: "567", // Bruce Banner (student)
    content:
      "You're right! I was using the tank pressure directly. After recalculating with the effective injection pressure, I'm getting reasonable values now. Thank you, Professor Stark!",
    timestamp: "2025-02-15T15:30:18.000Z",
    updatedAt: "2025-02-15T15:30:18.000Z",
  },
  {
    replyId: "R105",
    discussionId: "D104",
    authorId: "456", // Thor Odinson (student)
    content:
      "I'd like to join the study group as well. The boundary layer problems have been challenging for me too. See you all on Thursday at 7.",
    timestamp: "2025-02-19T10:25:42.000Z",
    updatedAt: "2025-02-19T10:25:42.000Z",
  },
  {
    replyId: "R106",
    discussionId: "D105",
    authorId: "678", // Frodo Baggins (faculty)
    content:
      "For this particular structural component, I recommend starting with element sizes around 5mm and then refining to 2mm and 1mm to demonstrate convergence. Pay particular attention to regions with expected stress concentrations - you may need local refinement in those areas. Your report should include a plot showing how your key results change with mesh refinement.",
    timestamp: "2025-02-22T13:15:50.000Z",
    updatedAt: "2025-02-22T14:20:05.000Z",
  },
];
