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
    <main style={{ padding: "2rem", textAlign: "center", fontFamily: "Arial" }}>
      {/* Header */}
      <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🧠 AI Image Generator
      </h1>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Create stunning AI images instantly. Just type your idea and hit generate!
      </p>

      {/* Input Section */}
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your image prompt..."
        style={{
          width: "80%",
          padding: "0.7rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
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

      {/* Result */}
      {imageUrl && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src={imageUrl}
            alt="Generated result"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      )}

      {/* Pricing Section */}
      <section style={{ marginTop: "4rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
          💎 Pricing Plans
        </h2>
        <p style={{ color: "#666", marginBottom: "2rem" }}>
          Choose the plan that fits your creative journey.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Pro Plan */}
          <div
            style={{
              background: "#f0f8ff",
              padding: "1.5rem",
              borderRadius: "12px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3>🚀 Pro</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>$7/month</p>
            <ul style={{ textAlign: "left" }}>
              <li>✅ 100 image generations/month</li>
              <li>✅ Standard quality</li>
              <li>✅ Basic customer support</li>
            </ul>
            <button
              style={{
                marginTop: "1rem",
                background: "#0070f3",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Choose Pro
            </button>
          </div>

          {/* Business Plan */}
          <div
            style={{
              background: "#e6ffe6",
              padding: "1.5rem",
              borderRadius: "12px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3>💼 Business</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>$12/month</p>
            <ul style={{ textAlign: "left" }}>
              <li>✅ 500 image generations/month</li>
              <li>✅ HD quality</li>
              <li>✅ Priority support</li>
            </ul>
            <button
              style={{
                marginTop: "1rem",
                background: "#28a745",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Choose Business
            </button>
          </div>

          {/* Expert Plan */}
          <div
            style={{
              background: "#fff5e6",
              padding: "1.5rem",
              borderRadius: "12px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3>👑 Expert</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>$17/month</p>
            <ul style={{ textAlign: "left" }}>
              <li>✅ Unlimited generations</li>
              <li>✅ Ultra HD quality</li>
              <li>✅ 24/7 VIP support</li>
            </ul>
            <button
              style={{
                marginTop: "1rem",
                background: "#ff8c00",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Choose Expert
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
