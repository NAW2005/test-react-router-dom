import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Services from '../src/pages/Services'
import Contact from '../src/pages/Contact'
import Nav from './components/Nav'
import Error from './components/Error'
import Admin from './pages/Admin'
import Nest from './pages/Nest'
import One from '../src/pages/NestRoute/One'
import Two from '../src/pages/NestRoute/Two'
import Three from '../src/pages/NestRoute/Three'


function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact/:name' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/nest' element={<Nest />}>
          <Route index element={<One />} />
          <Route path='two' element={<Two />} />
          <Route path='three' element={<Three />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
