import { Menu } from "../components/Menu";
import img from '../img/card.jpg'

export const Card = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Card:</h1>
             <p></p>
        </main>
        </>
    )
}