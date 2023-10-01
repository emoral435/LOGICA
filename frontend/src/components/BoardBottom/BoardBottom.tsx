import { useAppSelector } from '../../features/hooks'
import './BoardBottom.css'
import { execBoard, boardMembers } from '../../../constants/Constants'
import BoardMember from '../BoardMember/BoardMember'

interface BoardSectionProps {
	str: string
}

const BoardSection = ({str}: BoardSectionProps) => {
	return (
		<section className='board-section'>{str}</section>
	)
}

const BoardBottom = () => {
	const {theme} = useAppSelector(state => state.theme)
	return (
		<section style={{backgroundColor: theme.primary.main, width: '100%'}}>
			<BoardSection str="Executive Board Members" />
			<div className="board-container">
				<div className='board-grid'>
					{execBoard.map( (member, i) =>
					<BoardMember
					key={i}
					name={member.name} role={member.role}
					primaryEmail={member.primaryEmail}
					linkedIn={member.linkedIn}
					github={member.github}
					portfolio={member.portfolio}
					additionalLink={member.additionalLink}
					hobbies={member.hobbies}
					funFact={member.funFact}
					/>)}
				</div>
			</div>
			<BoardSection str="Board Members" />
			<div className='board-container'>
				<div className='board-grid'>
					{boardMembers.map( (member, i) =>
					<BoardMember
					key={i}
					name={member.name} role={member.role}
					primaryEmail={member.primaryEmail}
					linkedIn={member.linkedIn}
					github={member.github}
					portfolio={member.portfolio}
					additionalLink={member.additionalLink}
					hobbies={member.hobbies}
					funFact={member.funFact}
					/>)}
				</div>
			</div>
		</section>
	  )
}

export default BoardBottom