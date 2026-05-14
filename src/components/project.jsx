const projects = [
  {
    title: 'Python Student Information Management System',
    description: 'A system that manages and organizes student data using different data structures and algorithms. Features include adding, updating, and deleting student records, displaying pass/fail status, and identifying top-performing students.',
    tech: ['Python'],
    status: 'Completed',
  },
  {
    title: 'DeadRails Info System',
    description: 'A console-based information system that provides organized data about the game DeadRails. Features interactive menu navigation and organized sections for classes, weapons, maps, and modes.',
    tech: ['C++'],
    status: 'Completed',
  },
  {
    title: 'EduTrack – Student Management System',
    description: 'A web application designed to manage student records and academic information. Features student registration, profile management, dashboard interface, and CRUD operations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP'],
    status: 'In Progress',
  },
  {
    title: 'Research Management System',
    description: 'A system that organizes and manages research papers, projects, and academic records. Features include storing research titles, tracking status, and searching and filtering research papers.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    status: 'In Progress',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner observe">

        <span className="section-label">What I've Built</span>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>

              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status ${project.status === 'Completed' ? 'status-done' : 'status-wip'}`}>
                  {project.status === 'Completed' ? '✅ Completed' : '🔨 In Progress'}
                </span>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tech.map((t, j) => (
                  <span className="project-tag" key={j}>{t}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}