import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Conditions', href: '#conditions' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ background: 'linear-gradient(135deg, #0B5FFF, #0047CC)' }}
            >
              H
            </div>
            <div>
              <div className="font-bold text-base leading-tight" style={{ fontFamily: 'Space Grotesk', color: '#0F172A' }}>
                Dr. Himanshu R Prasad
              </div>
              <div className="text-xs font-medium" style={{ color: '#64748B' }}>
                Spine & Orthopedic Surgeon
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'active'
                    : ''
                }`}
                style={{
                  color: activeSection === link.href.replace('#', '') ? '#0B5FFF' : '#0F172A',
                  fontFamily: 'Inter',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+914027878787"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border transition-colors duration-200"
              style={{
                borderColor: '#E2E8F0',
                color: '#0F172A',
                fontFamily: 'Inter',
              }}
            >
              <span>📞</span> Call Now
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{
                background: '#FF6B3D',
                fontFamily: 'Inter',
                boxShadow: '0 4px 14px rgba(255,107,61,0.35)',
              }}
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#0F172A',
                transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#0F172A',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#0F172A',
                transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200"
              style={{
                color: activeSection === link.href.replace('#', '') ? '#0B5FFF' : '#0F172A',
                background: activeSection === link.href.replace('#', '') ? '#EEF4FF' : 'transparent',
                fontFamily: 'Inter',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="tel:+914027878787"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold"
            style={{ borderColor: '#E2E8F0', color: '#0F172A', fontFamily: 'Inter' }}
          >
            📞 Call Now
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="flex items-center justify-center py-3 rounded-xl text-white text-sm font-semibold"
            style={{ background: '#FF6B3D', fontFamily: 'Inter' }}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
