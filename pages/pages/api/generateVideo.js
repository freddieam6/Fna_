export default async function handler(req, res) {
  const { prompt } = req.body;

  // Free mock version (no heavy GPU needed)
  const examples = [
    "🎞️ Short motivational video with bold text transitions and upbeat music.",
    "🔥 Futuristic AI-style trailer with neon visuals and inspiring quotes.",
    "🌅 Calm cinematic video with nature clips and narration.",
  ];

  const random = examples[Math.floor(Math.random() * examples.length)];

  res.status(200).json({
    success: true,
    videoDescription: `Generated preview for "${prompt}": ${random}`,
  });
}
