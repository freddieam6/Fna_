export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({ message: "Prompt is required." });
    }

    // Simulate AI image generation (replace later with real API or your own AI)
    const generatedImage = `https://placehold.co/600x400?text=${encodeURIComponent(
      prompt
    )}`;

    res.status(200).json({ imageUrl: generatedImage });
  } catch (error) {
    console.error("Image generation error:", error);
    res.status(500).json({ message: "Failed to generate image" });
  }
}
