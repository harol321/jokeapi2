import './Categoria.css';
import { useParams } from 'react-router-dom';

function Categoria({ onFavorito }) {
  const { tipo } = useParams();

const chistes = [
  { id: 1, categoria: 'borrachos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2QM6BZWMvwkfWzWxSCjQP-q1x6Y6o4L4Xg&s' },
  { id: 2, categoria: 'borrachos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu1osGvFlWmBdXEQKeHRKQfKI01c09EZiOA&s' },
  { id: 3, categoria: 'borrachos', imagen: 'https://cdn.slidesharecdn.com/ss_thumbnails/areir219-thumbnail.jpg?width=560&fit=bounds' },
  { id: 4, categoria: 'borrachos', imagen: 'https://i.pinimg.com/736x/d8/43/d1/d843d13eedd98d9ff5ca205b7d88a1f8.jpg' },
  { id: 5, categoria: 'borrachos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyo4F-j2Rr3kY3FxDRbVJKpy9sbtnQQ-M4Nozvu0qARB-6w7gO-5zLR1tLdBJcn7_xFc&usqp=CAU' },
{ id: 6, categoria: 'borrachos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid2dEQ2gCF5vxxwlqP3rlYYNCInGAcBighk8Wp3EjkHtLfli1mUztizCA4TgpQbbI66E&usqp=CAU' },
{ id: 7, categoria: 'borrachos', imagen: 'https://www.chistegenial.com/wp-content/uploads/2018/01/chiste-un-borracho-llama-a-su-novio.jpg' },
{ id: 8, categoria: 'borrachos', imagen: 'https://pbs.twihttps://i.pinimg.com/474x/88/c7/94/88c79487f735175b637736eda7245bac.jpgmg.com/media/EUyphtbWoAIWy5K.jpg:large' },
{ id: 9, categoria: 'borrachos', imagen: '' },
{ id: 10, categoria: 'borrachos', imagen: 'https://i.pinimg.com/236x/9e/f9/0d/9ef90dff3969cc69e64e3c3b6116cd74.jpg' },
{ id: 11, categoria: 'ninos', imagen: 'https://cdn.babysits.com/content/community/community-resources/co/sal-chicha.jpg' },
{ id: 12, categoria: 'ninos', imagen: 'https://i.pinimg.com/originals/bf/56/5a/bf565a9bf735acf7a5580ea59ce36054.jpg' },
{ id: 13, categoria: 'ninos', imagen: 'https://i0.wp.com/docentesaldia.com/wp-content/uploads/2022/10/chistes-cortos-para-ninos-1.png?resize=960%2C960&ssl=1' },
{ id: 14, categoria: 'ninos', imagen: 'https://i0.wp.com/docentesaldia.com/wp-content/uploads/2022/10/chistes-cortos-para-ninos-5.png?fit=960%2C960&ssl=1' },
{ id: 15, categoria: 'ninos', imagen: 'https://i.pinimg.com/originals/5f/e9/dd/5fe9dd8b36bf115d3836ccf08799e933.webp' },
{ id: 16, categoria: 'ninos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwJlpm79n0FkD2PpkkCwxQqjuw09d-i0J2g&s' },
{ id: 17, categoria: 'ninos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eMo5z9NlrLR6jq-jEJfZXTv1CcbKVWl-BZqopROQ00Rx1Q1bkvZStWHJAuj1x2h3WsU&usqp=CAU' },
{ id: 18, categoria: 'ninos', imagen: 'https://i.pinimg.com/originals/b6/c5/de/b6c5deb640dc1b43be2606585fa35f10.webp' },
{ id: 19, categoria: 'ninos', imagen: 'https://i0.wp.com/www.cristic.com/wp-content/uploads/2023/07/cristic-recursos-educativos-familias-chistes-divertidos-ninos-9-dientes.png?resize=1080%2C1350&ssl=1' },
{ id: 20, categoria: 'ninos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQXRwkqRxHOg15UColbLiq4HaYlMiz7sIDA&s' },
{ id: 21, categoria: 'negros', imagen: 'https://i.pinimg.com/736x/5c/64/64/5c6464d66405bb5cd8bd5f3f904d105b.jpg' },
{ id: 22, categoria: 'negros', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF86bqS2QHXI7XDndEz-aG2-8Kf5q7kSpTBpTAapEZSjJerUDiKEYRGuy0npQZhCAiEK0&usqp=CAU' },
{ id: 23, categoria: 'negros', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6hUSoTvWgKeU6Y9f2yAGtN15bDQDapHuqxESFSMr-fAq1jlVwoLQ0SoQIwwD1Umx9A7k&usqp=CAU' },
{ id: 24, categoria: 'negros', imagen: 'https://i.pinimg.com/236x/da/64/05/da6405708ec7c4077c1314813f821f60.jpg' },
{ id: 25, categoria: 'negros', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtQdREXKjDyJ2C4GHZvxzFbYBtycmRMK3E93wgii0YLwJukTMHt7PQacR-o9Raa9gdqU&usqp=CAU' },
{ id: 26, categoria: 'negros', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jgPREM_DHiK34XJNnGIt1qRmxEoMN-e5Mg&s' },
{ id: 27, categoria: 'negros', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAnXMxIP1bixER_aeA77vIpGbuDAysxWucnfHQAAeR8OZx6ypxXb9cqvemuuQiMgE0jU&usqp=CAU' },
{ id: 28, categoria: 'negros', imagen: 'https://statics.memondo.com/p/99/vefs/2021/03/VEF_847299_a7375123793244f89639dd289e0775ff_twitter_una_de_humor_negro_por_manucaldel_thumb_fb.jpg?cb=4243645' },
{ id: 29, categoria: 'negros', imagen: 'https://imagenes.elpais.com/resizer/v2/GU5ANOVTBJN3NLTFK4SARIXJQM.jpg?auth=bbc82f18bb1537a529a6a7e545b8439a197fe3216edd0eb1d709cf07578c5679&width=414' },
{ id: 30, categoria: 'negros', imagen: 'https://c.files.bbci.co.uk/35C9/production/_96996731_negro9.jpg' },
{ id: 31, categoria: 'tock', imagen: 'https://i.pinimg.com/736x/5d/25/3d/5d253d5abbd25b4b23764a9ce2801b91.jpg' },
{ id: 32, categoria: 'tock', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGdjBDXlwWPie_oJdwptXI_FuyufOIrRKug&s' },
{ id: 33, categoria: 'tock', imagen: 'https://i.pinimg.com/originals/16/69/04/166904808513ab17f0f737423c938e69.jpg' },
{ id: 34, categoria: 'tock', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyBi3kU63CeZzn5nE97n24jRWv1cJ8y1SQg&s' },
{ id: 35, categoria: 'tock', imagen: 'https://ih1.redbubble.net/image.443021531.6704/sn,x600-pad,600x600,f8f8f8.u4.jpg' },
{ id: 36, categoria: 'animales', imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.babysits.co%2Frecursos-para-la-comunidad%2F2801%2Fchistes-para-ni%25C3%25B1os-los-mejores-chistes-cortos-para-troncharse-de-risa%2F&psig=AOvVaw1bSsW4nLOnsHRfDkpp_ND2&ust=1745191276424000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjG5LKe5YwDFQAAAAAdAAAAABAE' },
{ id: 37, categoria: 'animales', imagen: 'https://cdn.babysits.com/content/community/community-resources/co/panda.jpg' },
{ id: 38, categoria: 'animales', imagen: 'https://cdn.babysits.com/content/community/community-resources/co/apollo.jpg' },
{ id: 39, categoria: 'animales', imagen: 'https://cdn.babysits.com/content/community/community-resources/co/caldo.jpg' },
{ id: 40, categoria: 'animales', imagen: 'https://cdn.babysits.com/content/community/community-resources/co/pata-y-pato.jpg' },

  ];
const filtrados = chistes.filter(c => c.categoria === tipo);


  return (
    <div className="c-lista">
      {filtrados.map(chiste => (
        <div className="c-lista-chiste" key={chiste.id}>
          <img src={chiste.imagen} alt={`Chiste ${chiste.id}`} width="200" />
          <button onClick={() => onFavorito(chiste)}>Agregar a Favoritos</button>
        </div>
      ))}
    </div>
  );
}

export default Categoria;
