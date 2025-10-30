import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Basic Script Generation",
        "Basic Image Generation",
        "Limited Video Previews",
        "Community Support"
      ],
      buttonText: "Get Started",
      link: "/"
    },
    {
      name: "Pro",
      price: "$7 / month",
      features: [
        "Unlimited Script Generation",
        "HD Image Generation",
        "AI Voice Audio Output",
        "Priority Email Support"
      ],
      buttonText: "Upgrade to Pro",
      link: "/subscribe?plan=pro"
    },
    {
      name: "Business",
      price: "$12 / month",
      features: [
        "All Pro Features",
        "Fastest Generation Speeds",
        "Watermark-Free Images",
        "Video Generation Access"
      ],
      buttonText: "Go Business",
      link: "/subscribe?plan=business"
    },
    {
      name: "Expert",
      price: "$17 / month",
      features: [
        "All Business Features",
        "Full Commercial Rights",
        "Private AI Model Access",
        "24/7 Premium Support"
      ],
      buttonText: "Become Expert",
      link: "/subscribe?plan=expert"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 mt-10">Choose Your Plan</h1>
      <p className="text-gray-400 mb-10 text-center max-w-2xl">
        Upgrade anytime to unlock more power and creativity. Your admin account always stays free.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-between hover:shadow-2xl transition-all border border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-3">{plan.name}</h2>
            <p className="text-3xl font-bold mb-5 text-blue-400">{plan.price}</p>
            <ul className="text-gray-300 text-sm space-y-2 mb-5">
              {plan.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <Link
              href={plan.link}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-10 text-gray-400 text-sm">
        Built by <strong>Frederick Amoako</strong> © {new Date().getFullYear()}
      </p>
    </div>
  );
                                 }
