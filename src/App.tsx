import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Servico } from './pages/Servico';
import { Contato } from './pages/Contato';
import { Home } from "./pages/Home";
import { Sobre } from './pages/Sobre';
import { Card } from './pages/Card';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/sobre' element={<Sobre/>}/>
<Route path='/contato' element={<Contato/>}/>
<Route path='/servico' element={<Servico/>}/>
<Route path='/card' element={<Card/>}/>
    </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
