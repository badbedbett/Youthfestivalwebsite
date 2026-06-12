export default function About() {
  const handleRegistration = () => {
    // Переход на форму регистрации
    window.open('https://den-molodezhi-2026.timepad.ru/event/4025106/', '_blank')
  }

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(105deg, #BF00FF 0%, #E8362D 28%, #F18500 62%, #FFDF00 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Content container */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          padding: 'clamp(100px, 14vh, 116px) clamp(20px, 5vw, 48px) 80px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(40px, 6vh, 64px)',
        }}
      >
        {/* Main heading */}
        <h1
          style={{
            fontFamily: '"Dela Gothic One", cursive',
            fontSize: 'clamp(32px, 6vw, 76px)',
            lineHeight: 0.92,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.02em',
            textShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          ДЕНЬ МОЛОДЁЖИ
        </h1>

        {/* Two Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(48px, 8vw, 80px)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column - Date and Location */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vh, 32px)' }}>
            <h2
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(28px, 4vw, 56px)',
                lineHeight: 1,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              27 ИЮНЯ
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 'clamp(18px, 1.8vw, 24px)',
                  lineHeight: 1.4,
                  color: '#FFFFFF',
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Экстрим-парк «УРАМ»
              </p>
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 'clamp(18px, 1.8vw, 24px)',
                  lineHeight: 1.4,
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0,
                }}
              >
                Кремлевская набережная, 33
              </p>
            </div>

            {/* CTA Button */}
            <div style={{ marginTop: 'clamp(16px, 2vh, 24px)' }}>
              <button
                onClick={handleRegistration}
                style={{
                  fontFamily: '"Dela Gothic One", cursive',
                  fontSize: 'clamp(14px, 1.4vw, 18px)',
                  letterSpacing: '0.05em',
                  color: '#000000',
                  background: '#FFDF00',
                  border: 'none',
                  borderRadius: 12,
                  padding: 'clamp(18px, 2.5vh, 24px) clamp(48px, 7vw, 72px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
                }}
                onMouseEnter={e => {
                  const btn = e.currentTarget as HTMLElement
                  btn.style.transform = 'translateY(-3px) scale(1.03)'
                  btn.style.boxShadow = '0 10px 32px rgba(0,0,0,0.35)'
                  btn.style.background = '#FFE94D'
                }}
                onMouseLeave={e => {
                  const btn = e.currentTarget as HTMLElement
                  btn.style.transform = 'translateY(0) scale(1)'
                  btn.style.boxShadow = '0 6px 24px rgba(0,0,0,0.25)'
                  btn.style.background = '#FFDF00'
                }}
              >
                РЕГИСТРАЦИЯ
              </button>
            </div>
          </div>

          {/* Right Column - Description */}
          <div>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.95)',
                margin: 0,
              }}
            >
              27 июня в Казани экстрим-парк «УРАМ» станет главной площадкой Дня молодёжи Татарстана, объединив четыре ключевых смысла: «Знай», «Люби», «Гордись» и «Приумножай». Концепция задаст личный маршрут для каждого молодого человека — от новых знаний и уважения к традициям до воплощения идей в реальные проекты.
              <br />
              <br />
              В тематических пространствах («Единство», «Мечта», «Гордость» и «Молодость») гостей ждут лектории о бизнесе и медиа, карьерные встречи, грантовые питч-сессии, контесты по скейтбордингу и BMX, турнир по стритболу, маркет локальных брендов, а также зоны здоровья с йогой и первой помощью.
              <br />
              <br />
              Завершится праздник концертом с хедлайнером.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: clamp(32px, 5vh, 48px) !important;
          }
        }
      `}</style>
    </section>
  )
}
