function Hero() {
  return (
    <section className="hero reveal" id="hero">
      <img
        src="/profile.jpg"
        alt="Chekuri Jyothi Swaroop"
        className="profile-img"
      />

      <h1>Chekuri Jyothi Swaroop</h1>
      <p>B.Tech 2nd Year | Computer Science Engineering</p>
      <p>Anil Neerukonda Institute of Technology</p>

      <a href="/resume.pdf" download className="btn-primary">
        Download Resume
      </a>
    </section>
  );
}

export default Hero;
