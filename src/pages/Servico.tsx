import { Menu } from "../components/Menu";
import img from '../img/servico.jpg'

export const Servico = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Serviço:</h1>
             <p>Elimine o vão entre a sua visão digital e a realidade com os serviços de tecnologia global da LOGO T.I. Acelere sua transformação digital e obtenha a capacidade de operar da borda à nuvem com a ajuda estratégica, o suporte operacional e o treinamento de que você precisa.</p>
        </main>
        </>
    )
}