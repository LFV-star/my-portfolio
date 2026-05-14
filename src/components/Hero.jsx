import heroPhoto from '../assets/profile-hero.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-screen">
        <div className="hero-content">

          <div className="hero-left">
            <p className="hero-label">Hi, my name is</p>
            <h1 className="hero-name">Lander<br />Fernando</h1>
            <p className="hero-title">Information Technology Student | Aspiring Software Engineer</p>
            <p className="hero-intro">
              I am Passionate about AI, Machine Learning, building websites, apps, and systems that solve real-world problems.
              Currently pursuing a Bachelor of Science in Information Technology.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View My Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img
                src={heroPhoto}
                alt="Lander Fernando"
                className="hero-photo"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="quote-screen">
        <div className="quote-card">
          <div className="quote-left">
            <blockquote className="hero-quote">
              "As long as I'm alive, there are infinite chances!"
            </blockquote>
            <cite className="hero-cite">— Monkey D. Luffy</cite>
          </div>
          <div className="quote-right">
            <div className="robot-placeholder">
              <p>3D robot animation will be placed here</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}