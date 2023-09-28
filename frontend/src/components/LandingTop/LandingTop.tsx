import './LandingTop.css'
import { useAppSelector } from "../../features/hooks"
import LOGICA from '../../assets/logicaTree.svg'
import { useNavigate } from 'react-router-dom'

const LandingTop = () => {
  const {theme} = useAppSelector(state => state.theme)
  const navigate = useNavigate()

  const redirect = (e: React.ChangeEvent<any>) => {
    const s: string = e.target.textContent

    switch (s) {
        case 'Connect':
        navigate('/connect')
        break;
        case 'Events':
        navigate('/events')
        break;
        case 'Board':
        navigate('/board')
        break;
        default:
        navigate('/')
    }

}

  return (
    <section style={{backgroundColor: theme.primary.dark, color: theme.primary.contrastText}} className='logo-section'>
      <div className='welcome'>
        <div className='to'>welcome to</div>
        <div className='is-logica'>LOGICA</div>
        <div>latinx organization for growth in computing and academics</div>
      </div>
      {/* seperation of children on the landing page, will switch between the three on mobile */}
      <div className='logo-btn'>
        <button className='logo-child-btn' onClick={redirect}>
          Connect
        </button>
        <button className='logo-child-btn' onClick={redirect}>
          Events
        </button>
        <button className='logo-child-btn' onClick={redirect}>
          Board
        </button>
      </div>
      <div>
        <img src={LOGICA} alt="logica tree logo" className='logo'/>
      </div>
    </section>
  )
}

export default LandingTop