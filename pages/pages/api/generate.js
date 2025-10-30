export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { script, character } = req.body;

    // Example backend logic
    // Later, we’ll connect this to an AI API (like OpenAI, ElevenLabs, or Replicate)
    const aiResponse = {
      character,
      voice: `Generated voice for ${character}`,
      text: `Processed script: ${script}`,
    };

    return res.status(200).json(aiResponse);
  } catch (error) {
    console.error('Error in API:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
