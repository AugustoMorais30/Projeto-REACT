import { Menu } from "../components/Menu";
import img from '../img/sobre.jpg'

export const Sobre = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Sobre:</h1>
             <p></p>
        </main>
        </>
    )
}