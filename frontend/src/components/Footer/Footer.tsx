import './Footer.css'
import { useAppSelector } from "../../features/hooks"
import UIC from '../../assets/UIC_LOGO.svg'

interface FooterProps {
presName : string,
presEmail: string
} 


const Footer = ({presName, presEmail}:FooterProps) => {
  const { theme } = useAppSelector(state => state.theme)

  return (
    <footer id="footer-container" style={{backgroundColor: theme.primary.light}}>
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
		<p style={{fontSize: '2rem', fontWeight: 700, margin: 0}}>Contact</p>
		<p style={{fontWeight: 700, margin: 0}}>{presName}, President</p>
		<p>{presEmail}</p>
	  </section>
    </footer>
  )
}

export default Footer