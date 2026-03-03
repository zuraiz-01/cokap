const floatingAvatars = [
  {
    name: 'Sana',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    className: 'avatar-a',
  },
  {
    name: 'Irfan',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    className: 'avatar-b',
  },
  {
    name: 'Alya',
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    className: 'avatar-c',
  },
]

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="section-chip">#1 Language Platform</p>
        <h1>The Best Partner to Reach Fluency</h1>
        <p>
          AI-backed speaking practice, guided tutors, and practical programs for
          real-world confidence.
        </p>
        <div className="hero-actions">
          <button className="btn btn-dark">Get Started</button>
          <button className="btn btn-light">See Testimonial</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-frame">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
            alt="Student learning online"
          />
          <button className="play-chip" aria-label="Play intro video">
            ▶
          </button>

          <div className="floating-card score-card">
            <p>Class Active</p>
            <strong>06:30</strong>
          </div>

          <div className="floating-card session-card">
            <p>Skill Score</p>
            <strong>92%</strong>
          </div>

          {floatingAvatars.map((item) => (
            <img
              key={item.name}
              src={item.src}
              alt={item.name}
              className={`floating-avatar ${item.className}`}
            />
          ))}

          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
