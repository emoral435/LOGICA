interface FooterProps {
presName : string,
presPhoto: string,
} 


const Footer = ({presName, presPhoto}:FooterProps) => {
  return (
    <footer id="footer-container">
      <section className="container UIC-Content">UIC Stuff</section>
      <section className="container president-content">{presName}{presPhoto}</section>
    </footer>
  )
}

export default Footer