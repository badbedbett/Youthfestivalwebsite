import { HorseBackground } from './HorseBackground'

export default function Footer() {
  return (
    <footer
      id="contacts"
      style={{
        background: 'linear-gradient(105deg, #BF00FF 0%, #E8362D 28%, #F18500 62%, #FFDF00 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Horse background */}
      <div
        style={{
          position: 'absolute',
          right: '-8%',
          bottom: '-5%',
          width: '65%',
          height: '110%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <HorseBackground fillOpacity={0.18} fill="white" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Main content */}
      <div
        style={{ padding: '80px 48px 60px', position: 'relative', zIndex: 3 }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Giant headline */}
          <div style={{ marginBottom: 72 }}>
            <h2
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(64px, 12vw, 180px)',
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: '-0.03em',
                color: '#FFDF00',
                textTransform: 'uppercase',
              }}
            >
              ЖДЁМ
              <br />
              <span style={{ color: '#FFFFFF' }}>ТЕБЯ!</span>
            </h2>
            <div
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(24px, 4vw, 56px)',
                color: 'rgba(255,255,255,0.6)',
                marginTop: 8,
                letterSpacing: '0.04em',
              }}
            >
              27 ИЮНЯ · КАЗАНЬ
            </div>
            <div style={{ marginTop: 32 }}>
              <button
                style={{
                  background: '#FFDF00',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '"Dela Gothic One", cursive',
                  fontSize: 14,
                  color: '#000000',
                  letterSpacing: '0.04em',
                  padding: '14px 36px',
                  borderRadius: 8,
                  transition: 'transform 0.15s, box-shadow 0.2s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget as HTMLElement
                  t.style.transform = 'translateY(-2px)'
                  t.style.boxShadow = '0 8px 28px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget as HTMLElement
                  t.style.transform = 'translateY(0)'
                  t.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                ЗАРЕГИСТРИРОВАТЬСЯ →
              </button>
            </div>
          </div>

          {/* Info grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 48,
              paddingTop: 48,
              borderTop: '1px solid rgba(255,255,255,0.25)',
            }}
            className="footer-grid"
          >
            {/* Location */}
            <div>
              <div
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 11,
                  color: '#FFDF00',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Место проведения
              </div>
              <div
                style={{
                  fontFamily: '"Dela Gothic One", cursive',
                  fontSize: 18,
                  color: '#FFFFFF',
                  marginBottom: 6,
                }}
              >
                экстрим-парк «УРАМ»
              </div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                Кремлёвская набережная, 33
                <br />
                Казань, Республика Татарстан
              </div>
            </div>

            {/* Contacts */}
            <div>
              <div
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 11,
                  color: '#FFDF00',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Контакты
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Сайт', value: 'деньмолодёжи.рф' },
                  { label: 'Email', value: 'info@деньмолодёжи.рф' },
                  { label: 'Телефон', value: '+7 (843) 000-00-00' },
                ].map(c => (
                  <div key={c.label}>
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
                      {c.label}:{' '}
                    </span>
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, color: '#FFFFFF' }}>
                      {c.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 11,
                  color: '#FFDF00',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Соцсети
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['ВКонтакте', 'Telegram'].map(s => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.85)',
                      textDecoration: 'none',
                      transition: 'color 0.2s, gap 0.2s',
                    }}
                    onMouseEnter={e => {
                      const t = e.currentTarget as HTMLElement
                      t.style.color = '#FFDF00'
                      t.style.gap = '14px'
                    }}
                    onMouseLeave={e => {
                      const t = e.currentTarget as HTMLElement
                      t.style.color = 'rgba(255,255,255,0.85)'
                      t.style.gap = '10px'
                    }}
                  >
                    <span
                      style={{ width: 7, height: 7, borderRadius: '50%', background: '#FFDF00', display: 'inline-block', flexShrink: 0 }}
                    />
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 22,
              borderTop: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
              © 2026 День молодёжи · Казань
            </span>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
              Праздник реализуется при поддержке Росмолодёжи
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
