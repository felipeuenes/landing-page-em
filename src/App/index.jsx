
import { Footer } from '../components/Footer'
import { Contatos } from '../pages/Contatos'
import { Home } from '../pages/Home'
import { Local } from '../pages/Local'
import { Servicos } from '../pages/Serviços'
import { Slider } from '../pages/Slides'
import './style.css'

export function App() {


  return (
    <div className="App">
        <Home/>
        <Servicos/>
        <Slider/>
        <Local/>
        <Contatos/>

        <Footer/>
    </div>
  )
}


