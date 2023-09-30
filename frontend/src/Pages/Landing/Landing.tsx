import './Landing.css'
import PageTop from '../../components/PageTops/PageTop'
import LandingBottom from '../../components/LandingBottom/LandingBottom'

const Landing = () => {
  return (
    <main>
        <PageTop header='welcome to' bigText='LOGICA' home={false} connect={true} events={true} board={true}/>
		<LandingBottom />
    </main>
  )
}

export default Landing