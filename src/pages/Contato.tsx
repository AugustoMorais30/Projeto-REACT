import { Menu } from "../components/Menu";
import img from '../img/contato.jpg'
import '../pages/Contato.css'

export const Contato = () => {
    return (
        <>
            <Menu />
            <img src={img} alt="" className="" />
            <main>
                <h1>Contato:</h1>
                <p>+55 (85) 98778-0479</p>
                <form action="" >
                    <div>
                        <label form="name">Nome: </label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label form="email">E-mail: </label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label form="mensagem">Mensagem: </label>
                        <input type="mensagem" id="mensagem" />
                    </div>
                    <div className="button">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </main>
        </>
    )
}