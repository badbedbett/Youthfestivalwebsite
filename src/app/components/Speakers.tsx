import { HorseBackground } from './HorseBackground'

const speakers = [
  {
    name: 'Артём Метелев',
    role: 'Депутат ГД',
    accent: '#E8362D',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format',
    time: '14:00',
    location: 'Главная сцена',
    lecture: 'Россия будущего — это мы',
  },
  {
    name: 'Лейла Садыкова',
    role: 'Министр РТ',
    accent: null,
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&auto=format',
    time: '13:00',
    location: 'Шатёр «Власть»',
    lecture: 'Татарстан — территория возможностей',
  },
  {
    name: 'Кирилл Захаров',
    role: 'IT-предприниматель',
    accent: null,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format',
    time: '15:30',
    location: 'Шатёр «Карьера»',
    lecture: 'Как запустить бизнес в 22 года',
  },
  {
    name: 'Мария Кузнецова',
    role: 'Чемпионка России',
    accent: '#FFDF00',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
    time: '12:00',
    location: 'Воркаут-площадка',
    lecture: 'Спорт как образ жизни',
  },
  {
    name: 'Дмитрий Ершов',
    role: 'Росмолодёжь',
    accent: null,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    time: '11:00',
    location: 'Шатёр «Патриотика»',
    lecture: 'Федеральные программы для молодёжи',
  },
  {
    name: 'Алина Шарипова',
    role: 'Основатель медиа',
    accent: null,
    img: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=200&h=200&fit=crop&auto=format',
    time: '16:00',
    location: 'Шатёр «Медиа»',
    lecture: 'Медиа без цензуры: реально?',
  },
  {
    name: 'Руслан Минниханов',
    role: 'Предприниматель',
    accent: '#BF00FF',
    img: 'https://images.unsplash.com/photo-1705645930353-0e335311ef20?w=200&h=200&fit=crop&auto=format',
    time: '17:00',
    location: 'Шатёр «Карьера»',
    lecture: 'Предпринимательство в регионах',
  },
  {
    name: 'Ольга Фатеева',
    role: 'Продюсер',
    accent: null,
    img: 'https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?w=200&h=200&fit=crop&auto=format',
    time: '13:30',
    location: 'Главная сцена',
    lecture: 'Шоу-индустрия изнутри',
  },
  {
    name: 'Тимур Бекмамбетов',
    role: 'Режиссёр',
    accent: null,
    img: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=200&h=200&fit=crop&auto=format',
    time: '18:00',
    location: 'Главная сцена',
    lecture: 'Кино как инструмент влияния',
  },
  {
    name: 'Никита Маклахов',
    role: 'Подкастер',
    accent: '#F18500',
    img: 'https://images.unsplash.com/photo-1568316674077-d72ee56de61c?w=200&h=200&fit=crop&auto=format',
    time: '14:30',
    location: 'Шатёр «Образование»',
    lecture: 'Подкаст как карьера',
  },
  {
    name: 'Яна Чурикова',
    role: 'Телеведущая',
    accent: null,
    img: 'https://images.unsplash.com/photo-1701096351544-7de3c7fa0272?w=200&h=200&fit=crop&auto=format',
    time: '19:00',
    location: 'Главная сцена',
    lecture: 'Финальный концерт',
  },
  {
    name: 'Сергей Поляков',
    role: 'CEO Skyeng',
    accent: null,
    img: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=200&h=200&fit=crop&auto=format',
    time: '16:30',
    location: 'Шатёр «Образование»',
    lecture: 'EdTech: будущее уже здесь',
  },
  {
    name: 'Диана Вишнёва',
    role: 'Балерина',
    accent: '#E8362D',
    img: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=200&h=200&fit=crop&auto=format',
    time: '15:00',
    location: 'Главная сцена',
    lecture: 'Путь к совершенству',
  },
  {
    name: 'Андрей Себрант',
    role: 'Яндекс',
    accent: null,
    img: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=200&h=200&fit=crop&auto=format',
    time: '17:30',
    location: 'Шатёр «Технологии»',
    lecture: 'ИИ меняет всё',
  },
  {
    name: 'Эльмира Абдразакова',
    role: 'Волонтёр года',
    accent: null,
    img: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=200&h=200&fit=crop&auto=format',
    time: '11:30',
    location: 'Шатёр «Патриотика»',
    lecture: 'Волонтёрство как призвание',
  },
  {
    name: 'Марат Хуснуллин',
    role: 'Вице-премьер РФ',
    accent: '#FFDF00',
    img: 'https://images.unsplash.com/photo-1600878459138-e1123b37cb30?w=200&h=200&fit=crop&auto=format',
    time: '12:30',
    location: 'Главная сцена',
    lecture: 'Строим страну вместе',
  },
  {
    name: 'Тимур Сигал',
    role: 'EdTech инвестор',
    accent: null,
    img: 'https://images.unsplash.com/photo-1677543167033-af3c688aa4df?w=200&h=200&fit=crop&auto=format',
    time: '15:00',
    location: 'Шатёр «Карьера»',
    lecture: 'Как привлечь первые инвестиции',
  },
  {
    name: 'Карина Истомина',
    role: 'Блогер',
    accent: null,
    img: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=200&h=200&fit=crop&auto=format',
    time: '16:00',
    location: 'Шатёр «Медиа»',
    lecture: 'Аудитория 5 млн: как это работает',
  },
]


