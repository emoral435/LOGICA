import { useAppSelector } from '../../features/hooks'
import './Media.css'
interface MediaProps {
	img: string,
	url: string,
	bigText: string,
	subText: string
}

const Media = ({img, url, bigText, subText}: MediaProps) => {
	const {theme} = useAppSelector(state => state.theme)
	return (
	  <a href={url} target='_blank'>
		<span className='media-container' style={{backgroundColor: theme.primary.light, color: theme.complimentary.contrastText}}>
			<div className="media-header">
				<img src={img} alt="social media image" className='media-img'/>
				<p style={{fontSize: '3rem', fontWeight: 700, textAlign: 'center'}}>{bigText}</p>
			</div>
			<p style={{fontWeight: 700, textAlign: 'center'}}>{subText}</p>
		</span>
	  </a>
	)
}

export default Media