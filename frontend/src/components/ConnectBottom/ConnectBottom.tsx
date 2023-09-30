import { useAppSelector } from '../../features/hooks'
import './ConnectBottom.css'
import LOGICA from '../../assets/UIC_LOGO.svg'
import Media from '../Media/Media'



const ConnectBottom = () => {
  const {theme} = useAppSelector(state => state.theme)

//   const socialMedias = [
// 	{
// 		name: 'Discord',
// 		imgUrl:,


// 	}
//   ]

  return (
	<section style={{backgroundColor: theme.primary.main, fontWeight: 700}} className='connect-center'>
		<div style={{fontSize: '3rem', }} className='connect-text'>
			Follow us on our social media accounts!
		</div>
		<div className='media-grid'>
			<Media img={LOGICA} url={"https://logica.students.uic.edu/"} bigText="LinkedIn" subText="make sure to follow us on linked in to get connected with us, and learn about the oppourtinities we offer!"/>
		</div>
	</section>
  )
}

export default ConnectBottom