import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('loaded'), 100);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #FFFFFF 0%, #F0F6FF 50%, #FAFFFE 100%)',
        minHeight: '100vh',
        paddingTop: '80px',
      }}
    >
      {/* Background decorations */}
      <div className="hero-blob" style={{ top: '-100px', right: '-100px', opacity: 0.7 }} />
      <div className="hero-blob" style={{ bottom: '-150px', left: '-100px', width: '400px', height: '400px' }} />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#0B5FFF14 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="badge badge-blue">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#22C55E', display: 'inline-block' }}
                />
                Available for Consultation
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="mt-5 animate-fade-in-up"
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(36px, 5vw, 58px)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#0F172A',
                letterSpacing: '-1px',
                animationDelay: '0.2s',
              }}
            >
              Back Pain?{' '}
              <span className="gradient-text">Slip Disc?</span>
              <br />
              Sciatica?
            </h1>

            {/* Sub-headline */}
            <p
              className="mt-5 animate-fade-in-up"
              style={{
                fontFamily: 'Inter',
                fontSize: 'clamp(17px, 2vw, 20px)',
                fontWeight: 500,
                color: '#334155',
                lineHeight: 1.6,
                animationDelay: '0.3s',
              }}
            >
              Get treated by a{' '}
              <strong style={{ color: '#0B5FFF' }}>Spine Specialist</strong> with{' '}
              <strong>15+ Years Experience</strong> in Hyderabad.
            </p>

            {/* Supporting text */}
            <p
              className="mt-3 animate-fade-in-up"
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7,
                animationDelay: '0.4s',
              }}
            >
              Minimally invasive spine treatments with faster recovery and long-term results.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-7 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-200 hover:opacity-95 hover:shadow-xl"
                style={{
                  background: '#FF6B3D',
                  boxShadow: '0 8px 24px rgba(255,107,61,0.35)',
                  fontFamily: 'Inter',
                }}
              >
                <span>📅</span> Book Appointment
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%20Dr.%20Himanshu%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:shadow-lg"
                style={{
                  background: 'white',
                  color: '#25D366',
                  border: '2px solid #25D366',
                  fontFamily: 'Inter',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>

              <a
                href="tel:+914027878787"
                className="flex items-center gap-2 px-6 py-4 rounded-2xl font-medium text-base transition-all duration-200 hover:shadow-md"
                style={{
                  background: 'white',
                  color: '#0F172A',
                  border: '1.5px solid #E2E8F0',
                  fontFamily: 'Inter',
                }}
              >
                📞 Call Now
              </a>
            </div>

            {/* Quick trust pills */}
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: '🏥', text: 'Sunshine Hospitals' },
                { icon: '✅', text: '15+ Years Experience' },
                { icon: '⭐', text: '4.9 Patient Rating' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: 'white', color: '#334155', border: '1px solid #E2E8F0', fontFamily: 'Inter' }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Doctor Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              {/* Floating card 1 */}
              <div
                className="absolute -left-4 top-16 z-10 animate-float"
                style={{ animationDelay: '0s' }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid #E2E8F0',
                    minWidth: '180px',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: '#EEF4FF' }}
                  >
                    🏆
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#0B5FFF' }}>15+</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#64748B', fontWeight: 500 }}>Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div
                className="absolute -right-4 bottom-24 z-10 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid #E2E8F0',
                    minWidth: '160px',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'rgba(34,197,94,0.1)' }}
                  >
                    ⭐
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#22C55E' }}>4.9/5</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#64748B', fontWeight: 500 }}>Patient Rating</div>
                  </div>
                </div>
              </div>

              {/* Main image */}
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/5',
                  background: 'linear-gradient(135deg, #EEF4FF, #F0FFF4)',
                  boxShadow: '0 24px 60px rgba(11,95,255,0.12)',
                }}
              >
                <img
                  src="/images/doctor-hero.jpg"
                  alt="Dr. Himanshu R Prasad - Spine & Orthopedic Surgeon in Hyderabad"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '120px',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)',
                  }}
                />
                {/* Name tag at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '14px',
                    padding: '12px 16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  }}
                >
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#0F172A' }}>
                    Dr. Himanshu R Prasad
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '13px', color: '#0B5FFF', fontWeight: 500 }}>
                    MS Ortho | Spine Surgeon · Sunshine Hospitals
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 60L1440 60L1440 20C1080 60 360 0 0 40L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
