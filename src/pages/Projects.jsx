import { useState } from "react";

// CutieShoot
import cutie1 from "../assets/cutieshoot1.png";
import cutie2 from "../assets/cutieshoot2.png";
import cutie3 from "../assets/cutieshoot3.png";
// HR Dashboard
import hr1 from "../assets/hrdashboard1.png";
import hr2 from "../assets/hrdashboard2.png";
import hr3 from "../assets/hrdashboard3.png";
// PyPlant
import pyplant1 from "../assets/pyplant1.jpeg";
import pyplant2 from "../assets/pyplant2.jpeg";
import pyplant3 from "../assets/pyplant3.jpeg";
import pyplant4 from "../assets/pyplant4.jpeg";
import pyplant5 from "../assets/pyplant5.jpeg";
// Malaria
import malaria1 from "../assets/malaria1.png";
import malaria2 from "../assets/malaria2.png";


const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openProjects, setOpenProjects] = useState([]);
  const projects = [
    {
      title: "CutieShoot",
      type: "Self Project",
      role: "Full Stack Web Developer",
      date: "Jun 2026",
      description:
        "Developed a Laravel and MySQL based online photobooth application with camera capture, filters, frames, photostrips, gallery storage, photo download, and watermark features, supported by a responsive interface.",
      link:
        "https://github.com/Graceagt/cutieshoot",
      images: [
        cutie1,
        cutie2,
        cutie3
      ],
    },

    {
      title: "HR Attrition Dashboard",
      type: "Self Project",
      role: "Data Analyst & Visualization",
      date: "Jun 2026",
      description:
        "Developed an interactive Power BI dashboard using the IBM HR Analytics dataset, featuring KPIs, department analysis, workforce insights, and interactive filters to identify employee attrition patterns and risk factors.",
      link:
        "https://drive.google.com/drive/folders/1eDe8mUJT0DlE-eIv4zgXZ-X9PhwT4sa4",
      images: [
        hr1,
        hr2,
        hr3
      ],
    },

    {
      title: "PyPlant",
      type: "Academic Project",
      role: "Mobile Developer",
      date: "Jun 2024",
      description:
        "Developed a Flutter and Firebase based plant care mobile application with a Figma designed interface, featuring plant information, articles, categories, favorites, and user account functionality.",
      link:
        "https://github.com/Graceagt/pyplant",
      images: [
        pyplant1,
        pyplant2,
        pyplant3,
        pyplant4,
        pyplant5
      ],
    },

    {
      title: "Malaria Prediction",
      type: "Bachelor's Thesis",
      role: "Machine Learning",
      date: "2026",
      description:
        "Prediction of Malaria Cases in Indonesia Using a Multi-Layer Stacking Model Based on Environmental Data.",
      link:
        "https://github.com/Graceagt/SKRIPSI",
      images: [
        malaria1,
        malaria2
      ],
    },
  ];


  const toggleProject = (index) => {
    setOpenProjects((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };


  return (
    <section className="Projects-section">
      <div className="Projects-container">
        <h1>Projects</h1>
        <div className="Projects-list">
        
          {projects.map((project, index) => (
            <div className="Project-card" key={project.title}>

              {/* HEADER */}
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

              {/* DESCRIPTION */}
              <p className="Project-description">
                {project.description}
              </p>

              {/* LINKS*/}
              <div className="Project-bottom">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Project-link"
                  >Documentation ↗
                  </a>
                  <button
                    className="Project-toggle"
                    onClick={() => toggleProject(index)}
                  >
                    Click here
                    <span>{openProjects.includes(index) ? "−" : "+"}</span>
                  </button>
              </div>

              {/* IMAGES */}
              {openProjects.includes(index) && (
                <div className="Project-images">
                  {project.images.map((image, imageIndex) => (
                    <img
                    key={imageIndex}
                    src={image}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    onClick={() => setSelectedImage(image)}
                  />
                  ))}
                </div>
              )
            }
          </div>
        )
      )
    }
  </div>
</div>
{selectedImage && (
  <div
    className="Image-modal"
      onClick={() => setSelectedImage(null)}>
      <img
        src={selectedImage}
        alt="Project preview"
        onClick={(e) => e.stopPropagation()}/>
      <button
      className="Image-close"
      onClick={() => setSelectedImage(null)}>×</button>
</div>
)}
</section>
  );
};
export default Projects;