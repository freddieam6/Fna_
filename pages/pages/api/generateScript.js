export default async function handler(req, res) {
  const { prompt } = req.body;

  const responses = [
    `🎬 Here's a creative script idea based on "${prompt}": A hero rises from nothing to greatness.`,
    `✨ Your story "${prompt}" starts with courage, builds with conflict, and ends with triumph.`,
    `🪄 "${prompt}" — a story that blends motivation, action, and destiny.`,
  ];

  const random = responses[Math.floor(Math.random() * responses.length)];

  return res.status(200).json({
    success: true,
    output: random,
  });
}
