import { Link } from 'react-router-dom';
import CarImg from '../../assets/images/car-header.png';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <img src={CarImg} alt="Imagem do Carro" />
        </div>
      </div>
      <div className="home-product-card">
        <div className="home-product-container">
          <div>
            <Link to="/catalog">
              <button>VER CATÁLOGO</button>
            </Link>
          </div>
          <div>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
