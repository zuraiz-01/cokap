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
      desc: 'Build strong fluency in a focused one-on-one class with expert tutors.',
      badge: '01',
      featured: true,
    },
    {
      title: 'Cakap Club',
      desc: 'Learn by speaking and role play activities inside small peer groups.',
      badge: '02',
    },
    {
      title: 'Cakap Chat',
      desc: 'Daily language chat prompts that help you practice in real context.',
      badge: '03',
    },
    {
      title: 'Cakap Event',
      desc: 'Join topic-based speaking events and sharpen your communication.',
      badge: '04',
    },
  ]

  const reasons = [
    {
      title: 'Easy and Flexible',
      desc: 'Set your own schedule and learn from anywhere without losing progress.',
    },
    {
      title: 'Interactive Material',
      desc: 'Practical lessons, speaking drills, and guided assignments in one place.',
    },
    {
      title: 'Mentor Feedback',
      desc: 'Receive direct corrections and personalized learning direction every week.',
    },
  ]

  const programs = [
    {
      title: 'Other Programs',
      desc: 'Broader learning tracks for students who need career-focused communication paths.',
      cta: 'Get Consultation',
      tone: 'soft',
    },
    {
      title: 'Cakap Corporate',
      desc: 'Live class packages for teams with custom goals and business communication modules.',
      cta: 'Schedule Class',
      tone: 'primary',
    },
    {
      title: 'Online Webinar',
      desc: 'Open sessions with active speakers, practical tips, and live Q&A for members.',
      cta: 'Join Now',
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
