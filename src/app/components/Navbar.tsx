import { useState, useEffect } from 'react'
import LogoSvg from './LogoSvg'

const links = [
  { label: 'Фестиваль завтраков', href: '#breakfast' },
  { label: 'Промо-события', href: '#promo' },
  { label: 'Большой розыгрыш', href: '#giveaway' },
  { label: 'О Дне молодёжи', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const getScrollTop = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    const onScroll = () => setScrolled(getScrollTop() > 60)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const textColor = scrolled ? '#000000' : '#FFFFFF'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(232,54,45,0.1)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 48px)',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
          aria-label="На главную"
        >
          <LogoSvg
            variant={scrolled ? 'dark' : 'light'}
            style={{
              height: 44,
              width: 'auto',
              display: 'block',
              transition: 'opacity 0.3s',
            }}
          />
        </button>

        {/* Desktop Links */}
        <div
          style={{ display: 'flex', gap: 36, alignItems: 'center' }}
          className="hidden-mobile"
        >
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: scrolled ? 'rgba(26,10,0,0.7)' : 'rgba(255,255,255,0.85)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
                padding: 0,
              }}
              onMouseEnter={e => {
                ;(e.target as HTMLElement).style.color = scrolled ? '#E8362D' : '#FFDF00'
              }}
              onMouseLeave={e => {
                ;(e.target as HTMLElement).style.color = scrolled
                  ? 'rgba(26,10,0,0.7)'
                  : 'rgba(255,255,255,0.85)'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
          }}
          className="show-mobile"
          aria-label="Меню"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: textColor,
                borderRadius: 2,
                transition: 'background 0.3s, transform 0.3s, opacity 0.3s',
                transformOrigin: 'center',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(16px)',
            padding: '20px clamp(20px, 5vw, 48px)',
            borderTop: '1px solid rgba(232,54,45,0.1)',
          }}
        >
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                fontSize: 18,
                fontWeight: 500,
                color: '#000000',
                textAlign: 'left',
                padding: '12px 0',
                borderBottom: '1px solid rgba(232,54,45,0.08)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}