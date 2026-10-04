const Experiences = () => {
    return (
      <main>
        <section id="experience" className="experience-section">
  
          <div className="experience-header">
            <p className="section-label">MY JOURNEY</p>
            <h1>My Experiences</h1>         
          </div>
  
          <div className="experience-timeline">
            {/* Experience 1 */}
            <div className="experience-item">
              <div className="experience-date">
                <span>Aug 2026 - Present</span>
              </div>
              <div className="experience-dot"></div>
              <div className="experience-card">
                <span className="experience-type">INTERNSHIP</span>
                <h2>Merchant Business Division - PT. Bank Central Asia Tbk</h2>
                <p>
                  Processing management data, reviewing and recapitulating
                  memos, and managing decision memo documentation.
                </p>
                <div className="experience-tags">
                  <span>Microsoft Excel</span>
                  <span>Data Processing</span>
                </div>
              </div>
            </div>
  
            {/* Experience 2 */}
            <div className="experience-item">
              <div className="experience-date">
                <span>Aug 2025 – Dec 2025</span>
              </div>  
              <div className="experience-dot"></div>
              <div className="experience-card">
                <span className="experience-type">TEACHING ASSISTANT</span>
                <h2>Interaction Design Practicum Assistant</h2>
                <h3>Universitas Airlangga</h3>
                <p>
                  Assisted students in interaction design practicum
                  activities and supported the learning and evaluation process.
                </p>
                <div className="experience-tags">
                  <span>UI/UX</span>
                  <span>Figma</span>
                </div>
              </div>
            </div>
  
            {/* Experience 3 */}
            <div className="experience-item">
              <div className="experience-date">
                <span>Feb 2025 – Jun 2025</span>
              </div>
              <div className="experience-dot"></div>
              <div className="experience-card">
                <span className="experience-type">TEACHING ASSISTANT</span>
                <h2>Mobile Programming Practicum Assistant</h2>
                <h3>Universitas Airlangga</h3>
                <p>
                  Assisted students with Flutter UI development, state
                  management, database integration, and practicum evaluation.
                </p>
                <div className="experience-tags">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
  
            {/* Experience 4 */}
            <div className="experience-item">
              <div className="experience-date">
                <span>Feb 2025 – Jun 2025</span>
              </div>
              <div className="experience-dot"></div>
              <div className="experience-card">
                <span className="experience-type">INTERNSHIP</span>
                <h2>Web Administrator</h2>
                <h3>Department of Chemistry, FST UNAIR</h3>
                <p>
                  Managed website content including news, announcements,
                  and departmental updates using WordPress.
                </p>
                <div className="experience-tags">
                  <span>WordPress</span>
                  <span>Web Management</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Experiences;