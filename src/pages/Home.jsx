import fotoProfil from '../assets/Foto.jpg'; 

const Home = () => {
  return (
    <main>
      {/* INTRO */}
      <section id="Intro" className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h1>Hello, my name is Grace </h1>           
            <div className="social-links">
              <a href="https://www.linkedin.com/in/graceagtampubolon/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              aria-label="LinkedIn">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>

              <a href="https://github.com/Graceagt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              aria-label="GitHub">
              <i className="fab fa-github" aria-hidden="true"></i>
              </a>

              <a href="#resume" 
              className="btn-primary" 
              aria-label="Resume">
              <i className="fas fa-file-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          
          <div className="intro-image">
            <img src={fotoProfil} alt="Profile" />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="AboutMe" className="AboutMe-section">
        <div className="AboutMe-container">
          <div className="AboutMe-text">
            <h2>About Me</h2>
            <p>Information Systems graduate from Airlangga University with a strong interest in 
              Data Analytics and Business Intelligence. Experienced in working with data, understanding business processes, 
              and developing solutions through academic, professional, and organizational projects. 
              Continuously developing skills in data analysis, new technologies, and problem solving 
              to generate meaningful insights and support business needs.
            </p>
            </div>          
        </div>
      </section>


    </main>
  );
};

export default Home;
