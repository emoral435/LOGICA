import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { presidentName, presidentEmail } from '../constants/Constants'
import NavBar from './components/NavBar/NavBar';
import Landing from './components/LandingTop/LandingTop';
import Events from './Pages/events/Events';
import Board from './Pages/board/Board';
import Connect from './Pages/connect/Connect';

function App() {
  return (
    <>
      <NavBar /> {/* NOTE this is where we can maybe put the navbar so that each page has the navbar that pops in*/}
      <Routes>
        <Route path="/" element={< Landing />} />
        <Route path="/board" element={< Board />} />
        <Route path="/connect" element={< Connect />} />
        <Route path="/events" element={< Events />} />
      </Routes>
      <Footer presName={presidentName} presEmail={presidentEmail}/>
    </>
  )
}

export default App
