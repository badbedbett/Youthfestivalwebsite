const tiers = [
  {
    key: 'org',
    label: 'Организаторы',
    accent: '#E8362D',
    partners: [
      { name: 'Министерство молодёжной политики РТ', short: 'МП РТ' },
      { name: 'Молодёжь Татарстана', short: 'МТ' },
      { name: 'Молодёжный центр Казань', short: 'МЦК' },
    ],
  },
  {
    key: 'federal',
    label: 'Федеральный партнёр',
    accent: '#E8362D',
    partners: [
      { name: 'Росмолодёжь', short: 'Росмолодёжь' },
    ],
  },
  {
    key: 'gold',
    label: 'Генеральные партнёры',
    accent: '#F18500',
    partners: [
      { name: 'Сбер 185', short: 'Сбер 185' },
      { name: 'Алабуга Политех', short: 'Алабуга Политех' },
      { name: 'УРАМ', short: 'УРАМ' },
    ],
  },
  {
    key: 'silver',
    label: 'Официальные партнёры',
    accent: '#FFDF00',
    partners: [
      { name: 'Билайн', short: 'Билайн' },
      { name: 'Enter', short: 'Enter' },
      { name: 'DFM Казань', short: 'DFM Казань' },
      { name: 'Казань ТВ', short: 'Казань ТВ' },
      { name: 'RT Татарстан', short: 'RT Татарстан' },
      { name: 'ProКазань', short: 'ProКазань' },
    ],
  },
]

export default function Partners() {
  return (
    <section
      id="partners"
      style={{
        background: '#F5F5F5',
        padding: '80px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: 'linear-gradient(90deg, #FFDF00, #F18500, #E8362D, #BF00FF)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #FFDF00, #F18500)',
              }}
            />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                color: '#F18500',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Вместе мы делаем праздник
            </span>
          </div>
          <h2
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 0.92,
              color: '#000000',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="gradient-text-full">ПАРТНЁРЫ</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {tiers.map(tier => (
            <div key={tier.key}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    background: tier.accent,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 11,
                    color: '#666666',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tier.label}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {tier.partners.map(p => (
                  <div
                    key={p.name}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: 12,
                      padding: tier.key === 'gold' ? '20px 32px' : '16px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: tier.key === 'gold' ? 160 : 130,
                      border: '2px solid transparent',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      cursor: 'default',
                      transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.15s',
                      position: 'relative',
                    }}
                    onMouseEnter={e => {
                      const t = e.currentTarget as HTMLElement
                      t.style.borderColor = tier.accent
                      t.style.boxShadow = `0 6px 20px ${tier.accent}28`
                      t.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      const t = e.currentTarget as HTMLElement
                      t.style.borderColor = 'transparent'
                      t.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                      t.style.transform = 'translateY(0)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        borderRadius: '10px 10px 0 0',
                        background: tier.accent,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: '"Dela Gothic One", cursive',
                        fontSize: tier.key === 'gold' ? 16 : 14,
                        color: '#000000',
                        letterSpacing: '-0.01em',
                        textAlign: 'center',
                        lineHeight: 1.3,
                      }}
                    >
                      {p.short}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
