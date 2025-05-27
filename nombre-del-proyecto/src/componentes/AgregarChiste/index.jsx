import { useState } from 'react';
import './AgregarChiste.css';
import { supabase } from '../../supabase'; // Ajusta si tu ruta es diferente

function AgregarChiste() {
  const [imagen, setImagen] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!imagen || !categoria) {
      alert('Completa todos los campos');
      return;
    }

    // Insertar en Supabase
    const { error } = await supabase.from('chistes').insert([
      { imagen, categoria }
    ]);

    if (error) {
      console.error('Error al agregar chiste:', error.message);
      setMensaje('Error al agregar chiste');
    } else {
      setMensaje('✅ Chiste agregado');
      setImagen('');
      setCategoria('');
    }
  };

  return (
    <form className="formulario-agregar" onSubmit={manejarEnvio}>
      <h3>Agregar nuevo chiste</h3>
      <input
        type="url"
        placeholder="URL de imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Selecciona una categoría</option>
        <option value="borrachos">Borrachos</option>
        <option value="ninos">Niños</option>
        <option value="negros">Negros</option>
        <option value="tock">Tock</option>
        <option value="animales">Animales</option>
      </select>
      <button type="submit">Agregar chiste</button>
      {mensaje && <p style={{ color: 'green', marginTop: '10px' }}>{mensaje}</p>}
    </form>
  );
}

export default AgregarChiste;
