import { useState } from 'react'

interface Event {
  id: string
  date: string
  title: string
  description: string
  fullDescription?: string
  dateTime?: string
  location: string
}

const events: Event[] = [
  {
    id: 'event1',
    date: '10 июня',
    title: 'Хоровод у Чаши совместно с «Толока»',
    description: 'У Центра семьи «Казан» состоится большой хоровод, который объединит представителей разных национальностей и культур.',
    fullDescription: 'У Центра семьи «Казан» состоится большой хоровод, который объединит представителей разных национальностей и культур. В событии примут участие около 300 человек.',
    location: 'Центр семьи «Казан» / территория у Чаши',
  },
  {
    id: 'event2',
    date: '11 июня',
    title: 'Дискуссия «Казанская HoReCa сегодня: новые форматы, запросы гостей и перспективы развития индустрии»',
    description: 'С экспертами индустрии участники обсудят, как развивается локальная HoReCa, какие новые форматы появляются в Казани.',
    fullDescription: `С экспертами индустрии участники обсудят, как развивается локальная HoReCa, какие новые форматы появляются в Казани, как меняются запросы гостей и с какими вызовами специалисты сталкиваются каждый день.

Спикерами выступят эксперты индустрии, среди которых:

Динара Файсханова,
Арт-директор гастрокомплекса Кайт
Маркетинг в HoReCa

Юлия Туранова,
PR-директор Московского рынка

Анна Кондикова,
основатель агентства по маркетингу для HoReCa «Маркетинг со вкусом», бренд-маркетолог Branch group и ведущая подкаста о гастроиндустрии Казани

Ева Власова,
региональный менеджер по маркетингу и PR бренда PIMS

София Ворошилова,
маркетолог Дринкит, ex SMM Московский рынок, маркетолог группы компаний ИТLE, Cчастье в Казани

Юра Поладьян,
Шеф-кондитер нового Театра Камала и ресторана Сайяр, лучший кондитер республики 2024/2025 по версии WHERE TO EAT, гастрокритик`,
    dateTime: '11 июня, 18:00',
    location: 'Экстрим-парк «УРАМ», Кремлевская Набережная, 33',
  },
  {
    id: 'event3',
    date: '15 июня',
    title: 'Турнир по бильярду в «Основании»',
    description: 'В «Основании» пройдет любительский турнир по бильярду, рассчитанный на 16 участников.',
    fullDescription: `В «Основании» пройдет любительский турнир по бильярду, рассчитанный на 16 участников.

Победитель турнира получит 5 000 рублей, участники, занявшие второе и третье места, — 3 000 и 2 000 рублей соответственно.`,
    dateTime: '15 июня, 19:00',
    location: '«Основание», ул. Баумана, 9А',
  },
  {
    id: 'event4',
    date: '17 июня',
    title: 'Кофейная лекция в проекте «плюс»',
    description: 'В проекте «плюс» пройдет лекция о кофе и современной кофейной культуре.',
    fullDescription: `В проекте «плюс» пройдет лекция о кофе и современной кофейной культуре.

Участники узнают, где и как растет кофе, какие этапы он проходит перед тем, как оказаться в чашке, и что означает формат кофейни третьей волны.`,
    dateTime: '17 июня, 18:00',
    location: 'проект «плюс», ул. Шаляпина, 26',
  },
  {
    id: 'event5',
    date: '19 июня',
    title: 'Лекция по фото «Креативность как главный навык будущего»',
    description: 'Участников ждет встреча о креативности и фэшн-фотографии вместе с Дилюсой Шайхвалеевой.',
    fullDescription: `Участников ждет встреча о креативности и фэшн-фотографии вместе с Дилюсой Шайхвалеевой, которая снимает для GQ, Bazaar, Playboy и L'Officiel.`,
    dateTime: '19 июня, 18:00',
    location: 'кофейня «Фильтр», ул. Шаляпина, 26',
  },
]

