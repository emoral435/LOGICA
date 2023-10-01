import PageTop from "../../components/PageTops/PageTop"
import BoardBottom from "../../components/BoardBottom/BoardBottom"

const Board = () => {
  return (
    <main>
		<PageTop header='meet the' bigText='BOARD MEMBERS' home={true} connect={true} events={true} board={false}/>
		<BoardBottom />
	</main>
  )
}

export default Board