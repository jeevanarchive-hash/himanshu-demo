import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #0B5FFF 0%, #003FCC 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-60px',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '50%',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#22C55E', display: 'inline-block' }}
            />
            Appointments Available Today
          </div>

          <h2
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(30px, 5vw, 50px)',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-1px',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Still in pain?
            <br />
            Get expert help today.
          </h2>

          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              maxWidth: '500px',
              margin: '0 auto 36px',
            }}
          >
            Don't let pain control your life. Dr. Himanshu R Prasad has helped thousands
            of patients reclaim a pain-free life.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:scale-105"
              style={{
                background: '#FF6B3D',
                color: 'white',
                fontFamily: 'Inter',
                boxShadow: '0 12px 32px rgba(255,107,61,0.4)',
              }}
            >
              📅 Book Appointment
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%20Dr.%20Himanshu%2C%20I%20need%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-xl hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.4)',
                fontFamily: 'Inter',
                backdropFilter: 'blur(4px)',
              }}
            >
              💬 WhatsApp Now
            </a>
          </div>

          {/* Mini trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: '🔒', text: 'Confidential Consultation' },
              { icon: '⚡', text: 'Same Day Response' },
              { icon: '🌟', text: '15+ Years Expertise' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2"
                style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
