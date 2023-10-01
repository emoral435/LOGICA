import PageTop from "../../components/PageTops/PageTop"
import ConnectBottom from "../../components/ConnectBottom/ConnectBottom"

const Connect = () => {
  return (
    <main>
		<PageTop header='want to get updates?' bigText='CONNECT' home={true} connect={false} events={true} board={true}/>
		<ConnectBottom />
	</main>
  )
}

export default Connect