import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Hyderabad',
    rating: 5,
    condition: 'Slip Disc',
    text: 'I suffered from severe lower back pain and a slip disc for over 3 years. After consulting Dr. Himanshu, he explained everything clearly and performed minimally invasive surgery. Within 6 weeks, I was completely pain-free and back to my normal life.',
    date: 'January 2025',
    avatar: '👨',
  },
  {
    name: 'Priya Sharma',
    location: 'Secunderabad',
    rating: 5,
    condition: 'Sciatica',
    text: 'The shooting pain in my leg from sciatica was unbearable. Dr. Prasad diagnosed the exact cause and gave me a clear treatment plan. The procedure was quick, the recovery was smooth, and I can now walk without any pain. Highly recommend him.',
    date: 'March 2025',
    avatar: '👩',
  },
  {
    name: 'Suresh Reddy',
    location: 'Hyderabad',
    rating: 5,
    condition: 'Knee Replacement',
    text: 'At 68, I was told I might never walk properly again. Dr. Himanshu performed a total knee replacement and within 3 months I am walking without any support. His team is professional, caring, and always available for follow-up.',
    date: 'November 2024',
    avatar: '👴',
  },
  {
    name: 'Anitha Raju',
    location: 'Hyderabad',
    rating: 5,
    condition: 'Scoliosis',
    text: 'My teenage daughter had severe scoliosis. Dr. Himanshu and his team handled her case with exceptional expertise. The surgery outcome was beyond our expectations. She now stands straight and lives a completely normal life.',
    date: 'August 2024',
    avatar: '👩',
  },
  {
    name: 'Mohammed Farhan',
    location: 'Secunderabad',
    rating: 5,
    condition: 'ACL Reconstruction',
    text: 'As a sports person, ACL injury felt career-ending. Dr. Prasad performed the reconstruction and gave me a structured recovery plan. I was back on the field in 6 months. Exceptional doctor and fantastic results.',
    date: 'February 2025',
    avatar: '🧑',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{ background: '#F8FAFC', padding: '96px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="badge badge-blue">Patient Stories</span>
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
            Real patients. Real results.
          </h2>
          <p
            className="mt-3"
            style={{ fontFamily: 'Inter', fontSize: '17px', color: '#64748B' }}
          >
            Over 5000 successful procedures and thousands of lives transformed.
          </p>
        </div>

        {/* Rating overview */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 reveal">
          <div
            className="flex flex-col items-center p-6 rounded-2xl"
            style={{
              background: 'white',
              border: '1px solid #E2E8F0',
              minWidth: '180px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
          >
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '52px', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>
              4.9
            </div>
            <div className="mt-2">
              <StarRating count={5} />
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', marginTop: '6px', fontWeight: 500 }}>
              Average Rating
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1 max-w-sm w-full">
            {[
              { stars: 5, pct: 92 },
              { stars: 4, pct: 6 },
              { stars: 3, pct: 2 },
            ].map(({ stars, pct }) => (
              <div key={stars} className="flex items-center gap-3">
                <div style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', width: '20px' }}>{stars}</div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: '#E2E8F0' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, background: '#F59E0B', transition: 'width 1s ease' }}
                  />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', width: '32px' }}>{pct}%</div>
              </div>
            ))}
            <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
              Based on Google & Practo reviews
            </div>
          </div>
        </div>

        {/* Featured testimonial */}
        <div
          className="mb-8 reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="testimonial-card p-8 max-w-3xl mx-auto"
            style={{ border: '1.5px solid #0B5FFF22', background: 'white' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: '#EEF4FF' }}
              >
                {testimonials[activeIdx].avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '17px', color: '#0F172A' }}>
                      {testimonials[activeIdx].name}
                    </div>
                    <div style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                      {testimonials[activeIdx].location} · {testimonials[activeIdx].date}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <StarRating count={testimonials[activeIdx].rating} />
                    <span
                      className="badge badge-blue"
                      style={{ fontSize: '11px', padding: '3px 10px' }}
                    >
                      {testimonials[activeIdx].condition}
                    </span>
                  </div>
                </div>
                <div
                  className="mt-4"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    color: '#334155',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonials[activeIdx].text}"
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIdx ? '24px' : '8px',
                  height: '8px',
                  background: i === activeIdx ? '#0B5FFF' : '#CBD5E1',
                }}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid md:grid-cols-3 gap-5 reveal">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={i}
              className="testimonial-card p-5 cursor-pointer"
              style={{ border: activeIdx === i ? '1.5px solid #0B5FFF' : '1px solid #E2E8F0' }}
              onClick={() => setActiveIdx(i)}
            >
              <StarRating count={t.rating} />
              <p
                className="mt-3"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  color: '#334155',
                  lineHeight: 1.7,
                }}
              >
                "{t.text.slice(0, 120)}..."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0F172A' }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>
                    {t.location}
                  </div>
                </div>
                <span className="badge badge-blue" style={{ fontSize: '11px' }}>{t.condition}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-10 reveal">
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl"
            style={{ background: 'white', border: '1px solid #E2E8F0' }}
          >
            <span style={{ color: '#22C55E', fontSize: '18px' }}>✓</span>
            <span style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B' }}>
              All reviews are verified and sourced from Google & Practo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
