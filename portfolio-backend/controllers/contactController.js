const Contact = require("../models/Contact");

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save to database
    await Contact.create({ name, email, message });

    // OPTIONAL: Email sending (commented to avoid failure)
    // Enable later when app password is correct

    res.status(200).json({ message: "Message saved successfully" });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { sendMessage };
