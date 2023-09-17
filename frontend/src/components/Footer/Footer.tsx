import './Footer.css'
import { useAppSelector } from "../../features/hooks"
import UIC from '../../assets/UIC_LOGO.svg'
import arrow from '../../assets/arrow_Up.svg'
import { useNavigate } from 'react-router-dom'

interface FooterProps { // the input props, so that we can easily change stuff for future president stuff
presName : string,
presEmail: string
} 


const Footer = ({presName, presEmail}:FooterProps) => {
  const { theme } = useAppSelector(state => state.theme)
  const navigate = useNavigate()
  
  const onClick = () => { // navigate user to connect page so that they can get to our social media's
	navigate('/connect')
  }
  
  return (
    <footer id="footer-container" style={{backgroundColor: theme.primary.light}}> {/* main container for the footer - has three children and uses flex for postioning*/}

      <section className="container UIC-Content">
		<div className='UIC-Header'>
			<img src={UIC} alt="uic logo" className='UIC-Logo'/>
			<hgroup style={{color: theme.primary.contrastText, fontWeight: 700}}>Student Organizations</hgroup>
		</div>
		<section className='managed-by'>
			This website is produced and managed by an official UIC student organization. 
			The content of this site is not produced, edited, or endorsed by the university and it does not reflect the opinions of UIC administration.
		</section>
	  </section>

      <section className="container pres-content" style={{color: theme.complimentary.contrastText}}>
		<hgroup style={{fontSize: '2rem', fontWeight: 700}}>LOGICA</hgroup>
		<button style={{backgroundColor: theme.primary.light, color: 'inherit'}} onClick={onClick}>
			<a href="#top">
				<p style={{fontSize: '2rem', fontWeight: 700, margin: 0}}>Contact / Connect</p>
			</a>
		</button>
		<p style={{fontWeight: 700, margin: 0}}>{presName}, President</p>
		<p>{presEmail}</p>
	  </section>

	  <button className='scroll-top'><a href="#top"><img src={arrow} alt="arrow up" className='arrow'/></a></button>
	  
    </footer>
  )
}

export default Footer