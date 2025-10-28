import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiC, SiPython, SiCplusplus } from "react-icons/si";
import "./Skills.css";
export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-icons">
          <div className="skill-card">
            <FaReact className="icon react" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <SiC className="icon c" />
            <p>C</p>
          </div>
          <div className="skill-card">
            <SiCplusplus className="icon cpp" />
            <p>C++</p>
          </div>
          <div className="skill-card">
            <FaJs className="icon js" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaHtml5 className="icon html" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="icon css" />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <SiPython className="icon python" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <FaGitAlt className="icon git" />
            <p>Git & GitHub</p>
          </div>
        </div>
      </section>
    </>
  );
}
