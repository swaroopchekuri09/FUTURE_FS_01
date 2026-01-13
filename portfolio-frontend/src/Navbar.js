import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const onScroll = () => {
      let current = "hero";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          Jyothi Swaroop
        </a>

        <button className="btn btn-outline-secondary ms-auto" onClick={toggleTheme}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>

        <ul className="navbar-nav ms-3">
          {["hero", "about", "skills", "projects", "contact"].map((id) => (
            <li className="nav-item" key={id}>
              <a
                className={`nav-link ${active === id ? "active-link" : ""}`}
                href={`#${id}`}
              >
                {id.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
