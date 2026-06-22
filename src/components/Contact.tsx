import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    condition: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ background: 'white', padding: '96px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: Contact Info */}
          <div className="reveal-left">
            <span className="badge badge-blue">Get In Touch</span>
            <h2
              className="mt-4"
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: '#0F172A',
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}
            >
              Still in pain?<br />
              <span className="gradient-text">Let's fix that today.</span>
            </h2>
            <p
              className="mt-4"
              style={{ fontFamily: 'Inter', fontSize: '16px', color: '#64748B', lineHeight: 1.7 }}
            >
              Book a consultation with Dr. Himanshu R Prasad and get a clear diagnosis
              and personalized treatment plan.
            </p>

            {/* Contact methods */}
            <div className="mt-8 flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:+914027878787"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:shadow-md group"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', textDecoration: 'none' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-colors"
                  style={{ background: '#EEF4FF' }}
                >
                  📞
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', fontWeight: 500, marginBottom: '2px' }}>
                    CALL NOW
                  </div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#0B5FFF' }}>
                    040-2787-8787
                  </div>
                </div>
                <div className="ml-auto text-xl">→</div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210?text=Hi%20Dr.%20Himanshu%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:shadow-md"
                style={{ background: '#F0FFF4', border: '1.5px solid #22C55E33', textDecoration: 'none' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#22C55E' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#16A34A', fontWeight: 500, marginBottom: '2px' }}>
                    WHATSAPP
                  </div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#16A34A' }}>
                    Chat with Us Now
                  </div>
                </div>
                <div className="ml-auto text-xl">→</div>
              </a>

              {/* Location */}
              <div
                className="flex items-start gap-4 p-4 rounded-2xl"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: '#FFF7ED' }}
                >
                  📍
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', fontWeight: 500, marginBottom: '2px' }}>
                    LOCATION
                  </div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#0F172A' }}>
                    Sunshine Hospitals
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B', marginTop: '2px' }}>
                    1-7-201 to 205, Beside Paradise Hotel,<br />
                    PG Road, Secunderabad, Hyderabad – 500003
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div
                className="p-4 rounded-2xl"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', color: '#0F172A', marginBottom: '10px' }}>
                  🕐 Consultation Timings
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { day: 'Mon – Fri', time: '9:00 AM – 5:00 PM' },
                    { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
                    { day: 'Sunday', time: 'By Appointment' },
                    { day: 'Emergency', time: '24/7 Available' },
                  ].map(({ day, time }) => (
                    <div key={day}>
                      <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', fontWeight: 500 }}>{day}</div>
                      <div style={{ fontFamily: 'Inter', fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>{time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Form */}
          <div className="reveal-right">
            <div
              style={{
                background: 'white',
                borderRadius: '24px',
                border: '1.5px solid #E2E8F0',
                padding: '32px',
                boxShadow: '0 16px 48px rgba(11,95,255,0.07)',
              }}
            >
              {!submitted ? (
                <>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: '#0F172A', marginBottom: '6px' }}>
                    Book an Appointment
                  </div>
                  <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>
                    Fill the form below and our team will call you within 2 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                        Condition / Problem
                      </label>
                      <select
                        className="form-input"
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select your condition</option>
                        <option>Back Pain</option>
                        <option>Neck Pain</option>
                        <option>Slip Disc</option>
                        <option>Sciatica</option>
                        <option>Knee Pain</option>
                        <option>Shoulder Pain</option>
                        <option>Scoliosis</option>
                        <option>Sports Injury</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your symptoms briefly..."
                        className="form-input"
                        style={{ resize: 'vertical' }}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-semibold text-base text-white transition-all hover:opacity-95 hover:shadow-xl mt-2"
                      style={{
                        background: '#FF6B3D',
                        fontFamily: 'Inter',
                        boxShadow: '0 8px 24px rgba(255,107,61,0.3)',
                      }}
                    >
                      📅 Request Appointment
                    </button>

                    <p style={{ fontFamily: 'Inter', fontSize: '12px', color: '#94A3B8', textAlign: 'center' }}>
                      🔒 Your information is secure and never shared with third parties.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: '#0F172A', marginBottom: '8px' }}>
                    Request Received!
                  </div>
                  <p style={{ fontFamily: 'Inter', fontSize: '15px', color: '#64748B', lineHeight: 1.7, marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name}</strong>! Our team will contact you within 2 hours to confirm your appointment with Dr. Himanshu R Prasad.
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Dr.%20Himanshu%2C%20I%20just%20submitted%20an%20appointment%20request."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
                    style={{ background: '#25D366', fontFamily: 'Inter' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Also Message on WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Google Maps embed */}
            <div
              className="mt-5 rounded-2xl overflow-hidden"
              style={{ border: '1px solid #E2E8F0', height: '220px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2658854540374!2d78.50052021533666!3d17.44088228804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b5dfcb21a4b%3A0x3cee30c48c39abf6!2sSunshine%20Hospitals%2C%20PG%20Road%2C%20Secunderabad!5e0!3m2!1sen!2sin!4v1641000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunshine Hospitals Location"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
