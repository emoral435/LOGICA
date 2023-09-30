import './PageTop.css'
import { useAppSelector } from "../../features/hooks"
import LOGICA from '../../assets/logicaTree.svg'
import { Link } from 'react-router-dom'

interface Props {
	header: string,
	bigText: string,
	home: boolean,
	connect: boolean,
	events: boolean,
	board: boolean,
}

const PageTop = ({header, bigText, home, connect, events, board}: Props) => {
  const {theme} = useAppSelector(state => state.theme)

  return (
    <div style={{backgroundColor: theme.primary.dark, color: theme.primary.contrastText}}>
		<section  className='logo-section'>
		  <div className='welcome'>
			<div className='to'>{header}</div>
			<div className='is-logica'>{bigText}</div>
			<div>latinx organization for growth in computing and academics</div>
			<div className='logo-btn'>
				{home && <button className='logo-child-btn'>
					<Link to={"/"} >Home</Link>
				</button>}
				{connect && <button className='logo-child-btn'>
					<Link to={"/connect"} >Connect</Link>
				</button>}
				{events && <button className='logo-child-btn' >
					<Link to={"/events"} >Events</Link>
				</button>}
				{board && <button className='logo-child-btn' >
					<Link to={"/board"} >Board</Link>
				</button>}
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

export default PageTop