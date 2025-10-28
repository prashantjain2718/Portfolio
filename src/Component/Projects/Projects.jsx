import "./Projects.css";
export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="all-projects">
          <div className="project-card">
            <h3 className="project-title">NOVA: AI assistant</h3>
            <p className="project-description">
              NOVA is a terminal based AI assistant which can perform several
              tasks through voice commands.
            </p>
            <p className="tech-stack">
              Python, Google Gemini-2.5-Flash and APIs like youtube, weather,
              news, spotify etc.
            </p>
             <a href="https://github.com/prashantjain2718/Nova-the-virtual-assistant" className="btn-secondary" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">
              MitraYug: Digital Literacy Platform for Senior Citizens
            </h3>
            <p className="project-description">
              MitraYug is a platform for senior citizens to provide them
              essential digital literacy in this tech era.
            </p>
            <p className="tech-stack">
              HTML5, CSS3, JS, Google Gemini-2.5-Flash
            </p>
             <a href="https://prashantjain2718.github.io/MitraYug/" className="btn-secondary" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">
              SkillBridge: A Peer to Peer Learning Platform
            </h3>
            <p className="project-description">
              SkillBridge is a platform for students where they can learn from
              other students and share skills with them. It helps to connect
              like minded peers around the globe.
            </p>
            <p className="tech-stack">
              HTML5, CSS3, JS, Google Gemini-2.5-Flash
            </p>
             <a href="https://skill-bridge-ffrbsqgnq-prashant-jains-projects-9838babc.vercel.app/" className="btn-secondary" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">
              EcoNova: Gamified Environmental Education Platform for Schools and
              Colleges
            </h3>
            <p className="project-description">
              EcoNova is a platform for students of schools and colleges to
              encourage interactive and fun learning of Environmental Education through both online and real-world activities.
            </p>
            <p className="tech-stack">
              React.JS, Node.js, MongoDB, Google Firebase Authentication,
              Firebase Storage etc.
            </p>
            <a href="https://eco-nova-self.vercel.app/" className="btn-secondary" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>
    </>
  );
}
