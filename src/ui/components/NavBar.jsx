import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm p-4 custom-navbar">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active-link' : ''}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active-link' : ''}`}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active-link' : ''}`}
            to="/search"
          >
            Busca
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active-link' : ''}`}
            to="/hero"
          >
            Heroes
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active-link' : ''}`}
            to="/gifshero"
          >
            Gifs
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-warning">Bienvenido, Usuario!</span>

          <button className="nav-item nav-link btn custom-logout-btn" onClick={onLogout}>
            Cerrar Sesion
          </button>
        </ul>
      </div>
    </nav>
  );
};
