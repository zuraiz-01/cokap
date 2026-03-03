function ProgramsSection({ programs }) {
  return (
    <section className="programs section-gap">
      <div className="program-grid">
        {programs.map((item) => (
          <article key={item.title} className={`program-card ${item.tone}`}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="btn btn-program">{item.cta}</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProgramsSection
