import GiveawayPartnerLogos from './GiveawayPartnerLogos'

export default function Giveaway() {
  const handleParticipate = () => {
    // Переход в Telegram-канал
    window.open('https://t.me/your_channel', '_blank')
  }

  return (
    <section
      id="giveaway"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(80px, 12vh, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Декоративный элемент — цветная линия сверху */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'linear-gradient(90deg, #BF00FF 0%, #E8362D 35%, #F18500 65%, #FFDF00 100%)',
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
        }}
      >
        {/* Главный экран */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 'clamp(64px, 10vh, 96px)',
          }}
        >
          {/* Акцентная плашка с заголовком и суммой */}
          <div
            style={{
              background: 'linear-gradient(105deg, #BF00FF 0%, #E8362D 28%, #F18500 62%, #FFDF00 100%)',
              borderRadius: 20,
              padding: 'clamp(40px, 6vh, 64px) clamp(40px, 5vw, 64px)',
              marginBottom: 'clamp(40px, 6vh, 60px)',
            }}
          >
            <h2
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                lineHeight: 1.1,
                color: '#FFFFFF',
                margin: '0 0 20px 0',
                letterSpacing: '-0.01em',
              }}
            >
              БОЛЬШОЙ РОЗЫГРЫШ
            </h2>
            <p
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(20px, 2.5vw, 32px)',
                lineHeight: 1.2,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Дарим 250 000 ₽ в гастропроекты Казани!
            </p>
          </div>

          {/* Описание */}
          <div
            style={{
              marginBottom: 'clamp(40px, 6vh, 56px)',
            }}
          >
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                lineHeight: 1.7,
                color: 'rgba(0,0,0,0.85)',
                margin: '0 0 24px 0',
              }}
            >
              В преддверии главного молодёжного события этого лета мы объединились с городскими гастропроектами и дарим тебе сертификаты в рестораны, кафе и кофейни Казани.
            </p>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                lineHeight: 1.7,
                color: 'rgba(0,0,0,0.85)',
                margin: '0 0 24px 0',
              }}
            >
              Принять участие можно в нашем Telegram-канале — ищи ссылку в закрепе.
            </p>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                lineHeight: 1.7,
                color: 'rgba(0,0,0,0.85)',
                margin: 0,
                fontWeight: 600,
              }}
            >
              Счастливчики заберут депозит на 10 000 ₽ в лучшие заведения города.
            </p>
          </div>

          {/* CTA-кнопка */}
          <button
            onClick={handleParticipate}
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(14px, 1.4vw, 18px)',
              letterSpacing: '0.05em',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #E8362D 0%, #F18500 100%)',
              border: 'none',
              borderRadius: 12,
              padding: 'clamp(18px, 2.5vh, 24px) clamp(40px, 6vw, 64px)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 6px 24px rgba(232,54,45,0.35)',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget as HTMLElement
              btn.style.transform = 'translateY(-3px) scale(1.03)'
              btn.style.boxShadow = '0 10px 32px rgba(232,54,45,0.45)'
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget as HTMLElement
              btn.style.transform = 'translateY(0) scale(1)'
              btn.style.boxShadow = '0 6px 24px rgba(232,54,45,0.35)'
            }}
          >
            ПРИНЯТЬ УЧАСТИЕ
          </button>
        </div>

        {/* Блок партнёров розыгрыша */}
        <div>
          <h3
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(24px, 3vw, 40px)',
              lineHeight: 1.1,
              color: '#000000',
              margin: '0 0 clamp(32px, 5vh, 48px) 0',
              letterSpacing: '-0.01em',
            }}
          >
            ПАРТНЕРЫ РОЗЫГРЫША
          </h3>

          <GiveawayPartnerLogos />
        </div>
      </div>
    </section>
  )
}