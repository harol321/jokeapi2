import './Favoritos.css';

function Favoritos({ favoritos }) {
  return (
    <div className="c-lista">
      {favoritos.length === 0 ? (
        <p>No hay favoritos aún.</p>
      ) : (
        favoritos.map(chiste => (
          <div className="c-lista-chiste" key={chiste.id}>
            <img src={chiste.imagen} alt={`Chiste ${chiste.id}`} width="200" />
          </div>
        ))
      )}
    </div>
  );
}

export default Favoritos;
