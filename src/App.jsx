import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className='app'>
        <NavBar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
