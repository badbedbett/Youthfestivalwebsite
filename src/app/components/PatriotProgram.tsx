import { useState } from 'react'
import type { ReactNode } from 'react'

const B = ({ children }: { children: ReactNode }) => (
  <span style={{ fontWeight: 700, color: '#000000' }}>{children}</span>
)

const activities: {
  id: number
  title: string
  time: string
  place: string
  desc: ReactNode
  img: string
  partners: string[] | null
  tags: string[]
}[] = [
  {
    id: 1,
    title: 'Полоса препятствий «Сила молодёжи»',
    time: '10:00 – 19:00',
    place: 'Площадка полосы препятствий',
    desc: (
      <>
        Полоса препятствий «Сила молодёжи» — в формате спортивного шоу «Суперниндзя». В рамках полосы препятствий «Сила молодёжи» запланировано прохождение трассы для нескольких категорий индивидуальные / командные (3–4 чел.) — Дети, Семья, Студенты и Организации / Предприятия. Участники проходят предварительную регистрацию, которая будет анонсирована в социальных сетях.
        {'\n\n'}
        В рамках разминки перед прохождением испытания планируется интенсивная зарядка с тренерами от партнёров.
        {'\n\n'}
        <B>Категория «Дети»</B>{'\n'}
        10:00 — Регистрация участников{'\n'}
        10:30 — Брифинг, разогрев, разминка{'\n'}
        11:00–12:00 — Соревнования в категории (индивидуальные / командные)
        {'\n\n'}
        <B>Категория «18+», «Студенческая молодёжь»</B>{'\n'}
        11:30–12:00 — Регистрация участников{'\n'}
        12:00–12:30 — Брифинг, разогрев, разминка{'\n'}
        12:30–14:00 — Соревнования в категории{'\n'}
        Также будут действовать временные слоты для прохождения трассы без регистрации.
        {'\n\n'}
        <B>Категория «Семья»</B>{'\n'}
        14:00–14:30 — Регистрация участников{'\n'}
        14:30–15:00 — Брифинг, разогрев, разминка{'\n'}
        15:00–16:00 — Соревнования в категории (3 чел.){'\n'}
        Участие в полосе препятствий семей в составе 3 человек (мама, папа, ребёнок).
        {'\n\n'}
        <B>Категория «Организации / предприятия»</B>{'\n'}
        15:00 — Регистрация команд в категории{'\n'}
        16:00 — Разминка команд в категории{'\n'}
        16:30 — Соревнования команд в категории
        {'\n\n'}
        17:00–18:30 — Подведение итогов, церемония награждения
      </>
    ),
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=480&h=260&fit=crop&auto=format',
    partners: null,
    tags: ['Дети', 'Семья', 'Студенты', 'Организации'],
  },
  {
    id: 2,
    title: 'Трасса для полётов FPV',
    time: '12:00 – 19:00',
    place: 'Волейбольное поле',
    desc: 'Интерактивная зона, посвящённая управлению FPV-дронами. Гости смогут познакомиться с технологиями управления беспилотными летательными аппаратами и попробовать свои силы на специально подготовленной трассе.',
    img: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=480&h=260&fit=crop&auto=format',
    partners: null,
    tags: ['FPV', 'Дроны', 'Технологии'],
  },
  {
    id: 3,
    title: 'Обмундирование и вооружение воинов РККА в годы Великой Отечественной войны',
    time: '12:00 – 19:00',
    place: 'Историко-патриотическая площадка',
    desc: 'Участникам расскажут об особенностях формы и экипировки военнослужащих Красной армии времён Великой Отечественной войны. После вводной части гости смогут принять участие в интерактивной игре, где необходимо определить элементы формы и соотнести их с воинскими званиями и историческим периодом.',
    img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=480&h=260&fit=crop&auto=format',
    partners: null,
    tags: ['История', 'Интерактив', 'ВОВ'],
  },
  {
    id: 4,
    title: 'Площадка тактической стрельбы',
    time: '12:00 – 19:00',
    place: 'Площадка тактической стрельбы',
    desc: 'Практическая интерактивная зона, где каждый желающий сможет познакомиться с основами тактической стрельбы. Тир организован Федерацией армейской тактической стрельбы Республики Татарстан. Для участия используется страйкбольное оборудование: АК-47, АК-74, AR-15, Glock 17. Стрельба проводится по неподвижным мишеням под контролем инструкторов.',
    img: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=480&h=260&fit=crop&auto=format',
    partners: ['Федерация армейской тактической стрельбы РТ'],
    tags: ['Страйкбол', 'АК-47', 'AR-15', 'Glock 17'],
  },
]

export default function PatriotProgram() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section
      id="patriot-program"
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
              <span className="gradient-text-warm">ПАТРИОТИКА</span>
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
                    maxHeight: isOpen ? '1400px' : '0',
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
                            whiteSpace: 'pre-line',
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
