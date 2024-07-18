import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Produtos from './pages/Produtos';
import Galeria from './pages/Galeria';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