export default function PromoEvents() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const toggleEvent = (id: string) => {
    setExpandedEvent(expandedEvent === id ? null : id)
  }

  return (
    <section
      id="promo"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(80px, 12vh, 120px) 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
        }}
      >
        {/* БЛОК 1: Заголовок и описание */}
        <div style={{ marginBottom: 'clamp(40px, 6vh, 60px)' }}>
          <h2
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.1,
              color: '#F18500',
              margin: '0 0 16px 0',
              letterSpacing: '-0.01em',
            }}
          >
            ПРОМО-СОБЫТИЯ
          </h2>
          <h3
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(18px, 1.8vw, 24px)',
              fontWeight: 600,
              lineHeight: 1.3,
              color: 'rgba(26,10,0,0.9)',
              margin: '0 0 16px 0',
            }}
          >
            События в преддверии Дня молодёжи в гастропроектах
          </h3>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(26,10,0,0.8)',
              margin: 0,
              maxWidth: 800,
            }}
          >
            Подготовили для тебя насыщенную программу на июнь. В городских пространствах и гастропроектах пройдут несколько событий.
          </p>
        </div>

        {/* БЛОК 2: Таймлайн событий */}
        <div
          style={{
            position: 'relative',
            paddingLeft: 'clamp(40px, 5vw, 80px)',
          }}
        >
          {/* Вертикальная линия таймлайна */}
          <div
            style={{
              position: 'absolute',
              left: 'clamp(15px, 2vw, 24px)',
              top: 0,
              bottom: 0,
              width: 3,
              background: 'linear-gradient(180deg, #E8362D 0%, #F18500 50%, #FFDF00 100%)',
              borderRadius: 2,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {events.map((event, index) => (
              <div
                key={event.id}
                style={{
                  position: 'relative',
                }}
              >
                {/* Точка на таймлайне */}
                <div
                  style={{
                    position: 'absolute',
                    left: 'calc(-1 * (clamp(40px, 5vw, 80px) - clamp(15px, 2vw, 24px)) - 5px)',
                    top: 24,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: index % 4 === 0 ? '#E8362D' : index % 4 === 1 ? '#F18500' : index % 4 === 2 ? '#FFDF00' : '#BF00FF',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
                    zIndex: 1,
                  }}
                />

                {/* Карточка события */}
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(232,54,45,0.12)',
                    borderRadius: 12,
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{ padding: 24 }}>
                    {/* Дата */}
                    <div
                      style={{
                        display: 'inline-block',
                        fontFamily: '"Dela Gothic One", cursive',
                        fontSize: 14,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        background: index % 4 === 0 ? '#E8362D' : index % 4 === 1 ? '#F18500' : index % 4 === 2 ? '#FFDF00' : '#BF00FF',
                        padding: '6px 16px',
                        borderRadius: 20,
                        marginBottom: 16,
                      }}
                    >
                      {event.date}
                    </div>

                    {/* Название */}
                    <h3
                      style={{
                        fontFamily: '"Dela Gothic One", cursive',
                        fontSize: 'clamp(18px, 2vw, 22px)',
                        lineHeight: 1.3,
                        color: '#000000',
                        margin: '0 0 12px 0',
                      }}
                    >
                      {event.title}
                    </h3>

                    {/* Краткое описание */}
                    <p
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: 'rgba(26,10,0,0.7)',
                        margin: '0 0 16px 0',
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Место */}
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: 'rgba(26,10,0,0.6)',
                        marginBottom: 16,
                      }}
                    >
                      {event.location}
                    </div>

                    {/* Кнопка "Подробнее" */}
                    <button
                      onClick={() => toggleEvent(event.id)}
                      style={{
                        background: expandedEvent === event.id ? 'rgba(232,54,45,0.1)' : 'transparent',
                        color: '#E8362D',
                        border: '1px solid #E8362D',
                        borderRadius: 10,
                        padding: '10px 20px',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        letterSpacing: '0.02em',
                      }}
                      onMouseEnter={e => {
                        ;(e.target as HTMLElement).style.background = '#E8362D'
                        ;(e.target as HTMLElement).style.color = '#FFFFFF'
                      }}
                      onMouseLeave={e => {
                        ;(e.target as HTMLElement).style.background = expandedEvent === event.id ? 'rgba(232,54,45,0.1)' : 'transparent'
                        ;(e.target as HTMLElement).style.color = '#E8362D'
                      }}
                    >
                      {expandedEvent === event.id ? 'Свернуть' : 'Подробнее'}
                    </button>
                  </div>

                  {/* Раскрывающийся блок с полной информацией */}
                  {expandedEvent === event.id && (
                    <div
                      style={{
                        borderTop: '1px solid rgba(232,54,45,0.12)',
                        padding: 24,
                        background: 'rgba(232,54,45,0.02)',
                      }}
                    >
                      {event.fullDescription && (
                        <div style={{ marginBottom: 20 }}>
                          <h4
                            style={{
                              fontFamily: '"Inter", sans-serif',
                              fontSize: 13,
                              fontWeight: 600,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: 'rgba(26,10,0,0.5)',
                              margin: '0 0 12px 0',
                            }}
                          >
                            Подробное описание
                          </h4>
                          <p
                            style={{
                              fontFamily: '"Inter", sans-serif',
                              fontSize: 15,
                              lineHeight: 1.7,
                              color: 'rgba(26,10,0,0.85)',
                              margin: 0,
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {event.fullDescription}
                          </p>
                        </div>
                      )}

                      {event.dateTime && (
                        <div style={{ marginBottom: 12 }}>
                          <div
                            style={{
                              fontFamily: '"Inter", sans-serif',
                              fontSize: 13,
                              fontWeight: 600,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: 'rgba(26,10,0,0.5)',
                              marginBottom: 6,
                            }}
                          >
                            Дата и время
                          </div>
                          <div
                            style={{
                              fontFamily: '"Inter", sans-serif',
                              fontSize: 15,
                              lineHeight: 1.6,
                              color: 'rgba(26,10,0,0.85)',
                            }}
                          >
                            {event.dateTime}
                          </div>
                        </div>
                      )}

                      <div>
                        <div
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: 13,
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'rgba(26,10,0,0.5)',
                            marginBottom: 6,
                          }}
                        >
                          Место проведения
                        </div>
                        <div
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: 15,
                            lineHeight: 1.6,
                            color: 'rgba(26,10,0,0.85)',
                          }}
                        >
                          {event.location}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* БЛОК РЕГИСТРАЦИИ */}
        <div
          style={{
            marginTop: 'clamp(48px, 8vh, 64px)',
            background: 'linear-gradient(135deg, rgba(232,54,45,0.06) 0%, rgba(241,133,0,0.06) 100%)',
            border: '2px solid #E8362D',
            borderRadius: 12,
            padding: 'clamp(32px, 5vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Декоративный элемент */}
          <div
            style={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 120,
              height: 120,
              background: 'radial-gradient(circle, rgba(232,54,45,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <h3
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                lineHeight: 1.3,
                color: '#E8362D',
                margin: '0 0 20px 0',
              }}
            >
              Регистрация на события
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 32,
                alignItems: 'center',
              }}
              className="registration-grid"
            >
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 'clamp(15px, 1.3vw, 18px)',
                  lineHeight: 1.7,
                  color: 'rgba(26,10,0,0.85)',
                  margin: 0,
                }}
              >
                Участие во всех мероприятиях бесплатное по предварительной регистрации на День молодёжи и на каждое событие отдельно по ссылке:{' '}
                <a
                  href="https://den-molodezhi-2026.timepad.ru/event/4007696"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#E8362D',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(232,54,45,0.3)',
                    transition: 'text-decoration-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    ;(e.target as HTMLElement).style.textDecorationColor = '#E8362D'
                  }}
                  onMouseLeave={e => {
                    ;(e.target as HTMLElement).style.textDecorationColor = 'rgba(232,54,45,0.3)'
                  }}
                >
                  den-molodezhi-2026.timepad.ru/event/4007696
                </a>
              </p>
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  lineHeight: 1.6,
                  color: 'rgba(26,10,0,0.7)',
                  margin: 0,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                Количество мест строго ограничено.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .registration-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          section#promo > div {
            padding: 0 24px;
          }
        }
      `}</style>
    </section>
  )
}
