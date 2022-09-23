import "./style.css";
import {Link} from "react-router-dom";
export const Menu = () => {
    return (
        <>
            <header>
                <h1 className="Logo">LOGO T.I</h1>
                <h1 className="Pro">Projeto de React</h1>
                <nav className="Menu">
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                        <li><Link to='/servico'>Serviço</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>                                                                       
                    </ul>
                </nav>
            </header>
        </>
    )
};