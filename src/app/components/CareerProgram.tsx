import { useState } from 'react'

const activities = [
  {
    id: 1,
    title: 'Город работодателей',
    time: '11:00 – 19:00',
    place: 'Площадка карьеры на зелёном поле',
    desc: `Площадка Мэрии Казани и hh это:

— это пространство, где встречаются идеи, люди и возможности;

— шанс для молодых специалистов начать карьеру, а для работодателей — найти будущих лидеров;

— партнёрство власти, бизнеса и сообществ, помогающее формировать город будущих работодателей.`,
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Мэрия Казани', 'hh.ru'],
  },
  {
    id: 2,
    title: 'Итоги конкурса «Работодатели Казани: выбор молодёжи» + дискуссия с победителями',
    time: '10:00 – 12:00',
    place: 'Площадка карьеры на зелёном поле',
    desc: '',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Конкурс', 'Дискуссия'],
  },
  {
    id: 3,
    title: 'Карьерное место (собесединг)',
    time: 'Каждые 3 часа',
    place: 'Площадка карьеры на зелёном поле',
    desc: '',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Собеседование', 'Карьера'],
  },
  {
    id: 4,
    title: 'Квест по профессиям',
    time: '10:00 – 18:00',
    place: 'Площадка карьеры на зелёном поле',
    desc: `Предлагаем молодёжи попробовать себя в реальной работе на этапах квеста и заодно получить практический навык:

— участники проходят этапы и собирают свою коллекцию навыков в виде элементов кастомного мерча — обвеса и вязаной сумки.

— на этапах квеста работодатели показывают реальные вакансии, открытые в их компаниях и опубликованные на hh.ru.

— цель — дать молодёжи понимание, какие навыки сегодня требуются работодателям, и на практике эти навыки применить.`,
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=480&h=260&fit=crop&auto=format',
    partners: ['hh.ru'] as string[] | null,
    tags: ['Квест', 'Навыки', 'Мерч'],
  },
  {
    id: 5,
    title: 'Дизайн-конкурс спецодежды «Профессия» + показ индустриальной моды',
    time: 'Время уточняется',
    place: 'Площадка карьеры на зелёном поле',
    desc: '',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Дизайн', 'Мода', 'Конкурс'],
  },
  {
    id: 6,
    title: 'Полезная программа в шатре возможностей (питч-сессии, мастер-классы)',
    time: '12:30 – 19:00',
    place: 'Площадка карьеры на зелёном поле',
    desc: `Отказались от лекций с презентациями. Сделали выступления работодателей в шатре интерактивными и современными:

— каждый работодатель за 3–5 минут рассказывает, почему начинать карьеру стоит именно у него.

— задача — привлечь внимание, получить обратную связь, найти кандидатов в сжатые сроки.

— механика обратной связи: зал голосует табличками «Хочу на собесединг» / «Хочу тут работать». После выступления ведущий собирает голоса и напоминает про Карьерные дропы, где можно лично встретиться с понравившимся работодателем.`,
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Питч', 'Мастер-класс', 'Интерактив'],
  },
  {
    id: 7,
    title: 'Карьерное ток-шоу «Сплетни о работе»',
    time: 'Время уточняется',
    place: 'Площадка карьеры на зелёном поле',
    desc: `Собираем сплетни про белых и синих воротничков, про работу в IT и на заводах. Выделяем несколько ключевых и запускаем их раскрутку прямо с залом.

— на шоу приглашены работодатели — вместе с соискателями они ищут истоки сплетен, разбирают примеры. До эфира все сплетни показываем работодателям, чтобы они подготовили реальные кейсы из практики своих компаний.

— соискатели высказываются со свободным микрофоном.`,
    img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Ток-шоу', 'IT', 'Производство'],
  },
  {
    id: 8,
    title: 'Карьерные консультации',
    time: 'Время уточняется',
    place: 'Площадка карьеры на зелёном поле',
    desc: `20 минут с экспертом hh.ru или представителем Мэрии Казани.

— разбирают конкретно вас: резюме, направления, точки роста. Без общих фраз.`,
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=480&h=260&fit=crop&auto=format',
    partners: ['hh.ru', 'Мэрия Казани'] as string[] | null,
    tags: ['Консультация', 'Резюме', '20 минут'],
  },
  {
    id: 9,
    title: 'Всероссийская ярмарка трудоустройства',
    time: '10:00 – 20:00',
    place: 'Площадка карьеры под мостом Миллениум',
    desc: 'Профориентация будет представлена как приключение.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Всероссийская', 'Трудоустройство'],
  },
  {
    id: 10,
    title: 'VR-тренажёры настоящих профессий',
    time: '10:00 – 20:00',
    place: 'Площадка карьеры под мостом Миллениум',
    desc: '',
    img: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['VR', 'Профессии'],
  },
  {
    id: 11,
    title: 'Выставка специализированной техники',
    time: '10:00 – 20:00',
    place: 'Площадка карьеры под мостом Миллениум',
    desc: '',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Техника', 'Выставка'],
  },
  {
    id: 12,
    title: 'Магазин профессий',
    time: '10:00 – 20:00',
    place: 'Площадка карьеры под мостом Миллениум',
    desc: 'Профориентационная фотозона в виде шести двухметровых прозрачных витрин, стилизованных под упаковки с игрушками. Внутри каждой размещён костюм конкретной профессии. Все эти костюмы можно примерить и сделать памятные фотографии.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Фотозона', 'Профориентация', 'Костюмы'],
  },
  {
    id: 13,
    title: 'Точка заботы',
    time: '10:00 – 20:00',
    place: 'Площадка карьеры под мостом Миллениум',
    desc: 'Место, где можно будет снизить свою тревогу или просто отдохнуть.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Отдых', 'Психология'],
  },
  {
    id: 14,
    title: 'Мистический салон «Натальная карьера»',
    time: '10:00 – 20:00',
    place: 'Площадка карьеры под мостом Миллениум',
    desc: '',
    img: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Интерактив', 'Профориентация'],
  },
]

