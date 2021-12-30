import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md bg-primary navbar-dark main-nav " >
      <div className="container-fluid">
        {' '}
        {/* previne quebra de linha entre logo e itens */}
        <div className="nav-logo">
        <Link to="/" className="nav-logo-text">
           <h2>Carros Top</h2>
        </Link>
        </div>
        <button
          className="navbar-toggler toggler-example"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#car-navbar"
          aria-controls="car-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon icon-bar" ></span>
        </button>
        <div className="collapse navbar-collapse" id="car-navbar">
          <ul className="navbar-nav offset-md-8 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
