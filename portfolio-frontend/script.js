const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Sending...";
  status.style.color = "#6366f1";

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  try {
    const res = await fetch("http://localhost:5003/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.error);

    status.textContent = "✅ Message sent successfully!";
    status.style.color = "#22c55e";
    form.reset();
  } catch (err) {
    status.textContent = "❌ Failed to send message";
    status.style.color = "#ef4444";
  }
});
