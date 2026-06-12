import { useState } from 'react'

interface Event {
  id: string
  date: string
  title: string
  description: string
  fullDescription?: string
  dateTime: string
  location: string
}

const events: Event[] = [
  {
    id: 'event1',
    date: '10 июня',
    title: 'Хоровод у Чаши совместно с «Толока»',
    description:
      'У Центра семьи «Казан» состоится большой хоровод, который объединит представителей разных национальностей и культур.',
    fullDescription:
      'В событии примут участие около 300 человек.',
    dateTime: '10 июня, 10:00',
    location: 'Центр семьи «Казан» / территория у Чаши',
  },
  {
    id: 'event2',
    date: '10 июня',
    title: 'Дискуссия «Казанская HoReCa сегодня: новые форматы, запросы гостей и перспективы развития индустрии»',
    description:
      'С экспертами индустрии участники обсудят, как развивается локальная HoReCa, какие новые форматы появляются в Казани.',
    fullDescription: `С экспертами индустрии участники обсудят, как развивается локальная HoReCa, какие новые форматы появляются в Казани, как меняются запросы гостей и с какими вызовами специалисты сталкиваются каждый день.

Спикерами выступят эксперты индустрии, среди которых:

Динара Файсханова — арт-директор гастрокомплекса Кайт, маркетинг в HoReCa

Юлия Туранова — PR-директор Московского рынка

Анна Кондикова — основатель агентства по маркетингу для HoReCa «Маркетинг со вкусом», бренд-маркетолог Branch group и ведущая подкаста о гастроиндустрии Казани

Ева Власова — региональный менеджер по маркетингу и PR бренда PIMS

София Ворошилова — маркетолог Дринкит, ex SMM Московский рынок, маркетолог группы компаний ITALE, «Счастье» в Казани

Юра Поладьян — шеф-кондитер нового Театра Камала и ресторана Сайяр, лучший кондитер республики 2024/2025 по версии WHERE TO EAT, гастрокритик`,
    dateTime: '10 июня, 18:00',
    location: 'Экстрим-парк «УРАМ», Кремлевская Набережная, 33',
  },
  {
    id: 'event3',
    date: '15 июня',
    title: 'Турнир по бильярду в «Основании»',
    description: 'В «Основании» пройдет любительский турнир по бильярду, рассчитанный на 16 участников.',
    fullDescription: `Победитель турнира получит 5 000 рублей, участники, занявшие второе и третье места, — 3 000 и 2 000 рублей соответственно.`,
    dateTime: '15 июня, 19:00',
    location: '«Основание», ул. Баумана, 9А',
  },
  {
    id: 'event4',
    date: '17 июня',
    title: 'Кофейная лекция в проекте «плюс»',
    description: 'В проекте «плюс» пройдет лекция о кофе и современной кофейной культуре.',
    fullDescription: `Участники узнают, где и как растёт кофе, какие этапы он проходит перед тем, как оказаться в чашке, и что означает формат кофейни третьей волны.`,
    dateTime: '17 июня, 18:00',
    location: 'проект «плюс», ул. Шаляпина, 26',
  },
  {
    id: 'event5',
    date: '19 июня',
    title: 'Лекция по фото «Креативность как главный навык будущего»',
    description: 'Участников ждёт встреча о креативности и фэшн-фотографии вместе с Дилюсой Шайхвалеевой.',
    fullDescription: `Дилюса Шайхвалеева снимает для GQ, Bazaar, Playboy и L'Officiel.`,
    dateTime: '19 июня, 18:00',
    location: 'кофейня «Фильтр», ул. Шаляпина, 26',
  },
]

const badgeColors = ['#E8362D', '#F18500', '#FFDF00', '#BF00FF'] as const

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="promo-event-meta">
      <div className="promo-event-meta-label">{label}</div>
      <div className="promo-event-meta-value">{value}</div>
    </div>
  )
}

