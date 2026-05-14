import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'service_wic0qps',    // your Service ID
      'YOUR_TEMPLATE_ID',   // replace this
      formRef.current,
      'YOUR_PUBLIC_KEY'     // replace this
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch(() => {
      setStatus('error')
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner observe">

        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-wrapper">

          {/* Left — Contact Info */}
          <div className="contact-left">
            <p className="contact-intro">
              Feel free to reach out if you have any questions,
              opportunities, or just want to say hi!
            </p>

            <div className="contact-links">
              <a href="mailto:landerfernando208@gmail.com" className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">landerfernando208@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/LFV-star" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">github.com/LFV-star</p>
                </div>
              </a>

              <a href="https://www.facebook.com/share/18STexPJe9/" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">👤</span>
                <div>
                  <p className="contact-label">Facebook</p>
                  <p className="contact-value">Lander Fernando</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="contact-right">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Your message"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p style={{ color: '#2e7d32', fontSize: '14px', marginTop: '8px' }}>
                  ✅ Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#c62828', fontSize: '14px', marginTop: '8px' }}>
                  ❌ Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}