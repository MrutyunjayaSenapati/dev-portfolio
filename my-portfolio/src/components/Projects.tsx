type Project = {
  name: string;
  tech: string;
  link: string;
};

const projects: Project[] = [
  {
    name: "Portfolio Website",
    tech: "React + TypeScript",
    link: "https://github.com/"
  },
  {
    name: "Student Management System",
    tech: "Java / Spring Boot",
    link: "https://github.com/"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.tech}</p>
            <a href={p.link} target="_blank">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
