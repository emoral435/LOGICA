import Carousel from "react-material-ui-carousel"
import "./Carousel.css"
import { GBM1, GBM2, MORNINGSTAR1, MORNINGSTAR2, MORNINGSTAR3, PALETA1 } from '../../assets/Carousel/index.ts'
import { useLayoutEffect, useState } from "react"

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

	var imgUrls = [
        GBM1,
		GBM2,
		MORNINGSTAR1,
		MORNINGSTAR2,
		MORNINGSTAR3,
		PALETA1
    ]

    return (
        <Carousel className="carousel" autoPlay={true} animation="fade" fullHeightHover={true} cycleNavigation={true} height={height} interval={10000}>
            {
                imgUrls.map( (url, i) => <ImgWrapper key={i} url={url}/> )
            }
        </Carousel>
    )
}

export {
	ImgWrapper
}

export default LogicaCarousel