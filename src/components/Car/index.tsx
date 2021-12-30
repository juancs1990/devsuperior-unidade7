import './styles.css';
import CardCar from '../../assets/images/car-card.png';

const Car = () => {
  return (
    <div className="card-car-container">
      <img src={CardCar} alt="Nome do produto" />
      <h3>Audi Supra TT</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <button>
        <h6>COMPRAR</h6>
      </button>
    </div>
  );
};

export default Car;
