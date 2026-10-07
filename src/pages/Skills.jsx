import { useState } from "react";

// Certificate images
import googleBI from "../assets/googlebi.jpeg";
import sqlServer from "../assets/microsoftsql.jpeg";
import oracleAI from "../assets/oracle.jpeg";
import googleData from "../assets/googledata.jpeg";
import juniorWeb from "../assets/bnspweb.jpeg";

const Skills = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [openCertificates, setOpenCertificates] = useState([]);

  const toggleCertificate = (index) => {
    setOpenCertificates((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "SQL",
        "JavaScript",
        "Java",
        "R",
      ],
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
      image: googleBI,
    },
    {
      title: "Microsoft SQL Server",
      issuer: "Coursera",
      date: "Jul 2026",
      image: sqlServer,
    },
    {
      title: "Oracle Cloud and AI",
      issuer: "Coursera",
      date: "May 2026",
      image: oracleAI,
    },
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      date: "May 2026",
      image: googleData,
    },
    {
      title: "Junior Web Programmer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "Dec 2025",
      image: juniorWeb,
    },
  ];

  return (
    <section id="Skills" className="Skills-section">
      <div className="Skills-container">

        {/* SKILLS TITLE*/}

        <div className="Skills-title">
          <h1>Skills</h1>
        </div>


        {/*SKILLS*/}

        <div className="Skills-list">
          {skillGroups.map((group, index) => (
            <div
              className="Skill-card"
              key={group.title}
            >
              <div className="Skill-header">
                <div className="Skill-info">
                  <span className="Skill-number">
                    0{index + 1}
                  </span>
                  <h2>
                    {group.title}
                  </h2>
                </div>
              </div>


              <div className="Skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
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
            {certificates.map((certificate, index) => (
              <div
                className="Certificate-card"
                key={certificate.title}>

                {/* Certificate Header */}
                <div className="Certificate-header">
                  <div className="Certificate-content">
                    <h3>
                      {certificate.title}
                    </h3>
                    <p>
                      {certificate.issuer}
                    </p>
                  </div>


                  <div className="Certificate-right">
                    <span className="Certificate-date">
                      {certificate.date}
                    </span>
                    <button
                      className="Certificate-toggle"
                      onClick={() =>
                        toggleCertificate(index)
                      }>
                      Click here

                      <span>
                        {openCertificates.includes(index)
                          ? "−"
                          : "+"
                        }
                      </span>
                    </button>
                  </div>
                </div>

                {/* Certificate Image */}
                {openCertificates.includes(index) && (
                  <div className="Certificate-image">
                    <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    onClick={() => setSelectedCertificate(certificate.image)}
                  />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedCertificate && (
        <div
          className="Certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <img
            src={selectedCertificate}
            alt="Certificate preview"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="Certificate-close"
            onClick={() => setSelectedCertificate(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Skills;