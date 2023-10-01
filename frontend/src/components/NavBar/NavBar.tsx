import { useState, useEffect } from 'react';
import './NavBar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import LOGICA from '../../assets/logicaTree.svg'
import { useAppSelector } from '../../features/hooks';

const Navbar = () => {
  const {theme} = useAppSelector(state => state.theme)	

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust the threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div style={{color: theme.primary.contrastText}} className='navbar-logica'>
		<Link to={"/"}>LOGICA</Link>
		<img src={LOGICA} alt="logica logo" className='logica-tree' />
	  </div>
      <div><Link to={"/connect"}>Connect</Link></div>
      <div><Link to={"/board"}>Board</Link></div>
      <div><Link to={"/events"}>Events</Link></div>
    </div>
  );
};

export default Navbar;