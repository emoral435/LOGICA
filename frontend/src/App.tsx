import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <nav>Hello, we are Logica!</nav> {/* NOTE this is where we can maybe put the navbar so that each page has the navbar that pops in*/}
      <Routes>
        <Route path="/" element={<h1>This is LOGICAS LANDING PAGE WOOOOOHOOOOOO</h1>} />
        <Route path="/board" element={<h1>This is the boards section!</h1>} />
        <Route path="/connect" element={<h1>This is where you connect with us and give us money muahahaha</h1>} />
        <Route path="/events" element={<h1>This is where we will output the calendar / events that we have coming up</h1>} />
      </Routes>
    </>
  )
}

export default App
