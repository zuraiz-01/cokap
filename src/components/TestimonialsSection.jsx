function TestimonialsSection() {
  return (
    <section className="testimonials section-gap">
      <h2 className="section-title">What our customer are saying</h2>
      <p className="section-subtitle">
        Real learner feedback after 3 months of speaking sessions.
      </p>

      <article className="testimonial-card">
        <img
          src="https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=260&q=80"
          alt="Customer"
        />
        <div>
          <span className="quote-mark">"</span>
          <p>
            I can now speak English in office meetings with much more confidence.
            Cakap mentors corrected my weak points and vocabulary every week.
          </p>
          <strong>Arvin K.</strong>
        </div>
        <button className="testimonial-next" aria-label="Next review">
          ›
        </button>
      </article>
    </section>
  )
}

export default TestimonialsSection
