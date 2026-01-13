function Projects() {
  return (
    <section className="container reveal" id="projects">
      <h2 className="text-center">Projects</h2>

      <div className="row mt-4">
        {/* Student Blog */}
        <div className="col-md-6">
          <div className="card project-card p-4">
            <h5>📘 Student Blog</h5>
            <p>
              A student blog website created by me to share my daily learning
              experiences as a Computer Science Engineering student.
            </p>

            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <p className="mt-3 text-muted">
              <strong>Made by:</strong> Chekuri Jyothi Swaroop
            </p>
          </div>
        </div>

        {/* Portfolio */}
        <div className="col-md-6">
          <div className="card project-card p-4">
            <h5>💼 Portfolio Website</h5>
            <p>
              My personal portfolio website built using React and Node.js
              to showcase my skills, projects, and contact information.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <p className="mt-3 text-muted">
              <strong>This Project</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
