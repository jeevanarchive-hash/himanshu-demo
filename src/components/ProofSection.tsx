import { useEffect, useRef } from 'react';

const proofCards = [
  {
    icon: '🏆',
    title: 'Best Spine Surgeon Award',
    desc: '2023 – Hyderabad Medical Excellence Awards',
    color: '#FFF7ED',
    border: '#F59E0B',
  },
  {
    icon: '🎓',
    title: 'Fellowship – Germany & USA',
    desc: 'Advanced Spine Surgery Training',
    color: '#EEF4FF',
    border: '#0B5FFF',
  },
  {
    icon: '🌐',
    title: 'International Speaker',
    desc: 'Presented at 30+ Global Spine Conferences',
    color: '#F0FFF4',
    border: '#22C55E',
  },
  {
    icon: '📰',
    title: '15+ Research Papers',
    desc: 'Published in peer-reviewed spine journals',
    color: '#FFF0F0',
    border: '#EF4444',
  },
];

const beforeAfterCases = [
  {
    condition: 'Lumbar Scoliosis Correction',
    detail: '54° curve corrected to 8° — Patient is now pain-free and standing straight',
    before: '54° Cobb Angle',
    after: '8° Cobb Angle',
    outcome: 'Full recovery in 4 months',
  },
  {
    condition: 'L4-L5 Microdiscectomy',
    detail: 'Severe sciatica and foot drop resolved after keyhole surgery',
    before: 'Unable to walk',
    after: 'Walking without support',
    outcome: 'Back to work in 3 weeks',
  },
  {
    condition: 'Total Knee Replacement',
    detail: 'Bilateral knee replacement for 68-year-old with severe osteoarthritis',
    before: 'Wheelchair dependent',
    after: 'Walking independently',
    outcome: 'Full mobility restored',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ProofSection() {
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
      ref={sectionRef}
      style={{ background: '#FFFFFF', padding: '96px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="badge badge-green">Proven Expertise</span>
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
            Why patients choose Dr. Himanshu
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter', fontSize: '17px', color: '#64748B' }}
          >
            Academic excellence, international training, and thousands of successful outcomes.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 reveal">
          {proofCards.map((card, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl card-hover"
              style={{
                background: card.color,
                border: `1.5px solid ${card.border}33`,
              }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0F172A', marginBottom: '4px' }}>
                {card.title}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', lineHeight: 1.5 }}>
                {card.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Before / After Cases */}
        <div className="mb-14">
          <div className="text-center mb-8 reveal">
            <h3
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '24px',
                color: '#0F172A',
              }}
            >
              Clinical Outcomes
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: '15px', color: '#64748B', marginTop: '6px' }}>
              Real cases with measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 reveal">
            {beforeAfterCases.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden card-hover"
                style={{ border: '1.5px solid #E2E8F0' }}
              >
                {/* Case header */}
                <div
                  className="p-4"
                  style={{ background: '#0B5FFF', }}
                >
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', color: 'white' }}>
                    {c.condition}
                  </div>
                </div>

                <div className="p-5 bg-white">
                  <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', lineHeight: 1.6, marginBottom: '16px' }}>
                    {c.detail}
                  </p>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl text-center"
                      style={{ background: '#FFF0F0', border: '1px solid #FCA5A522' }}
                    >
                      <div style={{ fontFamily: 'Inter', fontSize: '10px', color: '#EF4444', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                        Before
                      </div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', color: '#0F172A' }}>
                        {c.before}
                      </div>
                    </div>
                    <div
                      className="p-3 rounded-xl text-center"
                      style={{ background: '#F0FFF4', border: '1px solid #22C55E22' }}
                    >
                      <div style={{ fontFamily: 'Inter', fontSize: '10px', color: '#22C55E', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                        After
                      </div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', color: '#0F172A' }}>
                        {c.after}
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-2 p-3 rounded-xl"
                    style={{ background: '#EEF4FF' }}
                  >
                    <span style={{ color: '#22C55E' }}>✓</span>
                    <span style={{ fontFamily: 'Inter', fontSize: '13px', color: '#0B5FFF', fontWeight: 600 }}>
                      {c.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Proof Placeholder + Reviews Row */}
        <div className="grid lg:grid-cols-2 gap-8 reveal">
          {/* Video placeholder */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 cursor-pointer group"
            style={{
              background: 'linear-gradient(135deg, #0F172A, #1E293B)',
              minHeight: '280px',
              border: '1.5px solid #1E293B',
              padding: '32px',
              position: 'relative',
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '20px', color: 'white', textAlign: 'center' }}>
              Patient Recovery Stories
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
              Watch how patients went from chronic pain<br />to living a pain-free life
            </div>
            <div
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{ background: '#0B5FFF', color: 'white', fontFamily: 'Inter' }}
            >
              Watch Video Testimonials →
            </div>
            {/* Subtle shine animation */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.02) 50%, transparent 60%)',
                borderRadius: '16px',
              }}
            />
          </div>

          {/* Review snapshots */}
          <div className="flex flex-col gap-4">
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#0F172A' }}>
              Google Reviews Snapshot
            </div>

            {[
              {
                name: 'Kiran Rao',
                rating: 5,
                text: 'Exceptional doctor. My chronic back pain of 7 years is completely gone after the procedure. Thank you Dr. Himanshu!',
                time: '2 weeks ago',
              },
              {
                name: 'Deepa Mehta',
                rating: 5,
                text: 'Very patient and thorough in explaining treatment. Minimally invasive approach meant I was home the next day.',
                time: '1 month ago',
              },
              {
                name: 'Vijay Anand',
                rating: 5,
                text: 'Best spine surgeon in Hyderabad. No question about it. Completely changed my quality of life.',
                time: '3 months ago',
              },
            ].map((review, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: `hsl(${i * 60 + 200}, 70%, 50%)` }}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0F172A' }}>
                        {review.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <StarRating count={review.rating} />
                        <span style={{ fontFamily: 'Inter', fontSize: '11px', color: '#94A3B8' }}>{review.time}</span>
                      </div>
                    </div>
                  </div>
                  {/* Google G */}
                  <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <p className="mt-3" style={{ fontFamily: 'Inter', fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