export default function Speakers() {
  return (
    <section
      id="speakers"
      style={{
        background: 'linear-gradient(105deg, #BF00FF 0%, #E8362D 28%, #F18500 62%, #FFDF00 100%)',
        padding: '100px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-6%',
          bottom: '-8%',
          width: '48%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.09,
          zIndex: 1,
        }}
      >
        <HorseBackground fillOpacity={1} fill="white" style={{ width: '100%', height: '100%' }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.5)' }} />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              27 июня · Казань
            </span>
          </div>
          <h2
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(32px, 5vw, 68px)',
              lineHeight: 0.92,
              color: '#FFDF00',
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}
          >
            ВЫСТУПЛЕНИЯ,
            <br />
            <span style={{ color: '#FFFFFF' }}>КОТОРЫМИ БУДУТ ДЕЛИТЬСЯ</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}
          className="speakers-grid"
        >
          {speakers.map((sp, idx) => {
            const isAccented = sp.accent !== null
            const isDark = sp.accent === '#FFDF00'
            const textColor = isAccented ? (isDark ? '#000000' : '#FFFFFF') : '#FFFFFF'
            const subColor = isAccented ? (isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.75)') : 'rgba(255,255,255,0.65)'
            const accentColor = sp.accent ?? '#FFDF00'
            const backBg = isAccented ? sp.accent! : 'rgba(255,255,255,0.12)'
            const backIsDark = sp.accent === '#FFDF00'
            const backText = isAccented ? (backIsDark ? '#000000' : '#FFFFFF') : '#FFFFFF'
            const backSub = isAccented ? (backIsDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.75)') : 'rgba(255,255,255,0.65)'
            const backDivider = isAccented ? (backIsDark ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.4)') : 'rgba(255,255,255,0.3)'

            return (
              <div
                key={idx}
                className="speaker-flip-container"
                style={{ perspective: '800px', cursor: 'default' }}
              >
                <div className="speaker-flip-inner">
                  {/* FRONT */}
                  <div
                    className="speaker-face speaker-front"
                    style={{
                      background: isAccented ? sp.accent! : 'rgba(255,255,255,0.12)',
                      border: isAccented ? 'none' : '1px solid rgba(255,255,255,0.18)',
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: `2px solid ${isAccented ? (isDark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.35)') : 'rgba(255,255,255,0.25)'}`,
                      }}
                    >
                      <img
                        src={sp.img}
                        alt={sp.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: '"Dela Gothic One", cursive',
                          fontSize: 'clamp(11px, 1vw, 13px)',
                          color: textColor,
                          letterSpacing: '-0.01em',
                          lineHeight: 1.2,
                          marginBottom: 3,
                        }}
                      >
                        {sp.name}
                      </div>
                      <div
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: 'clamp(9px, 0.75vw, 11px)',
                          color: subColor,
                          lineHeight: 1.3,
                        }}
                      >
                        {sp.role}
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="speaker-face speaker-back"
                    style={{
                      background: backBg,
                      border: isAccented ? 'none' : '1px solid rgba(255,255,255,0.18)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: '"Dela Gothic One", cursive',
                        fontSize: 'clamp(16px, 1.4vw, 20px)',
                        color: backText,
                        letterSpacing: '-0.01em',
                        lineHeight: 1,
                        marginBottom: 6,
                      }}
                    >
                      {sp.time}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 'clamp(9px, 0.8vw, 11px)',
                        color: backSub,
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {sp.location}
                    </div>
                    <div
                      style={{
                        width: 24,
                        height: 2,
                        background: backDivider,
                        borderRadius: 1,
                        marginBottom: 8,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 'clamp(9px, 0.8vw, 11px)',
                        color: backText,
                        lineHeight: 1.45,
                        fontStyle: 'italic',
                      }}
                    >
                      {sp.lecture}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .speaker-flip-container {
          height: 140px;
        }
        .speaker-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .speaker-flip-container:hover .speaker-flip-inner {
          transform: rotateY(180deg);
        }
        .speaker-face {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }
        .speaker-back {
          transform: rotateY(180deg);
          justify-content: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.12);
        }
        @media (max-width: 1100px) {
          .speakers-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .speakers-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .speaker-flip-container { height: 160px; }
        }
        @media (max-width: 480px) {
          .speakers-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .speaker-flip-container { height: 150px; }
        }
      `}</style>
    </section>
  )
}
