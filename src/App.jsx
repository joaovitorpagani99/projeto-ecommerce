import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Galeria from './pages/Galeria';
import Rodape from './components/Rodape';
import { Toaster } from "react-hot-toast";
import Catalogo from './pages/Catalogo';
import { UsuarioContext } from './contexts/UsuarioContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase/config";
import './App.css'
import Sobre from './pages/Sobre';
import { Container } from 'react-bootstrap';
import AdicionarProduto from './pages/AdicionarProduto';
import MeusPedidos from './pages/MeusPedidos';
import AlterarPedido from './pages/AlterarPedido';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);


  if (loading) {
    return null;
  }

  return (
    <UsuarioContext.Provider value={usuarioLogado} >
      <div className='min-heigth'>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/catalogo/:id' element={<Catalogo />} />
            <Route path='/meus-pedidos' element={<MeusPedidos />} />
            <Route path='/adicionarProdutos' element={<AdicionarProduto />} />
            <Route path='/alterar-pedido/:id' element={<AlterarPedido />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position='bottom-right' />
      </div>

    </UsuarioContext.Provider>
  )
}

export default App
