import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return alert("Please enter a prompt!");

    setLoading(true);
    setImageUrl("");

    try {
      const res = await fetch("/api/generateImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      console.error(err);
      alert("Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🧠 AI Image Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your image prompt..."
        style={{ width: "80%", padding: "0.5rem", marginTop: "1rem" }}
      />
      <br />
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          marginTop: "1rem",
          padding: "0.7rem 1.5rem",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {imageUrl && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src={imageUrl}
            alt="Generated result"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
      )}
    </main>
  );
}
