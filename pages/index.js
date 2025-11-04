import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
      <h1 className="text-4xl font-bold text-gold mb-8">🎨 VoiceVerse Studio</h1>

      {session ? (
        <>
          <p className="mb-4">Welcome, {session.user.name}!</p>
          <div className="flex space-x-4 mb-6">
            <Link href="/character"><button>Character Generator</button></Link>
            <Link href="/video"><button>Video Generator</button></Link>
            <Link href="/script"><button>Script Generator</button></Link>
          </div>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <p className="mb-4">Please sign in to get started</p>
          <Link href="/auth/signin"><button>Sign In</button></Link>
        </>
      )}
    </div>
  );
}
