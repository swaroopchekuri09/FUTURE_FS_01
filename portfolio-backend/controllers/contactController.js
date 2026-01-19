const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 1️⃣ Always save to DB
    await Contact.create({ name, email, message });

    // 2️⃣ Try email (DO NOT FAIL REQUEST)
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Portfolio Message",
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      });
    } catch (mailErr) {
      console.error("EMAIL ERROR (ignored):", mailErr.message);
    }

    // ✅ ALWAYS return success
    return res.json({ message: "Message sent successfully" });

  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { sendMessage };
