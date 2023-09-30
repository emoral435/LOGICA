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
		</div>
		<LogicaCarousel />
	</section>
  )
}

export default LandingBottom