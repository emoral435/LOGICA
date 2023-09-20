import { useState, useEffect } from 'react';
import './NavBar.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import LOGICA from '../../../public/logicaTree.svg'
import { useAppSelector } from '../../features/hooks';

const Navbar = () => {
  const {theme} = useAppSelector(state => state.theme)	

  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()

  const onClick = (e: React.ChangeEvent<any>) => {
	const s: string = e.target.textContent

	switch (s) {
		case 'Connect':
			navigate('/connect')
			break;
		case 'Events':
			navigate('/connect')
			break;
		case 'Board':
			navigate('/board')
			break;
		default:
			navigate('/')
		}

	}

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
      <a href="#" onClick={onClick} style={{color: theme.primary.contrastText}} className='navbar-logica'>
		LOGICA
		<img src={LOGICA} alt="logica logo" className='logica-tree' />
	  </a>
      <a href="#" onClick={onClick}>Connect</a>
      <a href="#" onClick={onClick}>Board</a>
      <a href="#" onClick={onClick}>Events</a>
    </div>
  );
};

export default Navbar;