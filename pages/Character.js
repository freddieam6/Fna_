export default function Character() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-white">
      <h1 className="text-3xl font-bold text-gold mb-4">Character Creator 👤</h1>
      <p className="text-gray-400">Create and customize your own character.</p>
      <button className="mt-6">Generate Character</button>
    </div>
  );
}
