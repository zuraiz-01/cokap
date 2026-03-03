const navItems = ['Home Course', 'Our Course', 'Schedule', 'Teacher', 'Page']

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="brand">
        <span className="brand-dot" />
        cakap
      </a>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      <button className="btn btn-dark">Join Class</button>
    </nav>
  )
}

export default Navbar