export default function CareerProgram() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section
      id="career-program"
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
          background: 'linear-gradient(to bottom, #E8362D, #F18500, #FFDF00)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            marginBottom: 56,
            alignItems: 'end',
          }}
          className="sport-header"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 36,
                  height: 4,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #E8362D, #F18500)',
                }}
              />
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 12,
                  color: '#E8362D',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Детальная программа
              </span>
            </div>
            <h2
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(42px, 6vw, 88px)',
                lineHeight: 0.9,
                margin: 0,
                letterSpacing: '-0.02em',
                color: '#000000',
              }}
            >
              <span className="gradient-text-warm">КАРЬЕРА</span>
            </h2>
          </div>
          <div>
            <div
              style={{
                fontFamily: '"Dela Gothic One", cursive',
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                color: 'rgba(232,54,45,0.15)',
                letterSpacing: '0.05em',
              }}
            >
              10:00 – 20:00
            </div>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 15,
                color: '#666666',
                lineHeight: 1.6,
                marginTop: 8,
              }}
            >
              экстрим-парк «УРАМ» · Кремлёвская набережная, 33
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {activities.map((act) => {
            const isOpen = openId === act.id
            return (
              <div
                key={act.id}
                style={{
                  background: '#F5F5F5',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: isOpen ? '2px solid #F18500' : '2px solid rgba(232,54,45,0.1)',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : act.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '22px 26px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto',
                    gap: 16,
                    alignItems: 'center',
                    textAlign: 'left',
                  }}
                  className="accordion-btn"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span
                      style={{
                        fontFamily: '"Dela Gothic One", cursive',
                        fontSize: 'clamp(14px, 1.4vw, 17px)',
                        color: '#000000',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                      }}
                    >
                      {act.title}
                    </span>
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, color: '#666666' }}>
                      {act.place}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 14,
                      color: '#E8362D',
                      letterSpacing: '0.02em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {act.time}
                  </div>

                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      border: `2px solid ${isOpen ? '#F18500' : 'rgba(232,54,45,0.25)'}`,
                      background: isOpen ? '#F18500' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.25s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: isOpen ? '#FFFFFF' : '#E8362D',
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ padding: '0 26px 26px', paddingTop: 4 }}>
                    <div style={{ height: 1, background: 'rgba(232,54,45,0.12)', marginBottom: 20 }} />

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 260px',
                        gap: 24,
                        alignItems: 'start',
                      }}
                      className="accordion-inner"
                    >
                      <div>
                        {act.desc ? (
                          <p
                            style={{
                              fontFamily: '"Inter", sans-serif',
                              fontSize: 15,
                              color: '#333333',
                              lineHeight: 1.75,
                              margin: '0 0 16px',
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {act.desc}
                          </p>
                        ) : null}

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: act.partners ? 16 : 0 }}>
                          {act.tags.map((tag, i) => (
                            <span
                              key={i}
                              style={{
                                background: '#FFFFFF',
                                border: '1.5px solid rgba(232,54,45,0.2)',
                                borderRadius: 100,
                                padding: '4px 14px',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: 12,
                                color: '#333333',
                                fontWeight: 500,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {act.partners && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                            <span
                              style={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: 11,
                                color: '#666666',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontWeight: 600,
                              }}
                            >
                              При поддержке:
                            </span>
                            {act.partners.map((p, i) => (
                              <div
                                key={i}
                                style={{
                                  background: '#FFFFFF',
                                  border: '2px solid #F18500',
                                  borderRadius: 8,
                                  padding: '6px 16px',
                                  fontFamily: '"Dela Gothic One", cursive',
                                  fontSize: 13,
                                  color: '#E8362D',
                                  letterSpacing: '0.04em',
                                }}
                              >
                                {p}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div style={{ borderRadius: 10, overflow: 'hidden', height: 160 }}>
                        <img
                          src={act.img}
                          alt={act.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sport-header { grid-template-columns: 1fr !important; }
          .accordion-btn { grid-template-columns: 1fr auto !important; }
          .accordion-btn > div:nth-child(2) { display: none; }
          .accordion-inner { grid-template-columns: 1fr !important; }
          .accordion-inner > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}
