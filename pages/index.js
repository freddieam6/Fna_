import { useState } from "react";

export default function Home() {
  const [character, setCharacter] = useState("");
  const [script, setScript] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!character || !script) {
      alert("Please enter both character name and script!");
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ character, script }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        🎙️ VoiceVerse Studio
      </h1>

      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-lg shadow-lg">
        <label className="block mb-3">
          <span className="text-gray-300 font-medium">Character Name</span>
          <input
            type="text"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            className="mt-1 w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="e.g. Neo the Space Hacker"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300 font-medium">Script / Dialogue</span>
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="mt-1 w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Type your AI script here..."
            rows={5}
          />
        </label>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate AI Image & Voice"}
        </button>

        {response && (
          <div className="mt-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-green-400 font-semibold">✅ AI Response:</p>
            <p className="text-sm text-gray-300 mt-2">
              <strong>Character:</strong> {response.character}
            </p>
            <p className="text-sm text-gray-300">
              <strong>Voice:</strong> {response.voice}
            </p>
            <p className="text-sm text-gray-300">
              <strong>Text:</strong> {response.text}
            </p>
          </div>
        )}
      </div>

      <footer className="mt-10 text-gray-500 text-sm text-center">
        Built with ❤️ by Frederick Amoako |{" "}
        <a
          href="http://bit.ly/4hzWx"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Virtual Card
        </a>
      </footer>
    </div>
  );
              }
