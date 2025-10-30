import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [accessData, setAccessData] = useState(null);

  const handleAccess = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setAccessData(data);
  };

  if (accessData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">
          {accessData.accessLevel === "admin" ? "🛠️ Admin Dashboard" : "🎨 User Dashboard"}
        </h1>
        <p className="text-lg mb-6">{accessData.message}</p>

        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {accessData.tools.map((tool, index) => (
            <button
              key={index}
              className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              {tool}
            </button>
          ))}
        </div>

        <button
          onClick={() => setAccessData(null)}
          className="mt-8 text-sm text-gray-600 underline"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Access VoiceVerse</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-lg p-3 w-80 mb-4"
      />
      <button
        onClick={handleAccess}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Access Website
      </button>
    </div>
  );
          }
