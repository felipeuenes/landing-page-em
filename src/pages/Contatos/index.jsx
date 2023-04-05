import './style.css'
import email from  '../../images/email.png'
import whats from '../../images/wpp.png'
import ig from '../../images/ig.png'



export function Contatos(){


    return(
        <div className='contatos'>
               <a href="">
               <section>
                    <img src={email} alt="" />
                    <h1>E-mail</h1>
                    <p>empreendamaisjucas@gmail.com</p>
                </section>

               </a>
                <a href="https://wa.me/5588996406504?text=Quero+saber+mais+sobre+o+programa%21">
                <section>
                    <img src={whats} alt="" />
                    <h1>WhatsApp</h1>
                    <p>(88) 9 9640-6504</p>
                </section>
                </a>
                <a href="https://instagram.com/empreendamaisjucas?igshid=YmMyMTA2M2Y=">
                <section>
                    <img src={ig} alt="" />
                    <h1>Instagram</h1>
                    <p>@empreendamaisjucas</p>
                </section>
                </a>
        </div>
    )
}