export default async function handler(req, res) {
  const ADMIN_EMAIL = "amoakofredrick65@gmail.com"; // your admin email
  const userEmail = req.body.email || "";

  if (userEmail === ADMIN_EMAIL) {
    return res.status(200).json({
      success: true,
      message: "✅ Welcome, Admin! You have full and unlimited access.",
      accessLevel: "admin",
      tools: ["Generate Script", "Generate Image", "Generate Video", "Manage Users"],
    });
  }

  return res.status(200).json({
    success: true,
    message: "👋 Welcome, Free User! You have limited access.",
    accessLevel: "free",
    tools: ["Generate Script (Basic)", "View Images Only"],
  });
}
