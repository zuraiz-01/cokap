function ServicesSection({ services }) {
  return (
    <section className="services section-gap">
      <h2 className="section-title">Our Services</h2>
      <div className="service-grid">
        {services.map((item) => (
          <article
            key={item.title}
            className={`service-card ${item.featured ? 'service-card-featured' : ''}`}
          >
            <span className="service-badge">{item.badge}</span>
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

export default ServicesSection
