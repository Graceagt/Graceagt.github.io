const Skills = () => {
    const skillGroups = [
      {
        title: "Programming Languages",
        skills: ["Python", "SQL", "JavaScript", "Java", "R"],
      },
      {
        title: "Data & Analytics",
        skills: ["Microsoft Excel", "Power BI", "Tableau", "Jupyter Notebook"],
      },
      {
        title: "Web & Mobile Development",
        skills: [
          "HTML",
          "CSS",
          "React.js",
          "Vite",
          "Laravel",
          "Flutter",
          "WordPress",
        ],
      },
      {
        title: "Database & Tools",
        skills: ["MySQL", "Firebase", "Git", "VS Code"],
      },
      {
        title: "Design & Productivity",
        skills: [
          "Figma",
          "Bizagi Modeler",
          "Microsoft Office",
          "Google Workspace",
        ],
      },
      {
        title: "Languages",
        skills: ["Bahasa Indonesia (Native)", "English (Intermediate)"],
      },
    ];
  
    const certificates = [
      {
        title: "Google Business Intelligence",
        issuer: "Coursera",
        date: "Jul 2026",
      },
      {
        title: "Microsoft SQL Server",
        issuer: "Coursera",
        date: "Jul 2026",
      },
      {
        title: "Oracle Cloud and AI",
        issuer: "Coursera",
        date: "May 2026",
      },
      {
        title: "Google Data Analytics",
        issuer: "Coursera",
        date: "May 2026",
      },
      {
        title: "Junior Web Programmer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Dec 2025",
      },
    ];
  
    return (
      <section className="Skills-page">
  
        {/* Skills */}
        <div className="Skills-container">
  
          <h1>Skills</h1>
  
          <div className="Skills-grid">
            {skillGroups.map((group, index) => (
              <div className="Skill-card" key={index}>
                <h2>{group.title}</h2>
  
                <div className="Skill-list">
                  {group.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
        </div>
  
  
        {/* Certificates */}
        <div className="Certificates-container">
  
          <h1>Certificates</h1>
  
          <div className="Certificates-list">
            {certificates.map((certificate, index) => (
              <div className="Certificate-card" key={index}>
  
                <div>
                  <h2>{certificate.title}</h2>
                  <p>{certificate.issuer}</p>
                </div>
  
                <span>{certificate.date}</span>
  
              </div>
            ))}
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default Skills;