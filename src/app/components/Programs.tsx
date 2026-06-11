import { useState } from 'react'

const programs = [
  {
    id: 1,
    title: 'Спорт',
    time: '10:00 – 19:00',
    desc: 'BMX, самокат, воркаут, паркур, ролики, баскетбол 3×3, джиу-джитсу и другие дисциплины.',
    color: '#E8362D',
    img: 'https://images.unsplash.com/photo-1769905228212-858fc034c051?w=560&h=340&fit=crop&auto=format',
    emoji: '🏆',
  },
  {
    id: 2,
    title: 'Патриотика',
    time: '10:00 – 19:00',
    desc: 'Выставки, встречи с ветеранами, мастер-классы по историческому фехтованию.',
    color: '#F18500',
    img: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=560&h=340&fit=crop&auto=format',
    emoji: '🛡️',
  },
  {
    id: 3,
    title: 'Карьера',
    time: '10:00 – 19:00',
    desc: 'Ярмарка вакансий, воркшопы от ведущих компаний страны, нетворкинг.',
    color: '#FFDF00',
    img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=560&h=340&fit=crop&auto=format',
    emoji: '💼',
  },
  {
    id: 4,
    title: 'Здоровье',
    time: '12:00 – 19:00',
    desc: 'Зона ЗОЖ, открытые тренировки, йога, медитация, нутрициологи.',
    color: '#BF00FF',
    img: 'https://images.unsplash.com/photo-1773693416417-4f8eb5dde699?w=560&h=340&fit=crop&auto=format',
    emoji: '⚡',
  },
  {
    id: 5,
    title: 'Образование',
    time: '13:00 – 19:00',
    desc: 'Лекции, дискуссии, демонстрация программ вузов и колледжей страны.',
    color: '#BF00FF',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=560&h=340&fit=crop&auto=format',
    emoji: '🎓',
  },
  {
    id: 6,
    title: 'Главная сцена',
    time: '13:00 – 22:00',
    desc: 'Концерты, шоу-программа, звёздные гости и большой финальный концерт.',
    color: '#E8362D',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=560&h=340&fit=crop&auto=format',
    emoji: '🎤',
  },
  {
    id: 7,
    title: 'Интерактивные площадки',
    time: '10:00 – 22:00',
    desc: 'VR-зоны, квесты, творческие мастерские, арт-объекты и перформансы.',
    color: '#F18500',
    img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=560&h=340&fit=crop&auto=format',
    emoji: '✨',
  },
  {
    id: 8,
    title: 'Партнёрские площадки',
    time: '10:00 – 22:00',
    desc: 'Пространства от ведущих партнёров: активности, розыгрыши, эксклюзив.',
    color: '#FFDF00',
    img: 'https://images.unsplash.com/photo-1742735190545-2d2c91c0f7a5?w=560&h=340&fit=crop&auto=format',
    emoji: '🤝',
  },
]

export default function Programs() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      id="programs"
      style={{
        background: '#F5F5F5',
        padding: '120px 48px',
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
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #F18500, #FFDF00)',
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
              8 направлений
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
            ПРОГРАММА
            <br />
            <span className="gradient-text-full">ПРАЗДНИКА</span>
          </h2>
        </div>

        {/* Static 4×2 grid — no carousel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
          className="programs-grid"
        >
          {programs.map(p => (
            <div
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: '#FFFFFF',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: hoveredId === p.id
                  ? `0 20px 48px rgba(0,0,0,0.14), 0 0 0 2px ${p.color}`
                  : '0 4px 20px rgba(0,0,0,0.07)',
                transition: 'transform 0.25s, box-shadow 0.25s',
                transform: hoveredId === p.id ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
              }}
            >
              <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s',
                    transform: hoveredId === p.id ? 'scale(1.07)' : 'scale(1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.92) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 5,
                    background: p.color,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    background: p.color,
                    borderRadius: 100,
                    padding: '4px 12px',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 11,
                    color: p.color === '#FFDF00' ? '#000000' : '#FFFFFF',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                  }}
                >
                  {p.time}
                </div>
              </div>

              <div style={{ padding: '18px 20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <h3
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 17,
                      color: '#000000',
                      margin: 0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 13,
                    color: '#333333',
                    lineHeight: 1.6,
                    margin: '0 0 16px',
                  }}
                >
                  {p.desc}
                </p>
                <button
                  onClick={() => {
                    const el = document.querySelector('#sport-program')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{
                    background: p.color,
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 18px',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 12,
                    color: p.color === '#FFDF00' ? '#000000' : '#FFFFFF',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .programs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
