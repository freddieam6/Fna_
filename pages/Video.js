import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/auth/signin", permanent: false } };
  }
  return { props: { session } };
}

export default function Video({ session }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-white">
      <h1 className="text-3xl font-bold text-gold mb-4">Video Generator 🎬</h1>
      <p>Welcome, {session.user.name}!</p>
      <p className="mt-4 text-gray-400">
        Free users can generate up to <span className="text-gold">8 seconds</span> per video.
      </p>
      <button className="mt-6">Start Generating</button>
    </div>
  );
}
