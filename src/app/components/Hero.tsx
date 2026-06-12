import { HorseBackground } from './HorseBackground'
import LogoSvg from './LogoSvg'
import HeroPartnerLogos from './HeroPartnerLogos'
import '../../styles/hero-partners.css'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(105deg, #BF00FF 0%, #E8362D 28%, #F18500 62%, #FFDF00 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Horse — right side background */}
      <div
        style={{
          position: 'absolute',
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '58%',
          height: '105%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <HorseBackground
          fillOpacity={0.22}
          fill="white"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content container */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          padding: '116px 48px 80px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(48px, 8vh, 96px)',
        }}
      >
        {/* Logo */}
        <LogoSvg
          variant="light"
          style={{
            height: 'clamp(140px, 18vw, 260px)',
            width: 'auto',
            display: 'block',
            alignSelf: 'flex-start',
          }}
        />

        {/* Main heading */}
        <h1
          style={{
            fontFamily: '"Dela Gothic One", cursive',
            fontSize: 'clamp(38px, 5.5vw, 76px)',
            lineHeight: 0.92,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.02em',
            textShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          ГАСТРОФЕСТИВАЛЬ<br />КО <span style={{ color: '#FFDF00' }}>ДНЮ МОЛОДЁЖИ</span>
        </h1>

        {/* Description */}
        <div style={{ maxWidth: 640 }}>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.95)',
              margin: '0 0 20px 0',
            }}
          >
            В рамках Дня молодёжи — 2026 организаторы впервые подготовили для жителей коллаборации с городскими гастропроектами. Тебя ждут специальные «завтрачные» позиции в ресторанах и кафе, промо-события, активности и большой розыгрыш!
          </p>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.95)',
              margin: 0,
            }}
          >
            День молодёжи пройдет 27 июня в экстрим-парке «УРАМ». Пожалуй, это самое ожидаемое летнее событие. В программе много интересного — от спорта и лекций до выступлений локальных артистов и хедлайнеров.
          </p>
        </div>

        {/* Festival Partners Section */}
        <div style={{ marginTop: 'clamp(60px, 8vh, 80px)' }}>
          <h3
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              lineHeight: 1.2,
              color: '#FFFFFF',
              margin: '0 0 20px 0',
              letterSpacing: '0.02em',
            }}
          >
            ПАРТНЕРЫ ФЕСТИВАЛЯ
          </h3>

          <HeroPartnerLogos />
        </div>
      </div>
    </section>
  )
}