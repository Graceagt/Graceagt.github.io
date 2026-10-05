const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript", "Java", "R"],
    },
    {
      title: "Data & Analytics",
      skills: [
        "Microsoft Excel",
        "Power BI",
        "Tableau",
        "Jupyter Notebook",
      ],
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
      skills: [
        "MySQL",
        "Firebase",
        "Git",
        "VS Code",
      ],
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
      skills: [
        "Bahasa Indonesia (Native)",
        "English (Intermediate)",
      ],
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
    <section id="Skills" className="Skills-section">

      <div className="Skills-container">

        {/* SKILLS TITLE */}
        <div className="Skills-title">
          <h1>Skills</h1>
          <p>Tools and technologies I work with.</p>
        </div>


        {/* SKILLS LIST */}
        <div className="Skills-list">

          {skillGroups.map((group, index) => (
            <div className="Skill-item" key={group.title}>

              <div className="Skill-number">
                0{index + 1}
              </div>

              <div className="Skill-content">

                <h2>{group.title}</h2>

                <div className="Skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* CERTIFICATES */}
        <div className="Certificates-section">

          <div className="Certificates-title">
            <h2>Certificates</h2>
          </div>

          <div className="Certificates-list">

            {certificates.map((certificate) => (
              <div
                className="Certificate-item"
                key={certificate.title}
              >

                <div className="Certificate-content">

                  <h3>{certificate.title}</h3>

                  <p>{certificate.issuer}</p>

                </div>

                <span className="Certificate-date">
                  {certificate.date}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;