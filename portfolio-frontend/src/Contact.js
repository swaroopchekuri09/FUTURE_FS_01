import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ updates state correctly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5002/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send");
      }

      // ✅ clear form properly
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setStatus("✅ Message sent successfully. Thank you!");
    } catch (err) {
      setStatus(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section reveal" id="contact">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>

        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"               // ✅ REQUIRED
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"             // ✅ REQUIRED
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"           // ✅ REQUIRED
            placeholder="Write your message..."
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="form-status">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
