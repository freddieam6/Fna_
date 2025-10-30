export default async function handler(req, res) {
  const ADMIN_EMAIL = "amoakofredrick65@gmail.com"; // your admin email
  const userEmail = req.body.email || ""; // frontend sends this

  // 🧠 Admin logic
  if (userEmail === ADMIN_EMAIL) {
    return res.status(200).json({
      success: true,
      message: "✅ Welcome, Admin! You have full and unlimited access.",
      data: {
        accessLevel: "admin",
        features: "all",
      },
    });
  }

  // 👤 Normal user logic
  return res.status(200).json({
    success: true,
    message: "👋 Welcome, Free User! You have limited access.",
    data: {
      accessLevel: "free",
      features: "basic",
    },
  });
}
