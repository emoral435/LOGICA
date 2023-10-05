import { useAppSelector } from '../../features/hooks'
import './BoardMember.css'

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
	pic: string
}



const BoardMember = ({name, role, primaryEmail, linkedIn, github, portfolio, additionalLink, funFact, hobbies, pic}: MemberDetails) => {
  const {theme} = useAppSelector(state => state.theme)
  return (
	<div className='board-member' >
		<div className='member picture-container'>
			<img src={pic} alt="board member picture" className='picture'/>
			<div className='role'>
				<div>{role}</div>
				<div>{name}</div>
			</div>
		</div>
		<div className='member info' style={{backgroundColor: theme.primary.light, color: theme.primary.dark, fontWeight: 700, fontSize: '1.7rem'}}>
			<div>
				Points of Contact:
				<div className='contacts'>	
					{primaryEmail && <a target='_blank' href={`mailto:${primaryEmail}`} style={{color: theme.complimentary.contrastText}}>{primaryEmail}</a>}	
					{linkedIn && <a target='_blank' href={linkedIn} style={{color: theme.complimentary.contrastText}}>LinkedIn </a>}
					{github && <a target='_blank' href={github} style={{color: theme.complimentary.contrastText}}>GitHub </a>}
					{portfolio && <a target='_blank' href={portfolio} style={{color: theme.complimentary.contrastText}}>Portfolio </a>}
					{additionalLink && <a target='_blank' href={additionalLink} style={{color: theme.complimentary.contrastText}}></a>}
				</div>
			</div>
			{funFact && <span>
				Fun Fact:
				<div  style={{fontSize: '1.2rem', color: theme.complimentary.contrastText}}>{funFact}</div>
			</span>}
			{hobbies && 
			<span>
				Hobbies:
				{hobbies.map( (hobby, i) => <div key={i} style={{fontSize: '1.2rem', color: theme.complimentary.contrastText}}>{hobby}</div>)}
			</span>
			}
		</div>
	</div>
  )
}

export default BoardMember