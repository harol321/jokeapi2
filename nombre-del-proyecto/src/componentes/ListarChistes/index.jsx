import { useEffect, useState } from 'react';
import { supabase } from '../../supabase';

function ListarChistes() {
  const [chistes, setChistes] = useState([]);

  useEffect(() => {
    const obtenerChistes = async () => {
      const { data, error } = await supabase
        .from('chistes')
        .select('*')
        .order('creado_en', { ascending: false });

      if (error) {
        console.error('Error al obtener chistes:', error.message);
      } else {
        setChistes(data);
      }
    };

    obtenerChistes();
  }, []);

  return (
    <div>
      <h2>Chistes agregados</h2>
      {chistes.length === 0 ? (
        <p>No hay chistes aún.</p>
      ) : (
        <ul>
          {chistes.map((chiste) => (
            <li key={chiste.id}>
              <img src={chiste.imagen} alt="chiste" style={{ width: '200px' }} />
              <p><strong>Categoría:</strong> {chiste.categoria}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListarChistes;

