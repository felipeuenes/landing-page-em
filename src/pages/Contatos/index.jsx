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
                <a href="https://api.whatsapp.com/send?phone=5588996406504&text=Olá,%20quero%20confirmar%20que%20autorizo%20receber%20contatos%20e%20informações%20do%20Empreenda%20Mais%20Jucás%20através%20do%20WhatsApp%20e%20contato%20telefônico.%20Deixe%20seu%20nome%20e%20categoria%20de%20negócio.">
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