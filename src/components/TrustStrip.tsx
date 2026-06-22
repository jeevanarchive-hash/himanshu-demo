export default function TrustStrip() {
  const items = [
    {
      icon: '⭐',
      value: '4.9 Rating',
      sub: 'Google & Practo',
    },
    {
      icon: '👨‍⚕️',
      value: '15+ Years',
      sub: 'Clinical Experience',
    },
    {
      icon: '🏥',
      value: 'Sunshine Hospitals',
      sub: 'Secunderabad',
    },
    {
      icon: '🧠',
      value: 'Endoscopic Spine Specialist',
      sub: 'MS Ortho · Certified',
    },
    {
      icon: '🔬',
      value: '5000+ Surgeries',
      sub: 'Successful Outcomes',
    },
  ];

  return (
    <div
      className="relative z-10"
      style={{
        background: 'white',
        borderBottom: '1px solid #E2E8F0',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-4">
              {/* Divider for desktop */}
              {i > 0 && (
                <div
                  className="hidden lg:block w-px h-10 mr-4"
                  style={{ background: '#E2E8F0' }}
                />
              )}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: '#EEF4FF' }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#0F172A',
                    lineHeight: 1.2,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '12px',
                    color: '#64748B',
                    fontWeight: 500,
                  }}
                >
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
