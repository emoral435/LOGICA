import { useAppSelector } from '../../features/hooks'
import './BoardMember.css'
import me from './IMG_1171.jpg'

interface MemberDetails {
	name: string,
	role: string,
	primaryEmail: string,
	linkedIn: string,
	github: string,
	portfolio: string,
	additionalLink: string,
	funFact: string,
	hobbies: string[],
}

const BoardMember = ({name, role, primaryEmail, linkedIn, github, portfolio, additionalLink, funFact, hobbies}: MemberDetails) => {
  const {theme} = useAppSelector(state => state.theme)
  return (
	<div className='board-member' >
		<div className='member picture-container'>
			<img src={me} alt="board member picture" className='picture'/>
			<span className='role'>{role}</span>
		</div>
		<div className='member info' style={{backgroundColor: theme.primary.light, color: theme.primary.dark, fontWeight: 700, fontSize: '1.2rem'}}>
			<span style={{color: theme.primary.dark, fontWeight: 700, fontSize: '2rem'}}>{name}</span>	
			<div>Primary Contact: {primaryEmail}</div>
			{linkedIn && <a href={linkedIn} style={{color: theme.complimentary.contrastText}}> My LinkedIn </a>}
			{github && <a href={github} style={{color: theme.complimentary.contrastText}}> My GitHub </a>}
			{portfolio && <a href={portfolio} style={{color: theme.complimentary.contrastText}}> My Website </a>}
			{portfolio && <a href={portfolio} style={{color: theme.complimentary.contrastText}}> My Website </a>}
		</div>
	</div>
  )
}

export default BoardMember