export default function PromoEvents() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  return (
    <section id="promo" className="promo-section">
      <div className="promo-inner">
        <div className="promo-header">
          <h2 className="promo-title">ПРОМО-СОБЫТИЯ</h2>
          <h3 className="promo-subtitle">События в преддверии Дня молодёжи в гастропроектах</h3>
          <p className="promo-intro">
            Подготовили для тебя насыщенную программу на июнь. В городских пространствах и гастропроектах пройдут
            несколько событий.
          </p>
        </div>

        <div className="promo-timeline">
          <div className="promo-timeline-line" aria-hidden />

          <div className="promo-events-list">
            {events.map((event, index) => {
              const isExpanded = expandedEvent === event.id
              const hasExtra = Boolean(event.fullDescription)

              return (
                <article key={event.id} className="promo-event-item">
                  <div
                    className="promo-event-dot"
                    style={{ background: badgeColors[index % badgeColors.length] }}
                    aria-hidden
                  />

                  <div className="promo-event-card">
                    <div
                      className="promo-event-date"
                      style={{ background: badgeColors[index % badgeColors.length] }}
                    >
                      {event.date}
                    </div>

                    <h3 className="promo-event-title">{event.title}</h3>
                    <p className="promo-event-description">{event.description}</p>
                    <p className="promo-event-location">{event.location}</p>

                    {hasExtra && (
                      <>
                        <button
                          type="button"
                          className={`promo-event-toggle${isExpanded ? ' promo-event-toggle--open' : ''}`}
                          onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? 'Свернуть' : 'Подробнее'}
                        </button>

                        {isExpanded && (
                          <div className="promo-event-extra">
                            <div className="promo-event-meta-grid">
                              <MetaBlock label="Дата и время" value={event.dateTime} />
                              <MetaBlock label="Место проведения" value={event.location} />
                            </div>
                            <p className="promo-event-extra-text">{event.fullDescription}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="promo-registration">
          <h3 className="promo-registration-title">Регистрация на события</h3>
          <div className="promo-registration-content">
            <p className="promo-registration-text">
              Участие во всех мероприятиях бесплатное по предварительной регистрации на День молодёжи и на каждое
              событие отдельно по ссылке:{' '}
              <a
                href="https://den-molodezhi-2026.timepad.ru/event/4007696"
                target="_blank"
                rel="noopener noreferrer"
                className="promo-registration-link"
              >
                den-molodezhi-2026.timepad.ru/event/4007696
              </a>
            </p>
            <p className="promo-registration-note">Количество мест строго ограничено.</p>
          </div>
        </div>
      </div>

      <style>{`
        .promo-section {
          background: #ffffff;
          padding: clamp(80px, 12vh, 120px) 0;
          position: relative;
        }

        .promo-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(24px, 4vw, 48px);
        }

        .promo-header {
          margin-bottom: clamp(40px, 6vh, 60px);
        }

        .promo-title {
          font-family: "Dela Gothic One", cursive;
          font-size: clamp(32px, 4.5vw, 56px);
          line-height: 1.1;
          color: #f18500;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }

        .promo-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(18px, 1.8vw, 24px);
          font-weight: 600;
          line-height: 1.3;
          color: rgba(26, 10, 0, 0.9);
          margin: 0 0 16px;
        }

        .promo-intro {
          font-family: "Inter", sans-serif;
          font-size: clamp(15px, 1.3vw, 18px);
          line-height: 1.7;
          color: rgba(26, 10, 0, 0.8);
          margin: 0;
          max-width: 800px;
        }

        .promo-timeline {
          position: relative;
          padding-left: clamp(36px, 5vw, 72px);
        }

        .promo-timeline-line {
          position: absolute;
          left: clamp(11px, 1.6vw, 18px);
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #e8362d 0%, #f18500 50%, #ffdf00 100%);
          border-radius: 2px;
        }

        .promo-events-list {
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 3vw, 28px);
        }

        .promo-event-item {
          position: relative;
        }

        .promo-event-dot {
          position: absolute;
          left: calc(-1 * clamp(36px, 5vw, 72px) + clamp(11px, 1.6vw, 18px) - 6px);
          top: 28px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
          z-index: 1;
        }

        .promo-event-card {
          background: #ffffff;
          border: 1px solid rgba(232, 54, 45, 0.12);
          border-radius: 12px;
          padding: clamp(20px, 3vw, 28px);
        }

        .promo-event-date {
          display: inline-block;
          font-family: "Dela Gothic One", cursive;
          font-size: 13px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 14px;
        }

        .promo-event-title {
          font-family: "Dela Gothic One", cursive;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.3;
          color: #000000;
          margin: 0 0 12px;
        }

        .promo-event-description {
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(26, 10, 0, 0.72);
          margin: 0 0 10px;
        }

        .promo-event-location {
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(26, 10, 0, 0.5);
          margin: 0 0 18px;
        }

        .promo-event-meta-grid {
          display: grid;
          gap: 14px;
          margin-bottom: 16px;
        }

        .promo-event-meta-label {
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(26, 10, 0, 0.45);
          margin-bottom: 4px;
        }

        .promo-event-meta-value {
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.55;
          color: rgba(26, 10, 0, 0.85);
        }

        .promo-event-toggle {
          margin-top: 18px;
          background: transparent;
          color: #e8362d;
          border: 1px solid #e8362d;
          border-radius: 10px;
          padding: 10px 20px;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .promo-event-toggle:hover,
        .promo-event-toggle--open {
          background: rgba(232, 54, 45, 0.08);
        }

        .promo-event-extra {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(232, 54, 45, 0.1);
        }

        .promo-event-extra-text {
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(26, 10, 0, 0.85);
          margin: 0;
          white-space: pre-line;
        }

        .promo-registration {
          margin-top: clamp(48px, 8vh, 64px);
          background: linear-gradient(135deg, rgba(232, 54, 45, 0.06) 0%, rgba(241, 133, 0, 0.06) 100%);
          border: 2px solid #e8362d;
          border-radius: 12px;
          padding: clamp(28px, 5vw, 44px);
        }

        .promo-registration-title {
          font-family: "Dela Gothic One", cursive;
          font-size: clamp(20px, 2.5vw, 28px);
          line-height: 1.3;
          color: #e8362d;
          margin: 0 0 16px;
        }

        .promo-registration-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .promo-registration-text,
        .promo-registration-note {
          font-family: "Inter", sans-serif;
          margin: 0;
          line-height: 1.7;
        }

        .promo-registration-text {
          font-size: clamp(15px, 1.3vw, 18px);
          color: rgba(26, 10, 0, 0.85);
        }

        .promo-registration-note {
          font-size: clamp(14px, 1.2vw, 16px);
          color: rgba(26, 10, 0, 0.7);
          font-weight: 600;
        }

        .promo-registration-link {
          color: #e8362d;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: rgba(232, 54, 45, 0.35);
          word-break: break-all;
        }

        .promo-registration-link:hover {
          text-decoration-color: #e8362d;
        }
      `}</style>
    </section>
  )
}
