import ministryLogo from '../../imports/partners/ministry.svg?raw'
import youthTatarstanLogo from '../../imports/partners/youth-tatarstan.svg?raw'
import youthCenterLogo from '../../imports/partners/youth-center.svg?raw'
import uramLogo from '../../imports/partners/uram.svg?raw'
import rosmolodezhLogo from '../../imports/partners/rosmolodezh.svg?raw'
import sberLogo from '../../imports/partners/sber.svg?raw'
import alabugaLogo from '../../imports/partners/alabuga.svg?raw'
import beelineLogo from '../../imports/partners/beeline.svg?raw'
import enterLogo from '../../imports/partners/enter.svg?raw'
import dfmLogo from '../../imports/partners/dfm.svg?raw'
import propsLogo from '../../imports/partners/props.svg?raw'

type Partner = {
  id: string
  name: string
  logo: string
  logoHeight: number
  featured?: boolean
}

const partners: Partner[] = [
  { id: 'ministry', name: 'Министерство по делам молодёжи РТ', logo: ministryLogo, logoHeight: 14 },
  { id: 'youth-tatarstan', name: 'Молодёжь Татарстана', logo: youthTatarstanLogo, logoHeight: 14 },
  { id: 'youth-center', name: 'Молодёжный центр', logo: youthCenterLogo, logoHeight: 16 },
  { id: 'uram', name: 'УРАМ', logo: uramLogo, logoHeight: 13 },
  { id: 'rosmolodezh', name: 'Росмолодёжь.Гранты', logo: rosmolodezhLogo, logoHeight: 24 },
  { id: 'sber', name: 'Сбер | 185', logo: sberLogo, logoHeight: 14 },
  { id: 'alabuga', name: 'Алабуга Политех', logo: alabugaLogo, logoHeight: 22 },
  { id: 'beeline', name: 'Билайн', logo: beelineLogo, logoHeight: 12 },
  { id: 'enter', name: 'Enter', logo: enterLogo, logoHeight: 13 },
  { id: 'dfm', name: 'DFM Казань', logo: dfmLogo, logoHeight: 12 },
  { id: 'props', name: 'PROPS', logo: propsLogo, logoHeight: 13, featured: true },
]

function renderLogo(logo: string, logoHeight: number) {
  return logo
    .replace(/\s+width="[^"]*"/, '')
    .replace(/\s+height="[^"]*"/, '')
    .replace(
      '<svg ',
      `<svg class="hero-partner-logo" style="width:auto;height:${logoHeight}px;max-width:94%;display:block" preserveAspectRatio="xMidYMid meet" `,
    )
}

export default function HeroPartnerLogos() {
  return (
    <div className="hero-partners-grid" aria-label="Логотипы партнёров фестиваля">
      {partners.map(partner => (
        <div
          key={partner.id}
          className={`hero-partner-cell${partner.featured ? ' hero-partner-cell--featured' : ''}`}
          title={partner.name}
        >
          <div
            className="hero-partner-logo-wrap"
            dangerouslySetInnerHTML={{ __html: renderLogo(partner.logo, partner.logoHeight) }}
          />
        </div>
      ))}
    </div>
  )
}
