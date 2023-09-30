import { useAppSelector } from '../../features/hooks'

interface MediaProps {
	img: string,
	url: string,
	bigText: string,
	subText: string
}

const Media = ({img, url, bigText, subText}: MediaProps) => {
	const {theme} = useAppSelector(state => state.theme)
	return (
	  <span className='media-container' style={{backgroundColor: theme.primary.dark, color: theme.primary.contrastText}}>
		<div className="media-header">
			<a href={url} target='_blank'>
				<img src={img} alt="social media image" className='media-img'/>
			</a>
			<a href={url} target='_blank'>
				<p style={{fontSize: '3rem', fontWeight: 700, textAlign: 'center'}}>{bigText}</p>
			</a>
		</div>
		<a href={url} target='_blank' style={{fontSize: '1.5rem'}}>
			<p>{subText}</p>
		</a>
	  </span>
	)
}

export default Media