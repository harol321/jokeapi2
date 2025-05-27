import { useState } from 'react';
import Registro from '../Registro';
import Login from '../Login';

const Inicio = () => {
  const [mostrarModal, setMostrarModal] = useState(null); // 'login' o 'registro'

  return (
    <div>
      <h2>Bienvenido</h2>

      {/* Botones para abrir la ventana emergente */}
      <button onClick={() => setMostrarModal('login')}>Iniciar sesión</button>
      <button onClick={() => setMostrarModal('registro')}>Registrarse</button>

      {/* Modal */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <button onClick={() => setMostrarModal(null)}>Cerrar</button>
            {mostrarModal === 'login' ? <Login onSuccess={() => setMostrarModal(null)} /> : <Registro onSuccess={() => setMostrarModal(null)} />}
          </div>
        </div>
      )}

      {/* Mostrar algunos chistes en la página principal */}
      <div className="chistes-principales">
        <h3>Chistes destacados:</h3>
       
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2QM6BZWMvwkfWzWxSCjQP-q1x6Y6o4L4Xg&s" alt="Chiste 1" width="500" />
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu1osGvFlWmBdXEQKeHRKQfKI01c09EZiOA&s" alt="Chiste 2" width="500" />
<img src="https://cdn.slidesharecdn.com/ss_thumbnails/areir219-thumbnail.jpg?width=560&fit=bounds" alt="Chiste 3" width="500" />
<img src="https://i.pinimg.com/736x/d8/43/d1/d843d13eedd98d9ff5ca205b7d88a1f8.jpg" alt="Chiste 4" width="500" />
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyo4F-j2Rr3kY3FxDRbVJKpy9sbtnQQ-M4Nozvu0qARB-6w7gO-5zLR1tLdBJcn7_xFc&usqp=CAU" alt="Chiste 5" width="500" />
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid2dEQ2gCF5vxxwlqP3rlYYNCInGAcBighk8Wp3EjkHtLfli1mUztizCA4TgpQbbI66E&usqp=CAU" alt="Chiste 6" width="500" />
<img src="https://www.chistegenial.com/wp-content/uploads/2018/01/chiste-un-borracho-llama-a-su-novio.jpg" alt="Chiste 7" width="500" />
<img src="https://pbs.twimg.com/media/EUyphtbWoAIWy5K.jpg:large" alt="Chiste 8" width="500" />
<img src="https://i.pinimg.com/474x/88/c7/94/88c79487f735175b637736eda7245bac.jpg" alt="Chiste 9" width="500" />
<img src="https://i.pinimg.com/236x/9e/f9/0d/9ef90dff3969cc69e64e3c3b6116cd74.jpg" alt="Chiste 10" width="500" />
<img src="https://cdn.babysits.com/content/community/community-resources/co/sal-chicha.jpg" alt="Chiste 11" width="500" />
<img src="https://i.pinimg.com/originals/bf/56/5a/bf565a9bf735acf7a5580ea59ce36054.jpg" alt="Chiste 12" width="500" />
<img src="https://i0.wp.com/docentesaldia.com/wp-content/uploads/2022/10/chistes-cortos-para-ninos-1.png?resize=960%2C960&ssl=1" alt="Chiste 13" width="500" />
<img src="https://i0.wp.com/docentesaldia.com/wp-content/uploads/2022/10/chistes-cortos-para-ninos-5.png?fit=960%2C960&ssl=1" alt="Chiste 14" width="500" />
<img src="https://i.pinimg.com/originals/5f/e9/dd/5fe9dd8b36bf115d3836ccf08799e933.webp" alt="Chiste 15" width="500" />
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwJlpm79n0FkD2PpkkCwxQqjuw09d-i0J2g&s" alt="Chiste 16" width="500" />
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eMo5z9NlrLR6jq-jEJfZXTv1CcbKVWl-BZqopROQ00Rx1Q1bkvZStWHJAuj1x2h3WsU&usqp=CAU" alt="Chiste 17" width="500" />
<img src="https://i.pinimg.com/originals/b6/c5/de/b6c5deb640dc1b43be2606585fa35f10.webp" alt="Chiste 18" width="500" />
<img src="https://i0.wp.com/www.cristic.com/wp-content/uploads/2023/07/cristic-recursos-educativos-familias-chistes-divertidos-ninos-9-dientes.png?resize=1080%2C1350&ssl=1" alt="Chiste 19" width="500" />
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQXRwkqRxHOg15UColbLiq4HaYlMiz7sIDA&s" alt="Chiste 20" width="500" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid2dEQ2gCF5vxxwlqP3rlYYNCInGAcBighk8Wp3EjkHtLfli1mUztizCA4TgpQbbI66E&usqp=CAU" alt="Chiste 2" width="200" />
      </div>
    </div>
  );
};

export default Inicio;