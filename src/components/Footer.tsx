export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#0F172A',
        color: 'white',
        padding: '64px 0 32px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #0B5FFF, #0047CC)' }}
              >
                H
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: 'white' }}>
                  Dr. Himanshu R Prasad
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#94A3B8' }}>
                  Spine & Orthopedic Surgeon
                </div>
              </div>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#94A3B8', lineHeight: 1.8, maxWidth: '320px' }}>
              Providing world-class spine and orthopedic care with minimally invasive techniques
              for faster recovery and lasting results.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="tel:+914027878787"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Inter',
                  textDecoration: 'none',
                }}
              >
                📞 Call
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: '#25D36622',
                  color: '#4ADE80',
                  fontFamily: 'Inter',
                  border: '1px solid #25D36640',
                  textDecoration: 'none',
                }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: 'white', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Quick Links
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About Doctor', id: 'about' },
                { label: 'Conditions Treated', id: 'conditions' },
                { label: 'Treatments', id: 'treatments' },
                { label: 'Patient Stories', id: 'testimonials' },
                { label: 'Book Appointment', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left transition-colors"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    color: '#94A3B8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px 0',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hospital Info */}
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: 'white', marginBottom: '16px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Hospital
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: '14px', color: '#94A3B8', lineHeight: 1.8 }}>
              <div style={{ color: 'white', fontWeight: 600, marginBottom: '4px' }}>Sunshine Hospitals</div>
              <div>1-7-201 to 205,</div>
              <div>Beside Paradise Hotel,</div>
              <div>PG Road, Secunderabad,</div>
              <div>Hyderabad – 500003</div>
              <div className="mt-3" style={{ color: '#64748B', fontSize: '13px' }}>
                Mon–Fri: 9 AM – 5 PM<br />
                Sat: 9 AM – 2 PM<br />
                Emergency: 24/7
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#475569' }}>
              © {currentYear} Dr. Himanshu R Prasad. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[
                'Spine Surgeon Hyderabad',
                'Orthopedic Doctor Secunderabad',
                'Back Pain Specialist',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '11px',
                    color: '#334155',
                    background: '#1E293B',
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
