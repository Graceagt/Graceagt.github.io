
const Projects = () => {
  const projects = [
    {
      title: "CutieShoot",
      type: "Self Project",
      role: "Full Stack Web Developer",
      date: "Jun 2026",
      description:
        "Developed a Laravel and MySQL based online photobooth application with camera capture, filters, frames, photostrips, gallery storage, photo download, and watermark features, supported by a responsive interface.",
      links: {
        github: "https://github.com/yourusername/cutieshoot",
        drive: "https://drive.google.com/your-link",
      },
    },

    {
      title: "HR Attrition Dashboard",
      type: "Self Project",
      role: "Data Analyst & Visualization",
      date: "Jun 2026",
      description:
        "Developed an interactive Power BI dashboard using the IBM HR Analytics dataset, featuring KPIs, department analysis, workforce insights, and interactive filters to identify employee attrition patterns and risk factors.",
      links: {
        github: "https://github.com/yourusername/hr-attrition-dashboard",
        drive: "https://drive.google.com/your-link",
      },
    },

    {
      title: "PyPlant",
      type: "Academic Project",
      role: "Mobile Developer",
      date: "Jun 2024",
      description:
        "Developed a Flutter and Firebase based plant care mobile application with a Figma designed interface, featuring plant information, articles, categories, favorites, and user account functionality.",
      links: {
        github: "https://github.com/yourusername/pyplant",
        drive: "https://drive.google.com/your-link",
      },
    },

    {
      title: "Malaria Prediction",
      type: "Bachelor's Thesis",
      role: "Machine Learning",
      date: "2026",
      description:
        "Prediction of Malaria Cases in Indonesia Using a Multi-Layer Stacking Model Based on Environmental Data.",
      links: {
        github: "https://github.com/yourusername/malaria-prediction",
        drive: "https://drive.google.com/your-link",
      },
    },
  ];

  return (
    <section className="Projects-section">
      <div className="Projects-container">

        <h1>Projects</h1>

        <div className="Projects-list">
          {projects.map((project, index) => (
            <div className="Project-card" key={index}>

              <div className="Project-header">
                <div>
                  <h2>{project.title}</h2>

                  <p className="Project-type">
                    {project.type} | {project.role}
                  </p>
                </div>

                <span className="Project-date">
                  {project.date}
                </span>
              </div>

              <p className="Project-description">
                {project.description}
              </p>

              <div className="Project-links">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.links.drive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Drive
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;