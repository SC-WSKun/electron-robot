import { useState } from 'react'
import { H1 } from './components/H1/H1'
import './global.less'
import searchIcon from './assets/svg/search.svg'
import batteryIcon from './assets/svg/battery.svg'
import navigationIcon from './assets/svg/navigation.svg'
import communicateIcon from './assets/svg/communicate.svg'
import { useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const tabConfig = [
    {
    title: 'Battery 100%',
    subTitle: '2h ago',
    icon: batteryIcon,
    target: '/battery'
  },
    {
    title: 'Navigation',
    subTitle: 'navigate to the target',
    icon: navigationIcon,
    target: '/navigation'
  },
    {
    title: 'Communicate',
    subTitle: 'communicate with robot',
    icon: communicateIcon,
    target: '/communicate'
  },
]
  return (
    <div className='app'>
      <div className='home__search'>
        {/* <img src={searchIcon}></img> */}
      </div>
      <div style={{padding: '8px 16px'}}>
      <H1>Robots</H1>
      </div>
      <div className='tab-card__wrapper'>
        {
          tabConfig.map((item, index) => {
            return (
              <TabCard {...item} key={'tab-card-' + index} />
            )
          })
        }
      </div>
    </div>
  )
}

interface ITabCard {
  title: string,
  subTitle: string,
  icon: string,
  target: string,
}
const TabCard = (props: ITabCard) => {
  const navigate = useNavigate()
  const { title, subTitle, icon , target} = props
  const navigatePage = () => {
    navigate(target)
  }
  return (
    <div className='tab-card__box' onClick={navigatePage}>
      <div className='tab-card__img'>
        <img src={icon}></img>
      </div>
      <div className='tab-card__content'>
        <div className='tab-card__content__title'>{title}</div>
        <div className='tab-card__content__sub-title'>{subTitle}</div>
      </div>
    </div>
  )
}

export default App