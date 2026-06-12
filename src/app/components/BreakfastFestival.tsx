import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'

interface Venue {
  id: string
  name: string
  description: string
  offer: string
  price: string
  address: string
  hours: string
  contacts: string
  category: string[]
  tags: string[]
}

const venues: Venue[] = [
  {
    id: 'scramble',
    name: 'Скрэмбл',
    description: 'Кафе-кондитерская в самом центре Казани, где завтраки подают от открытия и до закрытия, а меню строится вокруг свежей выпечки, кофе и европейских блюд.',
    offer: 'Большой завтрак «Скрэмбл»: Скрэмбл с трюфельным маслом и пармезаном, круассан френч-тост, авокадо, лосось слабой соли, битые огурцы, шпинат мини, томаты, ржаной хлеб «Аталар», брокколи бланшированные, медово-горчичный соус, трюфельное взбитое масло, крем-фреш, малиновый джем, кунжут.',
    price: '1 290₽',
    address: 'ул. Университетская, 10А',
    hours: 'ежедневно с 7:00 до 22:00',
    contacts: 'https://scramble-cafe.ru/, https://vk.com/scramble_cafe, https://t.me/scramble_cafe',
    category: ['Кафе'],
    tags: ['Завтраки'],
  },
  {
    id: 'filter',
    name: 'Фильтр',
    description: 'Сеть кофеен Ильдара Габидуллина, где делают татарский раф, классический фильтр, а в самой большой точке на Шаляпина есть скейт-парк и концепт-стор.',
    offer: 'Сырники и айс-латте с двойным обжигом',
    price: '690₽',
    address: 'ул. Тукая, 71; ул. Шаляпина, 26; ул. Бурхана Шахиди, 7; пр. Победы, 71Е',
    hours: 'пн — сб с 09:00 до 21:00, вс с 10:00 до 21:00',
    contacts: 'https://t.me/eastkazan',
    category: ['Кофейни'],
    tags: ['Завтраки', 'Напитки', 'Комбо'],
  },
  {
    id: 'runcoffee',
    name: 'Run Coffee',
    description: 'Кофейня, объединяющая кофе, спорт и баланс. Здесь есть зона для тренировок и собственный беговой клуб.',
    offer: 'Эспрессо-тоник «Вишня-Кола» — яркий напиток с вишневой кислинкой, мягкой сладостью колы и благородной горчинкой эспрессо.',
    price: 'Уточняйте в заведении',
    address: 'ул. Карла Маркса, 54А',
    hours: 'ежедневно с 07:30 до 21:00',
    contacts: 'https://t.me/run_coffee',
    category: ['Кофейни'],
    tags: ['Напитки'],
  },
  {
    id: 'terra',
    name: 'Terra et Silva',
    description: 'Ресторан европейской кухни с концепцией гармонии человека и природы. Все блюда халяль.',
    offer: 'Завтрак с ветчиной и картофельными крокетами — 790₽\nСэндвич с ветчиной и трюфельным айоли — 890₽\nФлак-круассан с малиновым джемом — 890₽',
    price: 'от 790₽',
    address: 'ул. Подлужная, 56',
    hours: 'вс–чт с 09:00 до 23:00, пт–сб с 09:00 до 00:00',
    contacts: 'https://terra-silva.ru/',
    category: ['Рестораны'],
    tags: ['Завтраки'],
  },
  {
    id: 'utro',
    name: 'Утро',
    description: 'Проект с философией «когда завтрак — тогда и утро». Здесь кормят завтраками',
    offer: 'Бенедикт с лососем (картофельные вафли, слабосоленая форель, мусс из пармезана)',
    price: '860₽',
    address: 'ул. Дзержинского, 6Б',
    hours: 'ежедневно с 08:00 до 18:00',
    contacts: 'Instagram',
    category: ['Кафе'],
    tags: ['Завтраки', 'Напитки', 'Комбо'],
  },
  {
    id: 'siri',
    name: 'Siri',
    description: 'Уютное место без шума и громкой музыки, где можно попробовать донеры и напитки, а также сыграть в настольные игры.',
    offer: 'Овсянка с томатами и сыром Гауда — 280₽\nСырники из деревенского творога с клюквенным соусом — 380₽\nСэндвич с яйцом, зеленым луком и домашним айоли — 380₽\nСалат с куриной грудкой, маринованными персиками и арахисом — 550₽',
    price: 'от 280₽',
    address: 'ул. Профсоюзная, 22',
    hours: 'круглосуточно (перерыв с 08:00 до 09:00)',
    contacts: 'Instagram',
    category: ['Кафе'],
    tags: ['Завтраки'],
  },
  {
    id: 'osnovanie',
    name: 'Основание',
    description: 'Тихая кофейня на шумной улице Баумана с футуристической атмосферой по мотивам цикла Айзека Азимова.',
    offer: 'Завтрак из купат, яиц, хлеба, творожного сыра и салата с черри\nВишневый бамбл с миндалем.',
    price: '650₽',
    address: 'ул. Баумана, 9А',
    hours: 'вс — чт с 10:00 до 00:00, пт — сб с 10:00 до 02:00',
    contacts: 'https://t.me/osnovaniecoffee',
    category: ['Кофейни'],
    tags: ['Завтраки', 'Напитки', 'Комбо'],
  },
  {
    id: 'numi',
    name: 'NUMI',
    description: 'Узбекская уличная еда в современном формате: плов, лагман и манты в порционных коробках, самса миниатюрного размера и нон-кабоб как восточный бургер.',
    offer: 'Хот-дог с люля, зеленый салат и сезонный напиток.',
    price: 'Уточняйте в заведении',
    address: 'ул. Кремлевская, 27; ул. Большая Красная, 55в; ул. Азата Аббасова, 4 и другие',
    hours: 'ежедневно с 11:00 до 22:00, для каждой точки лучше уточнять отдельно',
    contacts: 'https://numi-uzbk.ru/',
    category: ['Рестораны'],
    tags: ['Комбо'],
  },
  {
    id: 'tyubetey',
    name: 'Тюбетей',
    description: 'Сеть кафе неотатарской кухни, где традиционные рецепты превращаются в кыстыбургеры, эчпочмоти и эчпочмак-фри.',
    offer: 'Сендвич с тунцом и омлетом Капучино 0,2',
    price: 'Уточняйте в заведении',
    address: 'ул. Кремлевская, 21; ул. Баумана, 47/9; ул. Татарстан, 3 и другие',
    hours: 'вс — чт с 10:00 до 22:00, пт — сб с 08:00 до 23:00, для каждой точки лучше уточнять отдельно',
    contacts: 'https://t.me/tubataykzn',
    category: ['Рестораны'],
    tags: ['Комбо', 'Напитки'],
  },
  {
    id: 'buterspot',
    name: 'ButerSpot',
    description: 'Точка на Московском рынке с сэндвичами собственного производства: пекут свой хлеб, готовят авторские соусы и экспериментируют со вкусами.',
    offer: 'Утреннее комбо — хашбраун, горчичный соус, бутер с вареной колбасой и сыром чеддер и апельсиновый сок.',
    price: '15% скидка',
    address: 'ул. Шамиля Усманова, 1 (Московский рынок)',
    hours: 'ежедневно 08:00 – 21:00',
    contacts: 'https://t.me/buterspot',
    category: ['Кафе'],
    tags: ['Комбо'],
  },
  {
    id: 'zelgrechka',
    name: 'Зеленая гречка',
    description: 'Гастрономическое пространство, где вкус сочетается с заботой и вдохновением. Здесь готовят простую еду из натуральных ингредиентов.',
    offer: 'Крок-месье (Тартин, пастрами из индейки, соус бешамель (молоко, пшеничная мука, соль, сливочное масло), пармезан, дижонская горчица, лук резанец) — 620₽\nСкрэмбл с колбаской индейки (Скрамбл из двух яиц, колбаска из курицы и индейки, помидоры, шпинат, мятное песто, шпинат) — 640₽\nВатрушка (Пшеничная мука, творог, яйцо, ванильная паста, кислосливочное масло, сахар, дрожжи, клейковина, сливочное масло, мед, соль, вода) — 360₽',
    price: 'от 360₽',
    address: 'ул. Подлужная, 17; ул. Шамиля Усманова, 1 (Московский рынок)',
    hours: 'ежедневно с 08:00 до 21:00',
    contacts: 'https://t.me/zelgrechka',
    category: ['Кафе'],
    tags: ['Завтраки'],
  },
  {
    id: 'cups',
    name: 'CUPS',
    description: 'Городское кафе на каждый день с разнообразными завтраками, цветочным интерьером и теплой атмосферой',
    offer: 'Круассан с мороженым и ягодами — 310₽\nЭспрессо тоник со смородиной — 410₽',
    price: 'от 310₽',
    address: 'ул. Большая Красная, 54',
    hours: 'ежедневно с 08:00 до 20:00',
    contacts: 'https://cups.finegroup.rest/',
    category: ['Кофейни'],
    tags: ['Завтраки', 'Напитки'],
  },
  {
    id: 'aulak',
    name: 'Аулак',
    description: 'Кофейня в Казанском Кремле с современным прочтением татарской кухни.',
    offer: 'Каймак-тост с мороженым из душицы и ягодами — 490₽\nТатарский фильтр с облепихой — 340₽',
    price: 'от 340₽',
    address: 'проезд Шейнкмана, 5 (Присутственные места, 4-й подъезд, территория Казанского Кремля)',
    hours: 'ежедневно с 09:00 до 20:00',
    contacts: 'https://aulak.finegroup.rest/',
    category: ['Кофейни'],
    tags: ['Завтраки', 'Напитки'],
  },
  {
    id: 'drinkit',
    name: 'Дринкит',
    description: 'Интровертная кофейня, где заказ можно сделать только через приложение или планшет-терминал.',
    offer: 'Лимонад Манго-лайм-жасмин — освежающий лимонад с сочной сладостью манго, лёгкой кислинкой лайма и деликатным ароматом жасминового чая',
    price: '345₽',
    address: 'ул. Николая Ершова, 62; ул. Академика Парина, 6',
    hours: 'пн — пт с 07:30 до 22:00, сб — вс с 08:00 до 22:00',
    contacts: 'https://t.me/drinkit_kzn',
    category: ['Кофейни'],
    tags: ['Напитки'],
  },
  {
    id: 'a88',
    name: 'A88',
    description: 'Паназиатское бистро, где в одном пространстве встречаются разные страны и вкусы.',
    offer: 'Южно Корейский Кимпаб с курицей и Холодный молочный улун с маракуйей',
    price: '580₽',
    address: 'ул. Спартаковская, 2Б',
    hours: 'пн — чт с 10:00 до 22:00, пт — с 10:00 до 00:00, сб — с 12:00 до 00:00, вс —  12:00 до 22:00',
    contacts: 'Уточняйте в заведении',
    category: ['Рестораны'],
    tags: ['Комбо', 'Напитки'],
  },
  {
    id: 'soloma',
    name: 'Солома',
    description: 'Культурно-гастрономическое пространство с концептуальным подходом.',
    offer: 'Хот-дог с говядиной — 550₽\nТакос по мексикански — 700₽\nКоктейль «Сицилийский пунш» — 700₽',
    price: 'от 550₽',
    address: 'ул. Бурхана Шахиди, 7',
    hours: 'пн — чт с 12:00 до 22:00, пт — с 12:00 до 00:00, сб — с 11:00 до 00:00, вс —  11:00 до 22:00',
    contacts: 'https://t.me/solomayard',
    category: ['Рестораны'],
    tags: ['Напитки'],
  },
  {
    id: 'ptashka',
    name: 'Ранняя пташка',
    description: 'Кофейня в центре города с авторской кухней и выпечкой, в которой готовят знаменитые бейглы и спешелти-кофе.',
    offer: 'Бейгл с беконом яйцом и лимонад арбуз-мята',
    price: 'скидка 10%',
    address: 'ул. Астрономическая, 17; ул. Шамиля Усманова, 1 (Московский рынок)',
    hours: 'ежедневно с 08:00 до 21:00',
    contacts: 'https://vk.com/ptashka_coffee; https://t.me/coffeeptashka',
    category: ['Кофейни'],
    tags: ['Комбо', 'Напитки'],
  },
  {
    id: 'yasny',
    name: 'Ясный',
    description: 'Кофейный бар в центре Казани с фильтр-шерингом, какао и фирменной выпечкой.',
    offer: 'Сендвич курочкой, овощами и йогуртовым соусом и лимонад виноград-роза',
    price: 'скидка 10%',
    address: 'ул. Островского, 9',
    hours: 'ежедневно с 09:00 до 21:00',
    contacts: 'https://t.me/coffeeptashka',
    category: ['Кофейни'],
    tags: ['Комбо', 'Напитки'],
  },
]

