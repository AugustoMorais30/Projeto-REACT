import { Menu } from "../components/Menu";
import img from '../img/home.jpg'
import '../pages/Home.css'

export const Home = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Home</h1>
             <p>QUEM QUER RESULTADO PRECISA DE ESTRATÉGIA E PONTO FINAL.</p>
        </main>        
        </>
    )
}
 