function WhyChooseSection({ reasons }) {
  return (
    <section className="why-choose section-gap">
      <div className="why-visual">
        <div className="visual-main">
          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80"
            alt="Happy learner"
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=220&q=80"
          alt="Student"
          className="visual-side side-a"
        />
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=220&q=80"
          alt="Tutor"
          className="visual-side side-b"
        />
      </div>

      <div className="why-copy">
        <h2>Why Should Choose Cakap?</h2>
        {reasons.map((item) => (
          <article key={item.title} className="reason-item">
            <span>+</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseSection
