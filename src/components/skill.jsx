import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaNodeJs, FaCode, FaServer, FaPen, FaVideo } from 'react-icons/fa'
import { SiCanva } from 'react-icons/si'

const technical = [
  { icon: <FaHtml5 color="#E34F26" />, name: 'HTML' },
  { icon: <FaCss3Alt color="#1572B6" />, name: 'CSS' },
  { icon: <FaJs color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <FaReact color="#61DAFB" />, name: 'React' },
  { icon: <FaPhp color="#777BB4" />, name: 'PHP' },
  { icon: <FaPython color="#3776AB" />, name: 'Python' },
  { icon: <FaNodeJs color="#339933" />, name: 'Node.js' },
]

const tools = [
  { icon: <FaCode color="#007ACC" />, name: 'VS Code' },
  { icon: <FaServer color="#FB7A24" />, name: 'XAMPP' },
  { icon: <SiCanva color="#00C4CC" />, name: 'Canva' },
  { icon: <FaVideo color="#000000" />, name: 'CapCut' },
]

const soft = [
  'Problem-Solving', 'Collaboration', 'Time Management',
  'Initiative', 'Active Listening', 'Strong Work Ethic'
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner observe">
       

        <span className="section-label">What I Know</span>
        <h2 className="section-title">Skills</h2>

        {/* Technical Skills */}
        <p className="skills-category">Technical Skills</p>
        <div className="skills-grid">
          {technical.map((skill, i) => (
            <div className="skill-card" key={i}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Tools */}
        <p className="skills-category">Tools</p>
        <div className="skills-grid">
          {tools.map((skill, i) => (
            <div className="skill-card" key={i}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <p className="skills-category">Soft Skills</p>
        <div className="soft-grid">
          {soft.map((skill, i) => (
            <span className="soft-tag" key={i}>{skill}</span>
          ))}
        </div>

      </div>
    </section>
  )
}