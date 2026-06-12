import partner01 from '../../imports/giveaway-partners/partner-01.svg'
import partner02 from '../../imports/giveaway-partners/partner-02.svg'
import partner03 from '../../imports/giveaway-partners/partner-03.svg'
import partner04 from '../../imports/giveaway-partners/partner-04.svg'
import partner05 from '../../imports/giveaway-partners/partner-05.svg'
import partner06 from '../../imports/giveaway-partners/partner-06.svg'
import partner07 from '../../imports/giveaway-partners/partner-07.svg'
import partner08 from '../../imports/giveaway-partners/partner-08.svg'
import partner09 from '../../imports/giveaway-partners/partner-09.svg'
import partner10 from '../../imports/giveaway-partners/partner-10.svg'
import partner11 from '../../imports/giveaway-partners/partner-11.svg'
import partner12 from '../../imports/giveaway-partners/partner-12.svg'
import partner13 from '../../imports/giveaway-partners/partner-13.svg'
import partner14 from '../../imports/giveaway-partners/partner-14.svg'
import partner15 from '../../imports/giveaway-partners/partner-15.svg'
import partner16 from '../../imports/giveaway-partners/partner-16.svg'
import partner17 from '../../imports/giveaway-partners/partner-17.svg'
import partner18 from '../../imports/giveaway-partners/partner-18.svg'
import partner19 from '../../imports/giveaway-partners/partner-19.svg'
import partner20 from '../../imports/giveaway-partners/partner-20.svg'
import partner21 from '../../imports/giveaway-partners/partner-21.svg'
import partner22 from '../../imports/giveaway-partners/partner-22.svg'
import partner23 from '../../imports/giveaway-partners/partner-23.svg'
import partner24 from '../../imports/giveaway-partners/partner-24.svg'
import partner25 from '../../imports/giveaway-partners/partner-25.svg'
import '../../styles/giveaway-partners.css'

// Сгруппировано по визуальной плотности: компактные → детализированные
const partners = [
  { id: '09', src: partner09 },
  { id: '12', src: partner12 },
  { id: '06', src: partner06 },
  { id: '08', src: partner08 },
  { id: '14', src: partner14 },
  { id: '02', src: partner02 },
  { id: '04', src: partner04 },
  { id: '01', src: partner01 },
  { id: '16', src: partner16 },
  { id: '24', src: partner24 },
  { id: '18', src: partner18 },
  { id: '21', src: partner21 },
  { id: '19', src: partner19 },
  { id: '20', src: partner20 },
  { id: '11', src: partner11 },
  { id: '23', src: partner23 },
  { id: '22', src: partner22 },
  { id: '07', src: partner07 },
  { id: '10', src: partner10 },
  { id: '15', src: partner15 },
  { id: '03', src: partner03 },
  { id: '17', src: partner17 },
  { id: '25', src: partner25 },
  { id: '13', src: partner13 },
  { id: '05', src: partner05 },
]

export default function GiveawayPartnerLogos() {
  return (
    <div className="giveaway-partners-grid" aria-label="Логотипы партнёров розыгрыша">
      {partners.map(partner => (
        <div key={partner.id} className="giveaway-partner-cell">
          <img
            src={partner.src}
            alt=""
            className="giveaway-partner-logo"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  )
}
