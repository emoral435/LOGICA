import Carousel from "react-material-ui-carousel"
import "./Carousel.css"
import { Paper, Button } from '@mui/material'
import GBM1 from './../../assets/Carousel/GBM1.jpg'
import GBM2 from './../../assets/Carousel/GBM2.jpg'
import MORNINGSTAR1 from './../../assets/Carousel/MORNINGSTAR1.jpg'
import MORNINGSTAR2 from './../../assets/Carousel/MORNINGSTAR2.jpg'
import MORNINGSTAR3 from './../../assets/Carousel/MORNINGSTAR3.jpg'
import PALETA1 from '../../assets/Carousel/PALETA1.jpg'

interface ItemProps {
	url: string,
}

function ImgWrapper({url}: ItemProps)
{
    return (
        <img src={url} alt="Carousel Logica Image!" className="carousel-image"/>
    )
}

const LogicaCarousel = () => {
	var imgUrls = [
        GBM1,
		GBM2,
		MORNINGSTAR1,
		MORNINGSTAR2,
		MORNINGSTAR3,
		PALETA1
    ]

    return (
        <Carousel className="carousel" autoPlay={true} animation="fade" fullHeightHover={true} cycleNavigation={true}>
            {
                imgUrls.map( (url, i) => <ImgWrapper key={i} url={url}/> )
            }
        </Carousel>
    )
}

export default LogicaCarousel