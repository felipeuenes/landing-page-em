
import { Footer } from '../components/Footer'
import { Contatos } from '../pages/Contatos'
import { Home } from '../pages/Home'
import { Local } from '../pages/Local'
import { Servicos } from '../pages/Serviços'
import './style.css'

export function App() {


  return (
    <div className="App">
        <Home/>
        <Servicos/>
        <Local/>
        <Contatos/>

        <Footer/>
    </div>
  )
}


