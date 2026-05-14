import { FaTrophy, FaMedal, FaCertificate, FaStar } from 'react-icons/fa'

const certifications = [
  {
    title: 'Semestral Achievers Award',
    issuer: 'Zamboanga Peninsula Polytechnic State University',
    description: 'Outstanding Academic Performance — GWA: 1.39',
    year: 'April 30, 2026',
    icon: <FaTrophy color="#f59e0b" size={28} />,
  },
  {
    title: 'Semestral Achievers Award',
    issuer: 'Zamboanga Peninsula Polytechnic State University',
    description: 'Outstanding Academic Performance — GWA: 1.52',
    year: 'April 26, 2025',
    icon: <FaTrophy color="#f59e0b" size={28} />,
  },
  {
    title: 'Certificate of Completion — Work Immersion Program',
    issuer: 'MEMPCO Canelar Branch',
    description: 'Successfully completed the 80-hour Work Immersion Program for Senior High School',
    year: 'February 5, 2024',
    icon: <FaCertificate color="#3b82f6" size={28} />,
  },
  {
    title: 'Certificate of Recognition — With Honors',
    issuer: 'Global Technical School of Zamboanga, Inc.',
    description: 'Outstanding Academic Performance — 4th Quarter',
    year: 'S.Y. 2023-2024',
    icon: <FaMedal color="#8b5cf6" size={28} />,
  },
  {
    title: 'Certificate of Recognition — With Honors',
    issuer: 'Global Technical School of Zamboanga, Inc.',
    description: 'Outstanding Academic Performance — 3rd Quarter',
    year: 'S.Y. 2023-2024',
    icon: <FaMedal color="#8b5cf6" size={28} />,
  },
  {
    title: 'Certificate of Recognition — With Honors',
    issuer: 'Global Technical School of Zamboanga, Inc.',
    description: 'Outstanding Academic Performance — 2nd Quarter',
    year: 'S.Y. 2023-2024',
    icon: <FaMedal color="#8b5cf6" size={28} />,
  },
  {
    title: 'Certificate of Recognition — With Honors',
    issuer: 'Global Technical School of Zamboanga, Inc.',
    description: 'Outstanding Academic Performance — 4th Quarter',
    year: 'S.Y. 2022-2023',
    icon: <FaMedal color="#8b5cf6" size={28} />,
  },
  {
    title: 'Certificate of Recognition — Outstanding Performance in Mathematics',
    issuer: 'Global Technical School of Zamboanga, Inc.',
    description: 'Exemplary skills, dedication, and commitment in Mathematics',
    year: 'May 17, 2023',
    icon: <FaStar color="#f59e0b" size={28} />,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="cert-section">
      <div className="cert-inner observe">

        <span className="section-label">My Achievements</span>
        <h2 className="section-title">Certifications & Awards</h2>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}