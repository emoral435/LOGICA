import PageTop from "../../components/PageTops/PageTop"
import EventBottom from "../../components/EventBottom/EventBottom"
import NextFlyer from '../../assets/Flyers/GBM12023Fall.png'

const Events = () => {
  return (
    <main>
		<PageTop header='see our upcoming and past' bigText='EVENTS' home={true} connect={true} events={false} board={true}/>
		<EventBottom eventFlyer={NextFlyer} nextEvent="LOGICA's First GBM" />
	</main>
  )
}

export default Events