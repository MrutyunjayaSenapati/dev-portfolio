const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h1>Hello, I am Jay</h1>
      <h2>MCA Graduate | Developer</h2>
      <p>I build modern and responsive web applications.</p>
      <button onClick={() => window.location.href = "#projects"}>
        View My Work
      </button>
    </section>
  );
};

export default Hero;
