import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-center">
      <h1 className="text-3xl font-bold text-gold mb-8">Welcome to VoiceVerse Studio</h1>
      <p className="text-gray-400 mb-6">Sign in to create your characters and videos</p>

      <button
        onClick={() => signIn("google")}
        className="mb-4 px-6 py-3 bg-gold rounded-lg font-semibold text-black hover:scale-105"
      >
        Continue with Google
      </button>

      <button
        onClick={() => signIn("apple")}
        className="px-6 py-3 bg-darkGold rounded-lg font-semibold text-black hover:scale-105"
      >
        Continue with Apple
      </button>
    </div>
  );
}
