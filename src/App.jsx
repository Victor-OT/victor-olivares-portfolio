import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className='app'>
        <NavBar />
        <Home />
        <Skills />
    </div>
  )
}

export default App