const filterOptions = [
  { id: 'all', label: 'Все заведения' },
  { id: 'Кофейни', label: 'Кофейни' },
  { id: 'Кафе', label: 'Кафе' },
  { id: 'Рестораны', label: 'Рестораны' },
  { id: 'Завтраки', label: 'Завтраки' },
  { id: 'Напитки', label: 'Напитки' },
  { id: 'Комбо', label: 'Комбо' },
]

export default function BreakfastFestival() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null)

  const filteredVenues = venues.filter(venue => {
    if (activeFilter === 'all') return true
    return venue.category.includes(activeFilter) || venue.tags.includes(activeFilter)
  })

  return (
    <section
      id="breakfast"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(80px, 12vh, 120px) 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
        }}
      >
        {/* БЛОК 1: Заголовок и описание */}
        <div style={{ marginBottom: 'clamp(40px, 6vh, 60px)' }}>
          <h2
            style={{
              fontFamily: '"Dela Gothic One", cursive',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.1,
              color: '#E8362D',
              margin: '0 0 24px 0',
              letterSpacing: '-0.01em',
            }}
          >
            ФЕСТИВАЛЬ ЗАВТРАКОВ
          </h2>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(26,10,0,0.8)',
              margin: 0,
              maxWidth: 800,
            }}
          >
            Рестораны, кафе и кофейни подготовили спешлы, комбо-наборы и напитки в преддверии Дня молодёжи. Их можно попробовать с 10 июня по 28 июня — ищи наиболее интересные позиции ниже!
          </p>
        </div>

        {/* БЛОК 2: Навигационные теги */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 'clamp(36px, 5vh, 48px)',
          }}
        >
          {filterOptions.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                background: activeFilter === filter.id ? '#E8362D' : 'rgba(232,54,45,0.08)',
                color: activeFilter === filter.id ? '#FFFFFF' : 'rgba(26,10,0,0.7)',
                border: activeFilter === filter.id ? 'none' : '1px solid rgba(232,54,45,0.15)',
                borderRadius: 24,
                padding: '10px 20px',
                fontFamily: '"Inter", sans-serif',
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                if (activeFilter !== filter.id) {
                  ;(e.target as HTMLElement).style.background = 'rgba(232,54,45,0.12)'
                  ;(e.target as HTMLElement).style.borderColor = 'rgba(232,54,45,0.25)'
                }
              }}
              onMouseLeave={e => {
                if (activeFilter !== filter.id) {
                  ;(e.target as HTMLElement).style.background = 'rgba(232,54,45,0.08)'
                  ;(e.target as HTMLElement).style.borderColor = 'rgba(232,54,45,0.15)'
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* БЛОК 3: Сетка карточек */}
        <div
          className="venues-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {filteredVenues.map(venue => (
            <div
              key={venue.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(232,54,45,0.12)',
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,54,45,0.3)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(232,54,45,0.12)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,54,45,0.12)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
              onClick={() => setSelectedVenue(venue)}
            >
              {/* Placeholder для фото */}
              <div
                style={{
                  width: '100%',
                  paddingBottom: '60%',
                  background: 'linear-gradient(135deg, rgba(232,54,45,0.1) 0%, rgba(241,133,0,0.1) 100%)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: '"Dela Gothic One", cursive',
                    fontSize: 24,
                    color: 'rgba(232,54,45,0.2)',
                    textAlign: 'center',
                  }}
                >
                  {venue.name}
                </div>
              </div>

              {/* Контент карточки */}
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: '"Dela Gothic One", cursive',
                    fontSize: 18,
                    lineHeight: 1.3,
                    color: '#000000',
                    margin: '0 0 12px 0',
                  }}
                >
                  {venue.name}
                </h3>

                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'rgba(26,10,0,0.7)',
                    margin: '0 0 16px 0',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {venue.description}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <div
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: 'rgba(26,10,0,0.6)',
                      margin: '0 0 8px 0',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {venue.offer}
                  </div>

                  <div
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 16,
                      color: '#E8362D',
                      margin: '0 0 16px 0',
                    }}
                  >
                    {venue.price}
                  </div>

                  <button
                    style={{
                      width: '100%',
                      background: '#E8362D',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: 10,
                      padding: '12px 20px',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      letterSpacing: '0.02em',
                    }}
                    onMouseEnter={e => {
                      ;(e.target as HTMLElement).style.background = '#BF00FF'
                    }}
                    onMouseLeave={e => {
                      ;(e.target as HTMLElement).style.background = '#E8362D'
                    }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* БЛОК 4: Модальное окно */}
      <Dialog open={!!selectedVenue} onOpenChange={() => setSelectedVenue(null)}>
        <DialogContent
          style={{
            maxWidth: 640,
            maxHeight: '90vh',
            overflowY: 'auto',
            background: '#FFFFFF',
            borderRadius: 16,
            padding: 0,
          }}
        >
          {selectedVenue && (
            <>
              {/* Фото заведения */}
              <div
                style={{
                  width: '100%',
                  paddingBottom: '50%',
                  background: 'linear-gradient(135deg, rgba(232,54,45,0.15) 0%, rgba(241,133,0,0.15) 100%)',
                  position: 'relative',
                  borderRadius: '16px 16px 0 0',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: '"Dela Gothic One", cursive',
                    fontSize: 32,
                    color: 'rgba(232,54,45,0.25)',
                    textAlign: 'center',
                  }}
                >
                  {selectedVenue.name}
                </div>
              </div>

              <div style={{ padding: 32 }}>
                <DialogHeader>
                  <DialogTitle
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 28,
                      lineHeight: 1.2,
                      color: '#000000',
                      marginBottom: 16,
                    }}
                  >
                    {selectedVenue.name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Подробная информация о заведении и спецпредложении ко Дню молодёжи
                  </DialogDescription>
                </DialogHeader>
                {/* Описание заведения */}
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'rgba(26,10,0,0.8)',
                    margin: '0 0 24px 0',
                  }}
                >
                  {selectedVenue.description}
                </p>

                {/* Спецпредложение */}
                <div style={{ marginBottom: 24 }}>
                  <h4
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(26,10,0,0.5)',
                      margin: '0 0 8px 0',
                    }}
                  >
                    СПЕЦПРЕДЛОЖЕНИЕ КО ДНЮ МОЛОДЁЖИ
                  </h4>
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: 'rgba(26,10,0,0.9)',
                      margin: 0,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {selectedVenue.offer}
                  </p>
                </div>

                {/* Стоимость */}
                <div
                  style={{
                    background: 'rgba(232,54,45,0.06)',
                    borderLeft: '3px solid #E8362D',
                    padding: '16px 20px',
                    borderRadius: 8,
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Dela Gothic One", cursive',
                      fontSize: 24,
                      color: '#E8362D',
                    }}
                  >
                    {selectedVenue.price}
                  </div>
                </div>

                {/* Информация */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'rgba(26,10,0,0.5)',
                        marginBottom: 6,
                      }}
                    >
                      Адрес
                    </div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: 'rgba(26,10,0,0.85)',
                      }}
                    >
                      {selectedVenue.address}
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'rgba(26,10,0,0.5)',
                        marginBottom: 6,
                      }}
                    >
                      График работы
                    </div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: 'rgba(26,10,0,0.85)',
                      }}
                    >
                      {selectedVenue.hours}
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'rgba(26,10,0,0.5)',
                        marginBottom: 6,
                      }}
                    >
                      Контакты
                    </div>
                    <div
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: '#E8362D',
                        wordBreak: 'break-word',
                      }}
                    >
                      {selectedVenue.contacts}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        @media (max-width: 1024px) {
          .venues-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .venues-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}