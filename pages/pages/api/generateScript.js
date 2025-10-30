export default async function handler(req, res) {
  const { prompt } = req.body;

  // Simple AI-style generator (mock)
  const responses = [
    `✨ Here's a creative script idea for you: "${prompt}" turned into a thrilling story.`,
    `🎬 Your script idea "${prompt}" could start with an emotional intro, then grow into something powerful.`,
    `🪄 Based on your idea "${prompt}", here’s a short sample: Once upon a time...`
  ];

  const random = responses[Math.floor(Math.random() * responses.length)];

  return res.status(200).json({
    success: true,
    output: random
  });
}
