import { useEffect, useRef } from 'react';

const conditions = [
  {
    icon: '🦴',
    title: 'Back Pain',
    desc: 'Chronic or acute lower back pain affecting daily life',
    color: '#EEF4FF',
    iconBg: '#0B5FFF',
  },
  {
    icon: '🤕',
    title: 'Neck Pain',
    desc: 'Cervical pain, stiffness and radiating arm symptoms',
    color: '#FFF7ED',
    iconBg: '#F59E0B',
  },
  {
    icon: '💿',
    title: 'Slip Disc',
    desc: 'Herniated disc pressing on spinal nerves causing pain',
    color: '#F0FFF4',
    iconBg: '#22C55E',
  },
  {
    icon: '⚡',
    title: 'Sciatica',
    desc: 'Sharp shooting pain from lower back down to the leg',
    color: '#FFF0F0',
    iconBg: '#EF4444',
  },
  {
    icon: '🦵',
    title: 'Knee Pain',
    desc: 'Arthritis, ligament tears, and joint degeneration',
    color: '#F5F3FF',
    iconBg: '#8B5CF6',
  },
  {
    icon: '💪',
    title: 'Shoulder Pain',
    desc: 'Rotator cuff injuries, frozen shoulder and impingement',
    color: '#FFF4E6',
    iconBg: '#FF6B3D',
  },
  {
    icon: '🔄',
    title: 'Scoliosis',
    desc: 'Abnormal spinal curvature in adults and children',
    color: '#EEF4FF',
    iconBg: '#0B5FFF',
  },
  {
    icon: '🤸',
    title: 'Sports Injuries',
    desc: 'ACL tears, meniscus damage and ligament injuries',
    color: '#F0FFF4',
    iconBg: '#22C55E',
  },
];

export default function Conditions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
      id="conditions"
      ref={sectionRef}
      style={{ background: '#F8FAFC', padding: '96px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <span className="badge badge-blue">Patient Conditions</span>
          <h2
            className="mt-4"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '-0.5px',
            }}
          >
            What's causing your pain?
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter', fontSize: '17px', color: '#64748B', lineHeight: 1.6 }}
          >
            Select your condition below to understand how Dr. Himanshu can help you live pain-free.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {conditions.map((cond, i) => (
            <a
              key={i}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="condition-card reveal group"
              style={{ padding: '20px', transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: cond.color }}
              >
                {cond.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#0F172A',
                  marginBottom: '6px',
                }}
              >
                {cond.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '13px',
                  color: '#64748B',
                  lineHeight: 1.5,
                }}
              >
                {cond.desc}
              </p>
              <div
                className="mt-3 flex items-center gap-1 text-xs font-semibold transition-all duration-200"
                style={{ fontFamily: 'Inter', color: '#0B5FFF' }}
              >
                Get Help <span style={{ fontSize: '16px' }}>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 reveal">
          <p style={{ fontFamily: 'Inter', color: '#64748B', fontSize: '15px' }}>
            Not sure about your condition?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ color: '#0B5FFF', fontWeight: 600, textDecoration: 'none' }}
            >
              Book a free consultation →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
