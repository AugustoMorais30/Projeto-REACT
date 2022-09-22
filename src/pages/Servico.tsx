import { Menu } from "../components/Menu";
import img from '../img/servico.jpg'

export const Servico = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Serviço:</h1>
             <p>Oferecemos suporte local ou remoto ilimitado, gerenciamento de servidor, rede e e-mail, backups, monitoramento e manutenção preventiva, segurança cibernética e muito mais.
             Nossa equipe conta com analistas bilíngues/trilíngues (português, inglês e espanhol) prontos para atender suas necessidades.</p>
        </main>
        </>
    )
}