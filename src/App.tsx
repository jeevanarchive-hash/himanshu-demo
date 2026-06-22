import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Conditions from './components/Conditions';
import Treatments from './components/Treatments';
import ProofSection from './components/ProofSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  // Global reveal observer for all sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Strip */}
      <TrustStrip />

      {/* About Doctor */}
      <About />

      {/* Conditions Treated */}
      <Conditions />

      {/* Treatments */}
      <Treatments />

      {/* Proof Section */}
      <ProofSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact & Booking */}
      <Contact />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
