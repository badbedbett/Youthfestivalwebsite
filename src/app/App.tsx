import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BreakfastFestival from './components/BreakfastFestival'
import PromoEvents from './components/PromoEvents'
import Giveaway from './components/Giveaway'
import About from './components/About'

// MARKER-MAKE-KIT-INVOKED
export default function App() {
  return (
    <div
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        overflowX: 'hidden',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Navbar />
      <Hero />
      <BreakfastFestival />
      <PromoEvents />
      <Giveaway />
      <About />
    </div>
  )
}