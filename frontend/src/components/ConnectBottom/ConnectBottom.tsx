import './ConnectBottom.css'
import Media from '../Media/Media'
import { useAppSelector } from '../../features/hooks'
import {Email, LinkedIn, TikTok, Discord, Instagram} from '../../assets/SocialMedia/index'

const ConnectBottom = () => {
  const {theme} = useAppSelector(state => state.theme)

  const socialMedias = [
	{
		name: 'Discord',
		imgUrl: Discord,
		redirect: "https://discord.gg/GVuHD88u",
		msg: "Our main method of communication is actually through our discord channel! We post our information and updates most frequently here, se we highly recommend to join!"
	},
	{
		name: 'LinkedIn',
		imgUrl: LinkedIn,
		redirect: "https://www.linkedin.com/company/logicaatuic/",
		msg: "What better way to boost your professional career than by following us? We are an official org, so this would be a great oppourtunity to connect with us. No pressure! (huehue)"
	},
	{
		name: 'Instagram',
		imgUrl: Instagram,
		redirect: "https://www.instagram.com/logicaatuic/",
		msg: "Here we have our Instagram! This is a one-stop shop for our club members to not only get images of our events, but updates, news, as well as insights into the life of the board members!"
	},
	{
		name: 'TikTok',
		imgUrl: TikTok,
		redirect: "https://www.tiktok.com/explore",
		msg: "With the creation of our TikTok, we hope we don't distract you too much from doing your responsibilities as a student! However, we will post little silly snippets that happen now and then, so we hope you enjoy!"
	},
	{
		name: 'Email Form',
		imgUrl: Email,
		redirect: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		msg: "If you prefer to only check your email, then this is the link you want to click!"
	}
  ]

  return (
	<section style={{backgroundColor: theme.primary.main, fontWeight: 700}} className='connect-center'>
		<div style={{fontSize: '3rem', textAlign: 'center'}} className='connect-text'>
			Follow us on our social media accounts!
		</div>
		<div className='connect-grid'>
			{socialMedias.map( (media, i) => <Media img={media.imgUrl} url={media.redirect} bigText={media.name} subText={media.msg} key={i}/>)}
		</div>
	</section>
  )
}

export default ConnectBottom