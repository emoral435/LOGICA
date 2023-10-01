import { useAppSelector } from '../../features/hooks'
import Carousel from "react-material-ui-carousel"
import { IFair, MStar, APanel, TouchGrass } from '../../assets/Flyers'
import './EventBottom.css'
import { useLayoutEffect, useState } from 'react'
import { ImgWrapper } from '../Carousel/Carousel'

interface EventProps {
	nextEvent: string,
	eventFlyer: string
}

const EventBottom = ({nextEvent, eventFlyer}: EventProps) => {
  const {theme} = useAppSelector(state => state.theme)

  const [height, setHeight] = useState(800)

	const changeHeight = () => {
		if (window.innerWidth < 768) {
			setHeight(400);
		} else {
			setHeight(800)
		}
	}

	useLayoutEffect(() => {
		window.addEventListener("resize", changeHeight);

		return () => {
			window.removeEventListener("resize", changeHeight);
		}
	})

  const imgs = [
	IFair,
	MStar,
	APanel,
	TouchGrass
  ]

  return (
	<section style={{backgroundColor: theme.primary.main}} className='events-section'>
		<section className='events-top'>
			<span className='next-event'>
				<p className='bigtxt'>Our Next Upcoming Event</p>
				<p className='name'  style={{color: theme.primary.contrastText}}>{nextEvent}</p>
				<div>
					<img src={eventFlyer} alt='Next Event Flyer' className='event-flyer'/>
				</div>
			</span>
			<span className='calendar-container'>
				<p className='checkout'>Check out our calendar!</p>
				<p style={{textAlign: 'center'}}>
					Dates and events tentative, so join our 
					<a href="https://discord.gg/GVuHD88u" target="_blank" style={{color: theme.primary.contrastText}}> discord </a>
					to get up to date news!
				</p>
				<iframe src="https://calendar.google.com/calendar/embed?src=logica.uic%40gmail.com&ctz=America%2FChicago" className='calendar'></iframe>
			</span>
		</section>
		<section className='events-bottom'>
			<section className='past-events'>
				<p className='header'>Past Events</p>
				<p className='sub-text'>Want to get a better sense of what <span style={{color: theme.primary.contrastText}}>events</span> we hold? Look no further.</p>
				<Carousel className="carousel" autoPlay={true} animation="fade" fullHeightHover={true} cycleNavigation={true} height={height} interval={10000}>
					{
						imgs.map( (url, i) => <ImgWrapper key={i} url={url}/> )
					}
				</Carousel>
			</section>
		</section>
	</section>
  )
}

export default EventBottom