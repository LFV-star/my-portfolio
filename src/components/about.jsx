import aboutPhoto from '../assets/profile-about.jpg'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner observe">

        <div className="about-left">
          <div className="about-image-wrapper">
            <img
              src={aboutPhoto}
              alt="Lander Fernando"
              className="about-photo"
            />
          </div>
        </div>

        <div className="about-right">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="about-text">
            I'm Lander Fernando, a BSIT student at Zamboanga Peninsula
            Polytechnic State University with a passion for building websites,
            apps, and systems. I work with HTML, CSS, JavaScript, React,
            Python, and C++, with hands-on experience in MySQL and MongoDB.
            I'm still learning and growing every day, but my goal is clear —
            to become a full-stack developer and software engineer, and land
            my first role in the tech industry.
          </p>
        </div>

      </div>
    </section>
  )
}