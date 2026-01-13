import { useEffect, useState } from "react";

function Profile() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5002/api/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend not reachable");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setError("");
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setError("Unable to connect to backend");
      });
  }, []);

  return (
    <div style={styles.container}>
      {/* PROFILE HEADER */}
      <div style={styles.header}>
        <h1>Chekuri Jyothi Swaroop</h1>
        <p>B.Tech 2nd Year – Computer Science Engineering</p>
        <p>Anil Neerukonda Institute of Technology</p>
      </div>

      {/* ERROR MESSAGE */}
      {error && <p style={styles.error}>{error}</p>}

      {/* PROJECTS SECTION */}
      <h2 style={styles.section}>My Projects</h2>

      {projects.length === 0 && !error ? (
        <p>No projects found</p>
      ) : (
        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project._id} style={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
    color: "#000",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  section: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
  },
};

export default Profile;
