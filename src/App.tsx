import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Servico } from './pages/Servico';
import { Contato } from './pages/Contato';
import { Home } from "./pages/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/contato' element={<Contato/>}/>
<Route path='/servico' element={<Servico/>}/>
    </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
