import "./LandingBottom.css"
import { useAppSelector } from "../../features/hooks"
import LogicaCarousel from "../Carousel/Carousel"


const LandingBottom = () => {
  const {theme} = useAppSelector(state => state.theme)

  return (
	<section style={{backgroundColor: theme.primary.dark}} className="logica-statement">
		<div className="text-element">
			OUR MISSION
			<p className="subtext">
				"Increasing the participation and success of students from Latinx and underrepresented communities pursuing careers 
				in the field of computing and computer science. We are a network of students working together to develop technical, 
				leadership, and professional skills through an environment that encourages camaraderie and growth not only as an 
				individual, but as a community. We are an organization dedicated to inclusivity and welcome all who share our vision."
			</p>
			<p className="subtext">
				In laymans terms, we hold events at UIC during the semesters in order to celebrate and enrich the Latinx culture at UIC. 
				With a large community of Latinx and non-Latinx members who participate in our activities, we coordinate events with big names
				within the Computer Science industry, such as Google, in order to aid students in their career and professional success.
				We would love to have you join our future events, so consider joining / connecting with us!
			</p>
		</div>
		<LogicaCarousel />
	</section>
  )
}

export default LandingBottom