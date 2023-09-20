import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { presidentName, presidentEmail } from '../constants/Constants'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar /> {/* NOTE this is where we can maybe put the navbar so that each page has the navbar that pops in*/}
	  <h2 style={{height: '200vh'}}>adasd</h2>
      <Routes>
        <Route path="/" element={<h1>This is LOGICAS LANDING PAGE WOOOOOHOOOOOO</h1>} />
        <Route path="/board" element={<h1>This is the boards section!</h1>} />
        <Route path="/connect" element={<h1>This is where you connect with us and give us money muahahaha</h1>} />
        <Route path="/events" element={<h1>This is where we will output the calendar / events that we have coming up</h1>} />
      </Routes>
      <Footer presName={presidentName} presEmail={presidentEmail}/>
    </>
  )
}

export default App
