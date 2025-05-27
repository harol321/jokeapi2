import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categoria from './componentes/Categoria';
import Favoritos from './componentes/Favoritos';
import Menu from './componentes/Menu';
import Listar from './componentes/Listar';
import AgregarChiste from './componentes/AgregarChiste';
import Inicio from './componentes/Inicio';
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import Usuario from './componentes/usuarios';
import ListarChistes from './componentes/ListarChistes'; 

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [chistes, setChistes] = useState([]);

  const agregarAFavoritos = (chiste) => {
    if (!favoritos.find(f => f.id === chiste.id)) {
      setFavoritos([...favoritos, chiste]);
    }
  };

  const agregarChiste = (nuevo) => {
    setChistes(prev => [...prev, nuevo]);
  };

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/categoria/:tipo" element={<Categoria chistes={chistes} onFavorito={agregarAFavoritos} />} />
        <Route path="/favoritos" element={<Favoritos favoritos={favoritos} />} />
        <Route path="/listar" element={<Listar chistes={chistes} />} />
        <Route path="/agregar" element={<AgregarChiste onAgregar={agregarChiste} />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/ListarChistes" element={<ListarChistes />} />
      </Routes>
    </Router>
  );
}

export default App;
