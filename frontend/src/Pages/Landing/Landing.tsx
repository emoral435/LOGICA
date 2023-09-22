import './Landing.css'
import { useAppSelector } from "../../features/hooks"
import LOGICA from '../../assets/logicaTree.svg'

const Landing = () => {
  const {theme} = useAppSelector(state => state.theme)

  return (
    <section style={{backgroundColor: theme.primary.dark, color: theme.primary.contrastText}} className='logo-section'>
      <div className='welcome'>
        <div className='to'>welcome to</div>
        <div className='is-logica'>LOGICA</div>
        <div>latinx organization for growth in computing and academics</div>
      </div>
      {/* seperation of children on the landing page, will switch between the two on mobile */}
      <div>
        <img src={LOGICA} alt="logica tree logo" className='logo'/>
      </div>
    </section>
  )
}

export default Landing