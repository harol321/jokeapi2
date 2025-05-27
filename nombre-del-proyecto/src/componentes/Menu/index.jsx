import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/categoria/borrachos">Borrachos</Link>
      <Link to="/categoria/negros">Negros</Link>
      <Link to="/categoria/ninos">Niños</Link>
      <Link to="/categoria/animales">Animales</Link>
      <Link to="/categoria/tock">Tock</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/agregar">Agregar</Link>
      <Link to="/usuario">Perfil</Link>
      <Link to="/login">Login</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/ListarChistes">listar</Link>
    </nav>
  );
}
