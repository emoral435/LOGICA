import './LandingTop.css'
import { useAppSelector } from "../../features/hooks"
import LOGICA from '../../assets/logicaTree.svg'
import { Link } from 'react-router-dom'

const LandingTop = () => {
  const {theme} = useAppSelector(state => state.theme)

  return (
    <div style={{backgroundColor: theme.primary.dark, color: theme.primary.contrastText}}>
		<section  className='logo-section'>
		  <div className='welcome'>
			<div className='to'>welcome to</div>
			<div className='is-logica'>LOGICA</div>
			<div>latinx organization for growth in computing and academics</div>
			<div className='logo-btn'>
				<button className='logo-child-btn'>
					<Link to={"connect"} >Connect</Link>
				</button>
				<button className='logo-child-btn' >
					<Link to={"events"} >Events</Link>
				</button>
				<button className='logo-child-btn' >
					<Link to={"board"} >Board</Link>
				</button>
     	 	</div>
		  </div>
		  {/* seperation of children on the landing page, will switch between the three on mobile */}
		  <div>
			<img src={LOGICA} alt="logica tree logo" className='logo'/>
		  </div>
		</section>
	</div>
  )
}

export default LandingTop