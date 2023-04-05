import './style.css'
import email from  '../../images/email.png'
import whats from '../../images/wpp.png'
import ig from '../../images/ig.png'



export function Contatos(){


    return(
        <div className='contatos'>
                <section>
                    <img src={email} alt="" />
                    <h1>E-mail</h1>
                    <p>empreendamaisjucas@gmail.com</p>
                </section>

                <section>
                    <img src={whats} alt="" />
                    <h1>WhatsApp</h1>
                    <p>(88) 9 9640-6504</p>
                </section>
                <section>
                    <img src={ig} alt="" />
                    <h1>Instagram</h1>
                    <p>@empreendamaisjucas</p>
                </section>
        </div>
    )
}