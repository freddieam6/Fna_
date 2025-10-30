export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    // Using Hugging Face public demo (no API key needed)
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      throw new Error("Image generation failed.");
    }

    const imageBlob = await response.blob();
    const arrayBuffer = await imageBlob.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");

    res.status(200).json({
      success: true,
      image: `data:image/png;base64,${base64Image}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error generating image. Try again later.",
    });
  }
}
