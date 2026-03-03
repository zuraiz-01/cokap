import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseSection from './components/WhyChooseSection'
import ProgramsSection from './components/ProgramsSection'
import TestimonialsSection from './components/TestimonialsSection'
import SiteFooter from './components/SiteFooter'

function App() {
  const services = [
    {
      title: 'Online Private',
      desc: 'Build strong speaking ability in private one-on-one sessions.',
      badge: 'CP',
      featured: true,
    },
    {
      title: 'Cakap Club',
      desc: 'Learn by speaking and role-play activities with friends.',
      badge: 'CC',
    },
    {
      title: 'Cakap Chat',
      desc: 'Practice every day using short chat prompts and feedback.',
      badge: 'CT',
    },
    {
      title: 'Cakap Event',
      desc: 'Join topic-based events and sharpen your communication.',
      badge: 'CE',
    },
  ]

  const reasons = [
    {
      title: 'Easy and Flexible',
      desc: 'Set your own schedule and learn from anywhere at your pace.',
    },
    {
      title: 'Interactive Material',
      desc: 'Practical lessons, speaking drills, and guided assignments.',
    },
    {
      title: 'Certified Learning Material',
      desc: 'Reliable curriculum and structured goals for long-term progress.',
    },
  ]

  const programs = [
    {
      title: 'Other Programs',
      desc: 'We provide complete language learning solutions for schools, teams, and institutions.',
      cta: 'See Program',
      tone: 'soft',
    },
    {
      title: 'Cakap Corporate',
      desc: 'Live class packages for teams with custom goals and business communication modules.',
      cta: 'Get Consultation',
      tone: 'primary',
    },
    {
      title: 'Online Webinar',
      desc: 'Open sessions with active speakers and practical communication tips.',
      cta: 'Learn More',
      tone: 'dark',
    },
  ]

  return (
    <div className="page">
      <div className="hero-shell">
        <div className="hero-blob hero-blob-a" />
        <div className="hero-blob hero-blob-b" />
        <div className="section-container">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <main>
        <div className="section-container">
          <ServicesSection services={services} />
          <WhyChooseSection reasons={reasons} />
          <ProgramsSection programs={programs} />
          <TestimonialsSection />
        </div>
      </main>

      <div className="footer-shell">
        <SiteFooter />
      </div>
    </div>
  )
}

export default App
