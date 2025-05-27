import { useEffect, useState } from 'react';
import { supabase } from '../../supabase';

function Listar() {
  const [chistes, setChistes] = useState([]);

  useEffect(() => {
    const cargarChistes = async () => {
      const { data, error } = await supabase.from('chistes').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error('Error al listar:', error.message);
      } else {
        setChistes(data);
      }
    };

    cargarChistes();
  }, []);

  return (
    <div>
      <h2>Listado de chistes</h2>
      <ul>
        {chistes.map((chiste) => (
          <li key={chiste.id}>
            <img src={chiste.imagen} alt="chiste" style={{ width: '200px' }} />
            <p><strong>Categoría:</strong> {chiste.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listar;
