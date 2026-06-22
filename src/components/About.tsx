import { useEffect, useRef } from 'react';

const credentials = [
  { label: 'MS (Ortho)', desc: 'Master of Surgery – Orthopedics' },
  { label: 'DNB (Ortho)', desc: 'Diplomate of National Board' },
  { label: 'Fellowship', desc: 'Spine Surgery – Germany & USA' },
  { label: 'AO Spine', desc: 'Certified AO Spine Instructor' },
];

const highlights = [
  { value: '15+', label: 'Years of Practice' },
  { value: '13+', label: 'Years as Specialist' },
  { value: '5000+', label: 'Surgeries Performed' },
  { value: '98%', label: 'Success Rate' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ background: '#FFFFFF', padding: '96px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Visual */}
          <div className="reveal-left">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="stat-card"
                  style={{
                    background: i % 2 === 0 ? 'white' : '#0B5FFF',
                    borderColor: i % 2 === 0 ? '#E2E8F0' : '#0B5FFF',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 800,
                      fontSize: '36px',
                      color: i % 2 === 0 ? '#0B5FFF' : 'white',
                      lineHeight: 1,
                    }}
                  >
                    {h.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: i % 2 === 0 ? '#64748B' : 'rgba(255,255,255,0.8)',
                      marginTop: '6px',
                    }}
                  >
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Special interests */}
            <div
              style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#0F172A',
                  marginBottom: '14px',
                }}
              >
                🎯 Special Clinical Interests
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Degenerative Spine Disorders',
                  'Scoliosis & Spinal Deformities',
                  'Pediatric Spine Conditions',
                  'Spine Trauma',
                  'Minimally Invasive Spine Surgery',
                  'Complex Spinal Reconstruction',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="badge badge-blue"
                    style={{ fontSize: '12px' }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="reveal-right">
            <span className="badge badge-blue">About the Doctor</span>
            <h2
              className="mt-4"
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 700,
                color: '#0F172A',
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}
            >
              Dr. Himanshu R Prasad
            </h2>
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                color: '#0B5FFF',
                marginTop: '6px',
              }}
            >
              MS Ortho | Senior Spine & Orthopedic Surgeon
            </div>
            <div
              style={{
                fontFamily: 'Inter',
                fontSize: '14px',
                color: '#64748B',
                marginTop: '4px',
              }}
            >
              Sunshine Hospitals, Secunderabad, Hyderabad
            </div>

            <div className="section-divider mt-5 mb-5" />

            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#334155',
                lineHeight: 1.8,
              }}
            >
              Dr. Himanshu R Prasad is one of Hyderabad's leading spine and orthopedic surgeons with over{' '}
              <strong>15 years of total experience</strong> and{' '}
              <strong>13+ years as a dedicated spine specialist</strong>.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#334155',
                lineHeight: 1.8,
              }}
            >
              He specializes in complex spinal disorders, scoliosis correction, and minimally invasive
              techniques that ensure <strong>faster recovery, less pain, and long-term results</strong> for
              his patients — from pediatric cases to elderly degenerative conditions.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#334155',
                lineHeight: 1.8,
              }}
            >
              Trained in Germany and USA, Dr. Prasad brings world-class expertise to Hyderabad's patients,
              offering cutting-edge surgical and non-surgical solutions at{' '}
              <strong>Sunshine Hospitals, Secunderabad</strong>.
            </p>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
                    style={{ background: '#EEF4FF', color: '#0B5FFF', fontFamily: 'Space Grotesk' }}
                  >
                    ✓
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0F172A' }}>
                      {cred.label}
                    </div>
                    <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>
                      {cred.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{
                background: '#0B5FFF',
                fontFamily: 'Inter',
                boxShadow: '0 8px 24px rgba(11,95,255,0.25)',
              }}
            >
              Book a Consultation →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
