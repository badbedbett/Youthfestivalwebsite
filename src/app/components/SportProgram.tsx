import { useState } from 'react'

const activities = [
  {
    id: 10,
    title: 'Серия открытых тренировок от студии «Яратам»',
    time: '10:00 – 14:00',
    place: 'Площадка ЗОЖ',
    desc: 'Студия «Яратам» открывает утренние тренировки для всех желающих. Зарядка, стрейчинг, функциональный тренинг и кардио на свежем воздухе.',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=480&h=260&fit=crop&auto=format',
    partners: ['Яратам'] as string[] | null,
    tags: ['Зарядка', 'Стрейчинг', 'Кардио'],
  },
  {
    id: 1,
    title: 'Соревнования и мастер-классы по BMX',
    time: '12:00 – 19:00',
    place: 'Эир-парк',
    desc: 'Профессиональные райдеры со всей страны покажут мастерство в трюках на BMX. Открытые мастер-классы для начинающих, квалификационные заезды и финальные соревнования по нескольким дисциплинам.',
    img: 'https://images.unsplash.com/photo-1555952238-7ebc8b1d5d05?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Фристайл', 'Парк', 'Стрит'],
  },
  {
    id: 2,
    title: 'Соревнования и мастер-классы по самокату',
    time: '12:00 – 19:00',
    place: 'Эир-парк',
    desc: 'Выступления топ-скутеристов страны. Соревнования в стиле фристайл: флэт, стрит, верт. Мастер-классы для начинающих от профессиональных инструкторов.',
    img: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Флэт', 'Стрит', 'Верт'],
  },
  {
    id: 3,
    title: 'Соревнования и мастер-классы по воркауту',
    time: '12:00 – 19:00',
    place: 'Воркаут-площадка',
    desc: 'Соревнования по воркауту в направлениях Статика, Динамика и Воркаут-фристайл. Мастер-классы по базовым элементам доступны для всех желающих.',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Статика', 'Динамика', 'Фристайл'],
  },
  {
    id: 4,
    title: 'Соревнования и мастер-класс по паркуру',
    time: '12:00 – 19:00',
    place: 'Площадка для паркура',
    desc: 'Соревнования по паркуру в направлении фриран для различных возрастных категорий. Жюри оценивает технику, скорость и зрелищность прохождения трассы.',
    img: 'https://images.unsplash.com/photo-1472740378865-80aab8e73251?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Фриран', 'Скорость', '16+'],
  },
  {
    id: 5,
    title: 'Турнир по баскетболу 3×3',
    time: '13:00 – 18:00',
    place: 'Стритбольные поля',
    desc: 'Главный стритбольный турнир праздника! Открытые соревнования по баскетболу 3×3 среди команд из Татарстана и других регионов России. Призовой фонд от партнёров. Для участия — предварительная регистрация (3+1 игрок).',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=480&h=260&fit=crop&auto=format',
    partners: ['УРАМ', 'Enter', 'Билайн'] as string[] | null,
    tags: ['Командный', 'Призовой фонд', '18+'],
  },
  {
    id: 9,
    title: 'Танцевальная площадка',
    time: '13:00 – 18:00',
    place: 'Бетонка',
    desc: 'Баттлы по хип-хопу, брейкингу и хаусу. Открытые сайфа, мастер-классы от приглашённых хореографов.',
    img: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Хип-хоп', 'Брейкинг', 'Хаус'],
  },
  {
    id: 6,
    title: 'Соревнования и мастер-класс по роликам',
    time: '14:00 – 15:00',
    place: 'Боул / Стрит-плаза',
    desc: 'Агрессивные ролики в стиле фристайл: категории боул и стрит. Показательные выступления профессиональных роллеров, обучающий мастер-класс для новичков.',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Боул', 'Стрит'],
  },
  {
    id: 7,
    title: 'Турнир по бразильскому джиу-джитсу',
    time: '14:00 – 18:00',
    place: 'Зеленая зона',
    desc: 'Открытый турнир по БЖЖ среди участников разных весовых и возрастных категорий. Судейство по правилам IBJJF. Показательный поединок в исполнении мастеров.',
    img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['IBJJF', 'Все категории'],
  },
  {
    id: 8,
    title: 'Соревнования по BMX — Стрит',
    time: '15:00 – 17:00',
    place: 'Стрит-плаза',
    desc: 'Финальные соревнования по BMX-стриту на уникальной стрит-плазе экстрим-парка «УРАМ». Открытый формат, судейство по системе runs + best trick.',
    img: 'https://images.unsplash.com/photo-1555952238-7ebc8b1d5d05?w=480&h=260&fit=crop&auto=format',
    partners: ['УРАМ'] as string[] | null,
    tags: ['Runs', 'Best Trick'],
  },
  {
    id: 11,
    title: 'Ушу',
    time: 'Время уточняется',
    place: 'Площадка ЗОЖ',
    desc: 'Показательные выступления мастеров ушу из спортивных школ Татарстана. Демонстрация традиционных и спортивных стилей. Возможность попробовать базовые элементы.',
    img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=480&h=260&fit=crop&auto=format',
    partners: null as string[] | null,
    tags: ['Традиционный', 'Спортивный'],
  },
]

export default function SportProgram() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section
      id="sport-program"
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
              <span className="gradient-text-warm">СПОРТ</span>
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
              10:00 – 19:00
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
                        <p
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: 15,
                            color: '#333333',
                            lineHeight: 1.75,
                            margin: '0 0 16px',
                          }}
                        >
                          {act.desc}
                        </p>

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
