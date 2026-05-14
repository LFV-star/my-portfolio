const education = [
  {
    level: 'College',
    degree: 'Bachelor of Science in Information Technology',
    school: 'Zamboanga Peninsula Polytechnic State University',
    address: 'R.T. Lim Boulevard, Baliwasan Road, Zamboanga City',
    year: 'S.Y. 2024–2025',
    status: 'Present',
  },
  {
    level: 'Senior High School',
    degree: 'Accountancy, Business, and Management (ABM)',
    school: 'Global Technical School of Zamboanga, Inc.',
    address: 'Zone 3 Gov. Alvarez Street, Zamboanga City',
    year: 'S.Y. 2022–2024',
    status: 'Graduated',
  },
  {
    level: 'Junior High School',
    degree: null,
    school: 'Don Pablo Lorenzo Memorial High School',
    address: 'Zamboanga City',
    year: 'S.Y. 2018–2022',
    status: 'Graduated',
  },
  {
    level: 'Elementary',
    degree: null,
    school: 'Sta. Maria Central School SPED Center',
    address: 'Zamboanga City',
    year: 'S.Y. 2012–2018',
    status: 'Graduated',
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-inner observe">
        

        <span className="section-label">My Background</span>
        <h2 className="section-title">Education</h2>

        <div className="education-list">
          {education.map((edu, i) => (
            <div className="education-card" key={i}>

              <div className="education-left">
                <span className="education-level">{edu.level}</span>
                <span className="education-year">{edu.year}</span>
              </div>

              <div className="education-divider" />

              <div className="education-right">
                <h3 className="education-school">{edu.school}</h3>
                {edu.degree && <p className="education-degree">{edu.degree}</p>}
                <p className="education-address">{edu.address}</p>
                <span className={`education-badge ${edu.status === 'Present' ? 'badge-present' : 'badge-done'}`}>
                  {edu.status === 'Present' ? '🎓 Currently Enrolled' : '✅ Graduated'}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}