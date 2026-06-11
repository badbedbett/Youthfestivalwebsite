import { useState } from 'react'

const faqs = [
  {
    q: 'Как добраться до Экстрим-парка «УРАМ»?',
    a: 'Экстрим-парк «УРАМ» расположен по адресу: Кремлёвская наб., 33, Казань. Удобнее всего добираться на метро до станции «Кремлёвская», затем пешком ~7 минут. Также работают трамваи №5 и №6. В день праздника будут организованы дополнительные автобусные маршруты от центра города.',
  },
  {
    q: 'Вход на День молодёжи платный?',
    a: 'Нет! Вход на праздник абсолютно бесплатный для всех. Для участия в отдельных соревнованиях (баскетбол 3×3, воркаут и другие) потребуется предварительная регистрация — это тоже бесплатно.',
  },
  {
    q: 'Для какого возраста мероприятие?',
    a: 'День молодёжи открыт для всех! Основная программа рассчитана на аудиторию 14–35 лет, однако приглашаются люди всех возрастов. Дети до 14 лет допускаются в сопровождении взрослых.',
  },
  {
    q: 'Будут ли трансляции мероприятия?',
    a: 'Да! Прямая трансляция концерта и ключевых событий будет доступна в официальных соцсетях: ВКонтакте, YouTube, Telegram. Ссылки появятся на деньмолодёжи.рф ближе к дате.',
  },
  {
    q: 'Как стать волонтёром праздника?',
    a: 'Заполните анкету на сайте деньмолодёжи.рф в разделе «Волонтёры». Принимаются заявки от граждан РФ от 16 лет. Волонтёры получат фирменный мерч, питание и сертификат участника.',
  },
  {
    q: 'Что взять с собой?',
    a: 'Удостоверение личности, удобную одежду и обувь, солнцезащитный крем и головной убор (мероприятие на открытом воздухе), заряженный телефон. На площадке работают точки с едой, медпункт и пункты зарядки гаджетов.',
  },
  {
    q: 'Как принять участие в соревнованиях?',
    a: 'Зарегистрируйтесь на сайте деньмолодёжи.рф за 3 недели до события. Количество мест ограничено. Следите за анонсами в официальных соцсетях.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      id="faq"
      style={{
        background: '#FFFFFF',
        padding: '100px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          background: 'linear-gradient(to bottom, #BF00FF, #E8362D, #F18500, #FFDF00)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header — full width, above accordion */}
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
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
              Есть вопросы?
            </span>
          </div>
          <h2
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 0.92,
              color: '#000000',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="gradient-text-faq">ВОПРОСЫ</span>
          </h2>
        </div>

        {/* Accordion — full width */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                style={{
                  background: isOpen ? '#FFFFFF' : '#F5F5F5',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: isOpen ? '2px solid #F18500' : '2px solid rgba(232,54,45,0.1)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 'clamp(14px, 1.3vw, 16px)',
                      color: '#000000',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      border: `2px solid ${isOpen ? '#F18500' : 'rgba(241,133,0,0.3)'}`,
                      background: isOpen ? '#F18500' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: isOpen ? '#FFFFFF' : '#F18500',
                      fontSize: 18,
                    }}
                  >
                    +
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ padding: '0 24px 22px' }}>
                    <div style={{ height: 1, background: 'rgba(241,133,0,0.15)', marginBottom: 14 }} />
                    <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 15, color: '#333333', lineHeight: 1.75, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact note */}
        <div style={{ marginTop: 40, fontFamily: '"Inter", sans-serif', fontSize: 14, color: '#666666', lineHeight: 1.6 }}>
          Не нашли ответ? Напишите нам —{' '}
          <a href="mailto:info@деньмолодёжи.рф" style={{ color: '#E8362D', fontWeight: 600, textDecoration: 'none' }}>
            info@деньмолодёжи.рф
          </a>
        </div>
      </div>
    </section>
  )
}
