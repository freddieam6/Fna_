<div className="grid grid-cols-1 gap-4 w-full max-w-md">
  {accessData.tools.map((tool, index) => (
    <button
      key={index}
      onClick={async () => {
        if (tool.includes("Script")) {
          const promptInput = prompt("Enter your script idea:");
          if (!promptInput) return alert("Please enter something!");
          const res = await fetch("/api/generateScript", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: promptInput }),
          });
          const data = await res.json();
          alert(data.output);
        } 
        else if (tool.includes("Image")) {
          const promptInput = prompt("Enter image idea:");
          if (!promptInput) return alert("Please enter something!");
          const res = await fetch("/api/generateImage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: promptInput }),
          });
          const data = await res.json();
          if (data.success) {
            const img = document.createElement("img");
            img.src = data.image;
            img.alt = "Generated Image";
            img.style.maxWidth = "100%";
            document.body.appendChild(img);
          } else {
            alert(data.message);
          }
        } 
        else if (tool.includes("Video")) {
          const promptInput = prompt("Enter video idea:");
          if (!promptInput) return alert("Please enter something!");
          const res = await fetch("/api/generateVideo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: promptInput }),
          });
          const data = await res.json();
          alert(data.videoDescription);
        } 
        else {
          alert(`⚙️ The "${tool}" feature is under development.`);
        }
      }}
      className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
    >
      {tool}
    </button>
  ))}
</div>
