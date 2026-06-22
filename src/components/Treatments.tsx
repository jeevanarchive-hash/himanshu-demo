import { useEffect, useRef, useState } from 'react';

const treatmentGroups = [
  {
    category: 'Spine Treatments',
    icon: '🦴',
    color: '#EEF4FF',
    borderColor: '#0B5FFF',
    items: [
      {
        name: 'Spinal Fusion',
        desc: 'Permanent joining of vertebrae to eliminate painful motion',
        icon: '🔗',
      },
      {
        name: 'Microdiscectomy',
        desc: 'Microsurgical removal of herniated disc material',
        icon: '🔬',
      },
      {
        name: 'Minimally Invasive Spine Surgery',
        desc: 'Less cutting, faster healing, smaller scars',
        icon: '🎯',
      },
    ],
  },
  {
    category: 'Joint Treatments',
    icon: '🦵',
    color: '#F0FFF4',
    borderColor: '#22C55E',
    items: [
      {
        name: 'Knee Replacement',
        desc: 'Total or partial joint replacement for severe arthritis',
        icon: '⚙️',
      },
      {
        name: 'Hip Replacement',
        desc: 'Restore pain-free mobility with modern implants',
        icon: '🔄',
      },
      {
        name: 'Arthroscopy',
        desc: 'Keyhole surgery for joint diagnosis and repair',
        icon: '🔭',
      },
    ],
  },
  {
    category: 'Sports Injuries',
    icon: '🏃',
    color: '#FFF7ED',
    borderColor: '#F59E0B',
    items: [
      {
        name: 'ACL / PCL Reconstruction',
        desc: 'Restore knee stability after ligament tears',
        icon: '⚡',
      },
      {
        name: 'Meniscus Repair',
        desc: 'Preserve knee cartilage for long-term joint health',
        icon: '🛡️',
      },
    ],
  },
];

export default function Treatments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

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
      id="treatments"
      ref={sectionRef}
      style={{ background: 'white', padding: '96px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="badge badge-green">Treatment Options</span>
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
            Procedures We Perform
          </h2>
          <p
            className="mt-3 max-w-lg mx-auto"
            style={{ fontFamily: 'Inter', fontSize: '17px', color: '#64748B', lineHeight: 1.6 }}
          >
            Advanced surgical and non-surgical treatments tailored to your specific condition.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
          {treatmentGroups.map((group, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                fontFamily: 'Inter',
                background: activeTab === i ? '#0B5FFF' : 'white',
                color: activeTab === i ? 'white' : '#64748B',
                border: activeTab === i ? '2px solid #0B5FFF' : '2px solid #E2E8F0',
                boxShadow: activeTab === i ? '0 6px 20px rgba(11,95,255,0.2)' : 'none',
              }}
            >
              <span>{group.icon}</span>
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Group */}
        <div className="reveal">
          {treatmentGroups.map((group, gi) => (
            gi === activeTab && (
              <div key={gi}>
                {/* Group description area */}
                <div
                  className="rounded-2xl p-6 mb-6"
                  style={{
                    background: group.color,
                    border: `1px solid ${group.borderColor}22`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{group.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', color: '#0F172A' }}>
                        {group.category}
                      </div>
                      <div style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B' }}>
                        {group.items.length} procedures available
                      </div>
                    </div>
                  </div>
                </div>

                {/* Treatment items */}
                <div className="grid md:grid-cols-3 gap-5">
                  {group.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="card-hover"
                      style={{
                        background: 'white',
                        border: '1.5px solid #E2E8F0',
                        borderRadius: '16px',
                        padding: '24px',
                        cursor: 'pointer',
                        animationDelay: `${ii * 100}ms`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                        style={{ background: group.color }}
                      >
                        {item.icon}
                      </div>
                      <h3
                        style={{
                          fontFamily: 'Space Grotesk',
                          fontWeight: 700,
                          fontSize: '17px',
                          color: '#0F172A',
                          marginBottom: '8px',
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Inter',
                          fontSize: '14px',
                          color: '#64748B',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </p>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 flex items-center gap-1 text-sm font-semibold transition-colors"
                        style={{ fontFamily: 'Inter', color: group.borderColor, textDecoration: 'none' }}
                      >
                        Enquire about this →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Minimally Invasive Banner */}
        <div
          className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 reveal"
          style={{
            background: 'linear-gradient(135deg, #0B5FFF 0%, #0047CC 100%)',
            boxShadow: '0 16px 48px rgba(11,95,255,0.2)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '22px',
                color: 'white',
                marginBottom: '8px',
              }}
            >
              🎯 Minimally Invasive First Approach
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
              Dr. Himanshu always explores non-surgical and minimally invasive options before recommending surgery.
              Most patients recover without open surgery.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-opacity-90 whitespace-nowrap"
            style={{
              background: 'white',
              color: '#0B5FFF',
              fontFamily: 'Inter',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            Get Expert Opinion →
          </a>
        </div>
      </div>
    </section>
  );
}
